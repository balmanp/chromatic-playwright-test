// tests/segmented-tooltip.spec.js

// ➖ Remove this line
// import { test, expect } from '@playwright/test';
// ➕ Add this line
import { test, expect } from "@chromatic-com/playwright";

test('has title', async ({ page }) => {
  await page.goto('https://tympanus.net/Development/PixelGooeyTooltip/');
  await expect(page).toHaveTitle(/Segmented Tooltip Animation/);
});

test('displays tooltip', async ({ page }) => {
  await page.goto('https://tympanus.net/Development/PixelGooeyTooltip/');
  await page.locator('css=.trigger').first().hover({ force: true });
  await expect(
    page.locator('css=#tooltip-1 .tooltip__content-desc.glitch')
  ).toHaveCSS('opacity', '1');
});