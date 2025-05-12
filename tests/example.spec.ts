import { test, expect } from '@playwright/test';

test('search for playwright on Google', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const searchBox = page.locator('textarea[title="Buscar"]');
  await searchBox.click();
  await searchBox.fill('playwright');
  await expect(searchBox).toHaveValue('playwright');
});