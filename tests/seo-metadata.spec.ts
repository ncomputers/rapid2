import { test, expect } from '@playwright/test';

const routes = [
  { path: '/', expectedTitle: /Rapid Corp/i },
  { path: '/about', expectedTitle: /About/i },
  { path: '/services', expectedTitle: /Services/i },
  { path: '/services/it-infrastructure', expectedTitle: /IT Infrastructure/i },
  { path: '/services/cctv-surveillance', expectedTitle: /CCTV/i },
  { path: '/services/managed-it-amc', expectedTitle: /AMC/i },
  { path: '/services/cloud-solutions', expectedTitle: /Cloud/i },
  { path: '/services/hardware-procurement', expectedTitle: /Hardware/i },
  { path: '/services/advanced-solutions', expectedTitle: /AI|Automation/i },
  { path: '/industries', expectedTitle: /Industr/i },
  { path: '/contact', expectedTitle: /Contact|Rapid Corp/i },
];

test.describe('SEO Metadata & Structured Data Tests', () => {
  for (const route of routes) {
    test(`Verify SEO tags on ${route.path}`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);

      // 1. Title verification
      await expect(page).toHaveTitle(route.expectedTitle);

      // 2. Meta description verification
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveCount(1);
      const descContent = await metaDescription.getAttribute('content');
      expect(descContent).toBeTruthy();
      expect(descContent!.length).toBeGreaterThan(40);

      // 3. Canonical link verification
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveCount(1);
      const canonicalHref = await canonical.getAttribute('href');
      expect(canonicalHref).toContain('https://rapidcorp.in');

      // 4. OpenGraph tags
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toHaveCount(1);
      const ogImage = page.locator('meta[property="og:image"]');
      await expect(ogImage).toHaveCount(1);
    });
  }

  test('Verify Homepage Schema.org structured data validity', async ({ page }) => {
    await page.goto('/');
    const scriptTags = await page.locator('script[type="application/ld+json"]').all();
    expect(scriptTags.length).toBeGreaterThan(0);

    for (const tag of scriptTags) {
      const text = await tag.textContent();
      expect(text).toBeTruthy();
      const parsed = JSON.parse(text!);
      expect(parsed['@context']).toBe('https://schema.org');
    }
  });

  test('Verify dynamic sitemap and robots.txt endpoints', async ({ request }) => {
    // Sitemap
    const sitemapRes = await request.get('/sitemap.xml');
    expect(sitemapRes.status()).toBe(200);
    const sitemapText = await sitemapRes.text();
    expect(sitemapText).toContain('<urlset');
    expect(sitemapText).toContain('https://rapidcorp.in/services/cctv-surveillance');

    // Robots.txt
    const robotsRes = await request.get('/robots.txt');
    expect(robotsRes.status()).toBe(200);
    const robotsText = await robotsRes.text();
    expect(robotsText).toContain('User-Agent: *');
    expect(robotsText).toContain('https://rapidcorp.in/sitemap.xml');
  });
});
