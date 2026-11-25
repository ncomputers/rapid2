import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, service, message } = data;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: 'Name and at least one contact method (email or phone) are required.' },
        { status: 400 }
      );
    }

    // Log the lead server-side for permanent record in container logs
    console.log('[LEAD CAPTURED]', {
      timestamp: new Date().toISOString(),
      name,
      company: company || 'N/A',
      email: email || 'N/A',
      phone: phone || 'N/A',
      service: service || 'General',
      message: message || 'N/A',
    });

    // Forward to Formspree server-side
    try {
      const formspreeRes = await fetch('https://formspree.io/f/xrbqrroa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          company: company || '',
          email: email || '',
          phone: phone || '',
          service: service || '',
          message: message || '',
        }),
      });

      if (!formspreeRes.ok) {
        console.warn('[LEAD] Formspree responded with non-200 status:', formspreeRes.status);
      }
    } catch (fsErr) {
      console.error('[LEAD] Error forwarding to Formspree:', fsErr);
    }

    return NextResponse.json({ ok: true, message: 'Inquiry received successfully' });
  } catch (error) {
    console.error('[LEAD] Unexpected error parsing contact form request:', error);
    return NextResponse.json(
      { error: 'Invalid submission data' },
      { status: 500 }
    );
  }
}
