import { test, expect } from '@playwright/test';

test.describe('Navigation & User Flow Tests', () => {
  test('Header navigation and logo link work', async ({ page, isMobile }) => {
    await page.goto('/');

    // Check brand logo link
    const logoLink = page.getByRole('link', { name: /RAPID CORP/i }).first();
    await expect(logoLink).toBeVisible();

    if (!isMobile) {
      // Check consultation CTA in header for desktop / tablet
      const consultationCta = page.getByRole('link', { name: /Get Consultation/i }).first();
      await expect(consultationCta).toBeVisible();
      await consultationCta.click();
      await expect(page).toHaveURL(/\/contact/);
    }
  });

  test('Footer links and contact points work', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Verify phone link
    const phoneLink = footer.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toHaveAttribute('href', 'tel:+919828519299');

    // Verify email link
    const emailLink = footer.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toHaveAttribute('href', 'mailto:admin@rapidcorp.in');
  });

  test('Mobile hamburger menu toggle on mobile viewport', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Only run on mobile viewports');

    await page.goto('/');
    const burgerButton = page.getByRole('button', { name: /Toggle navigation menu/i });
    await expect(burgerButton).toBeVisible();

    // Open menu
    await burgerButton.click();
    const servicesMobileLink = page.getByRole('link', { name: 'Services' }).last();
    await expect(servicesMobileLink).toBeVisible();

    // Click link and verify navigation
    await servicesMobileLink.click();
    await expect(page).toHaveURL(/\/services/);
  });
});
