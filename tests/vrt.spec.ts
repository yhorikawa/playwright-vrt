import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  expect(
    await page.screenshot({ animations: 'disabled', fullPage: true })
  ).toMatchSnapshot('playwright.png', {
    threshold: 0.1,
  })
});
