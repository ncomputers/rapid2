import { test, expect } from '@playwright/test';

test.describe('Responsive Layout & Visual Integrity Tests', () => {
  const pagesToTest = ['/', '/about', '/services', '/services/cctv-surveillance', '/contact'];

  for (const p of pagesToTest) {
    test(`Verify no horizontal scroll overflow on ${p}`, async ({ page }) => {
      await page.goto(p);

      // Verify page layout doesn't overflow viewport horizontally
      const isOverflowing = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(isOverflowing).toBe(false);

      // Verify WhatsApp floating button is always present
      const whatsappBtn = page.locator('a[aria-label*="WhatsApp"]');
      await expect(whatsappBtn).toBeVisible();
      await expect(whatsappBtn).toHaveAttribute('href', /wa\.me\/919828519299/);
    });
  }
});
