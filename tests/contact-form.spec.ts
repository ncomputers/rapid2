import { test, expect } from '@playwright/test';

test.describe('Contact Form & Lead Capture Tests', () => {
  test('Contact form fields render and enforce required attributes', async ({ page }) => {
    await page.goto('/contact');

    const nameInput = page.locator('#name');
    const emailInput = page.locator('#email');
    const phoneInput = page.locator('#phone');
    const messageInput = page.locator('#message');
    const submitBtn = page.getByRole('button', { name: /Send Project Brief/i });

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(phoneInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    await expect(submitBtn).toBeVisible();

    // Verify required attributes (name, email, phone required; message optional for low-friction lead capture)
    await expect(nameInput).toHaveAttribute('required', '');
    await expect(emailInput).toHaveAttribute('required', '');
    await expect(phoneInput).toHaveAttribute('required', '');
    await expect(messageInput).not.toHaveAttribute('required', '');

    // Test filling in values
    await nameInput.fill('Playwright Test User');
    await emailInput.fill('test@rapidcorp.in');
    await phoneInput.fill('+91 98285 19299');
    await messageInput.fill('Automated e2e test verification message.');

    await expect(nameInput).toHaveValue('Playwright Test User');
  });

  test('Ask Price prefills the contact form with the product', async ({ page }) => {
    await page.goto('/services/firewall-security');
    await page.getByRole('link', { name: 'Ask price for FortiGate 50G' }).click();
    await expect(page).toHaveURL(/\/contact\?service=firewall-security/);
    await expect(page.locator('#message')).toHaveValue(/FortiGate 50G/);
    await expect(page.locator('#service')).toHaveValue('Firewall & Network Security');
  });

  test('Product page form sends the product with the lead', async ({ page }) => {
    let body: Record<string, string> = {};
    // Mocked: never deliver a test lead.
    await page.route('**/api/contact', async (route) => {
      body = route.request().postDataJSON();
      await route.fulfill({ json: { ok: true } });
    });
    await page.goto('/products/fortigate-60f');
    await page.locator('#quote-name').fill('Test');
    await page.locator('#quote-phone').fill('9999999999');
    await page.getByRole('button', { name: 'Get Price' }).click();
    await expect(page.getByText('Thank you. We will contact you')).toBeVisible();
    expect(body.message).toContain('FortiGate 60F');
  });

  test('Product search filters the list', async ({ page }) => {
    await page.goto('/products');
    await page.locator('#product-search').fill('fortigate 60f');
    await expect(page.locator('main a[href="/products/fortigate-60f"]')).toBeVisible();
    await expect(page.locator('main a[href="/products/canon-mf3010"]')).toHaveCount(0);
  });

  test('Product form shows an error when the lead is not delivered', async ({ page }) => {
    await page.route('**/api/contact', (route) => route.fulfill({ status: 502, json: { error: 'x' } }));
    await page.goto('/products/fortigate-60f');
    await page.locator('#quote-name').fill('Test');
    await page.locator('#quote-phone').fill('9999999999');
    await page.getByRole('button', { name: 'Get Price' }).click();
    await expect(page.getByText('Could not send. Please call')).toBeVisible();
  });
});
