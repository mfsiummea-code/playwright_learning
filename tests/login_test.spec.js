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


test('login test 3', async ({ page }) => {
await page.goto('https://dev.galleyx.aero/login');
await page.locator('#login-name').pressSequentially('umme.a');
await page.locator('#password').fill('mindfire@umme');
//await page.getByRole('submit', { name: 'Sign In' }).click();
await page.getByRole('button', { name: 'Sign In', exact: true }).click();
await expect(page).toHaveURL('https://dev.galleyx.aero/dashboard');
//await page.locator('svg[class="w-5 h-5"]').click();
await page.locator('svg[class="text-text-primary w-6 h-6"]').click();
await page.locator('button.p-1 > svg').click();
await page.locator('a[data-zoe="sidebar.meal-planner"]').click();
// await page.locator('h2[class="mt-4 text-lg font-semibold text-gray-900"]').first().click();
// await expect(page).toHaveURL('https://dev.galleyx.aero/meal-planner/recipes');
// await page.locator('h2[class="mt-4 text-lg font-semibold text-gray-900"]').last().click();
// await expect(page).toHaveURL('https://dev.galleyx.aero/meal-planner/pricing-calculator');
await page.locator('h2[class="mt-4 text-lg font-semibold text-gray-900"]').nth(1).click();
await expect(page).toHaveURL('https://dev.galleyx.aero/meal-planner/menus');
})

test('test checkbox 4', async ({ page }) => {
await page.goto('https://dev.galleyx.aero/login');
await page.locator('#login-name').pressSequentially('umme.a');
await page.locator('#password').fill('mindfire@umme');
//await page.getByRole('submit', { name: 'Sign In' }).click();
await page.getByRole('button', { name: 'Sign In', exact: true }).click();
await expect(page).toHaveURL('https://dev.galleyx.aero/dashboard');
//await page.locator('svg[class="w-5 h-5"]').click();
await page.locator('svg[class="text-text-primary w-6 h-6"]').click();
//await page.locator('button.p-1 > svg').click();
await page.locator('a[data-zoe="sidebar.portioning"]').click();
await page.getByRole('checkbox', { name: 'Oman Air' }).check();
const airlinesSection = page.locator('#_r_2_');
await airlinesSection.getByRole('button', { name: 'Apply' }).click();
})


// test.only('test file upload', async ({ page }) => {
// await page.goto('https://demo.galleyx.aero/login');
// await page.locator('#login-name').pressSequentially('umme.a');
// await page.locator('#password').fill('mindfire@umme');
// await page.getByRole('button', { name: 'Sign In', exact: true }).click();
// await expect(page).toHaveURL('https://demo.galleyx.aero/dashboard');
// await page.locator('svg[class="text-text-primary w-6 h-6"]').click();
//   await page.locator('a[data-zoe="sidebar.flight-hub"]').click();
//   //await page.getByRole('button').nth(4).click();
//   //await page.getByRole('link', { name: 'Flight Hub' }).click();
//   await page.getByPlaceholder('Enter').click();
//   await page.getByPlaceholder('Enter').fill('245');
//   const editIcon = page.locator('.relative > svg > path');
//   await expect(editIcon).toBeVisible();
//   await editIcon.click();
//   //await page.locator('.relative > svg > path').click();
//   await page.goto('https://demo.galleyx.aero/flight-details/019e29c6-0d23-75ea-bf1e-4d0490da93f0');
//   await page.getByRole('button', { name: 'Invoice' }).click();
//   await page.getByRole('button', { name: 'Generate Invoice' }).click();
//   await page.getByRole('button', { name: 'Upload PDF' }).click();
//   await page.locator('input[type="file"]').setInputFiles('test1.pdf');
// });

test('file upload', async ({ page }) => {
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('li:nth-child(16) a:nth-child(1) span:nth-child(2)').click();
    await page.locator('#file-upload').setInputFiles('D:\\PlayWright_Learning\\test_data\\test1.pdf');
});

test('dropdown', async ({ page }) => {
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('li:nth-child(16) a:nth-child(1) span:nth-child(2)').click();
    await page.locator('#standard-select').selectOption('green');
    await page.locator('#multi-select').selectOption("java","python");
});


test('hover', async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('li:nth-child(16) a:nth-child(1) span:nth-child(2)').click();
    await page.locator('#hover-menu-trigger').hover();
    await expect(page.getByTestId('hover-submenu')).toBeVisible();
    await page.getByTestId('submenu-item-2').click();
});

test('drag and drop', async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('li:nth-child(16) a:nth-child(1) span:nth-child(2)').click();
    const source = await page.locator('#drag-source');
    const destination = await page.locator('#drop-zone');
    const picture = await page.locator('#section-13');
    await source.dragTo(destination)
    await picture.screenshot({ path: 'D:\\PlayWright_Learning\\test_data\\drag_and_drop.png' });
    await expect(page.getByTestId('drop-result')).toContainText("Item dropped successfully");
});

test('button click actions', async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('a[href="#section-2"]').click();
    const section2 = await page.locator('#section-2');
    await page.locator('#right-click-btn').click({button: 'right'});
    await expect(section2.getByTestId('right-click-result')).toContainText("Right click captured (context menu blocked)");
    });

test('keyboard actions', async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('a[href="#section-26"]').click();
    await page.locator('#keyboard-input').press('Enter');
    //await page.keyboard.press('Enter');
    await expect(page.getByTestId('keyboard-result')).toContainText("Last key: Enter");
});




    test('iframe handling', async({page})=>{
        await page.goto('https://www.sreenidhirajakrishnan.com/practice');
        await page.locator('a[href="#section-11"]').click();
        const frame1 = await page.frameLocator('[data-testid="practice-iframe"]');
        await frame1.locator('#iframe-input').fill('iframe test');
        await page.screenshot({ path: 'D:\\PlayWright_Learning\\test_data\\iframe.png' });
        await frame1.locator('#iframe-btn').click();  
        await expect.soft(frame1.locator('#iframe-result')).toContainText("Iframe button clicked: iframe testssss");
    });


    test('Alert handling soft', async({page})=>{
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('a[href="#section-9"]').click();
    await page.locator('#alert-btn').click();
    await page.screenshot({ path: 'D:\\PlayWright_Learning\\test_data\\alert.png' });
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
        await expect(page.getByTestId('alert-result')).toContainText("Alert was shown and dismissed");
      })
      const alert_result = await page.getByTestId('alert-result').textContent();
      console.log(alert_result);
      await page.screenshot({ path: 'D:\\PlayWright_Learning\\test_data\\alert1.png' });
    }
    );

test('File Downloading @smoke', async ({ page }) => {
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('a[href="#section-17"]').click();
    const download = page.waitForEvent('download');
    await page.locator('#download-btn').click();
    const downloadFile = await download;
    const path = await downloadFile.path();
    console.log('Downloaded file:', path);
    await downloadFile.saveAs(
        'D:\\PlayWright_Learning\\test_data\\downloaded_file.txt'
    );
});
