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

    // Verify required attribute
    await expect(nameInput).toHaveAttribute('required', '');
    await expect(emailInput).toHaveAttribute('required', '');
    await expect(phoneInput).toHaveAttribute('required', '');
    await expect(messageInput).toHaveAttribute('required', '');

    // Test filling in values
    await nameInput.fill('Playwright Test User');
    await emailInput.fill('test@rapidcorp.in');
    await phoneInput.fill('+91 98285 19299');
    await messageInput.fill('Automated e2e test verification message.');

    await expect(nameInput).toHaveValue('Playwright Test User');
  });
});
