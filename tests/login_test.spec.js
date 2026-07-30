 import { test, expect } from '@playwright/test';
 test('login test 1', async ({ page }) => {
 await page.goto('https://www.brightedge.com/secure/login');
 await page.locator('#UserLogin').fill('collections_test18@brightedge.com');
 await page.locator('#UserPassword').fill('<edgescout81>');
 await page.locator('#login_submit').click();
 await expect(page).toHaveURL('https://app18.brightedge.com/ui/platform-r/home/');
 await expect(page.locator("span[role='heading']")).toBeVisible();
 await expect(page.locator("span:has-text('Home')")).toBeVisible();
 });


test('login test 2', async ({ page }) => {
await page.goto('https://dev.galleyx.aero/login');
await page.locator('#login-name').fill('umme.a');
await page.locator('#password').fill('mindfire@umme');
//await page.getByRole('submit', { name: 'Sign In' }).click();
await page.getByRole('button', { name: 'Sign In', exact: true }).click();
await expect(page).toHaveURL('https://dev.galleyx.aero/dashboard');
})


test.only('login test 3', async ({ page }) => {
await page.goto('https://dev.galleyx.aero/login');
await page.locator('#login-name').pressSequentially('umme.a');
await page.locator('#password').fill('mindfire@umme');
//await page.getByRole('submit', { name: 'Sign In' }).click();
await page.getByRole('button', { name: 'Sign In', exact: true }).click();
await expect(page).toHaveURL('https://dev.galleyx.aero/dashboard');
//await page.locator('svg[class="w-5 h-5"]').click();
await page.locator('svg[class="text-text-primary w-6 h-6"]').click();
await page.locator('a[data-zoe="sidebar.meal-planner"]').click();
await page.locator('h2[class="mt-4 text-lg font-semibold text-gray-900"]').first().click();
await expect(page).toHaveURL('https://dev.galleyx.aero/meal-planner/recipes');
// await page.locator('h2[class="mt-4 text-lg font-semibold text-gray-900"]').last().click();
// await expect(page).toHaveURL('https://dev.galleyx.aero/meal-planner/pricing-calculator');
// await page.locator('h2[class="mt-4 text-lg font-semibold text-gray-900"]').nth(1).click();
// await expect(page).toHaveURL('https://dev.galleyx.aero/meal-planner/menus');
})