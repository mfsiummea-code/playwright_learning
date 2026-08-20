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


test('Multiple Windows', async ({ page }) => {
    await page.goto('https://www.sreenidhirajakrishnan.com/practice');
    await page.locator('a[href="#section-20"]').click();
    const [new_tab] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('#open-window-btn').click(),
    ]);
    await new_tab.waitForLoadState();
    console.log('New tab URL:', new_tab.url());
    await new_tab.close();
});


test('web tables - read and verify data', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  const firstRow = rows.first();
  const firstName = await firstRow.locator('td').nth(0).textContent();
  const lastName = await firstRow.locator('td').nth(1).textContent();
  console.log('First row: ' + firstName + ' ' + lastName);
});


test('web tables - dynamic', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  const rows = page.locator('table tbody tr');
  const countBefore = await rows.count();
  console.log('Rows before adding: ' + countBefore);
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('#firstName').fill('Umme');
  await page.locator('#lastName').fill('Abiha');
  await page.locator('#userEmail').fill('umme@abc.com');
  await page.locator('#age').fill('28');
  await page.locator('#salary').fill('50000');
  await page.locator('#department').fill('QA');
  await page.getByRole('button', { name: 'Submit' }).click();
  const countAfter = await rows.count();
  console.log('Rows after adding: ' + countAfter);
  expect(countAfter).toBe(countBefore + 1);
  const newRow = rows.filter({ hasText: 'umme@abc.com' });
  await expect(newRow).toBeVisible();
  await expect(newRow.locator('td').nth(0)).toHaveText('Umme');
});

//dynamic delete
test
('web tables delete', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  const delete_button = page.locator('table tbody tr', { hasText: 'Cierra' }).getByTitle('Delete');
  await delete_button.click();
  await expect(page.locator('table tbody tr', { hasText: 'Cierra' })).not.toBeVisible(); 
});



test('pagination - click page 2', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#pagination').getByRole('link', { name: '2', exact: true }).click();
  await expect(page.locator('#pagination li a.active')).toHaveText('2');
  const rows = page.locator('#productTable tbody tr');
  await expect(rows.first()).toBeVisible();
});


//multiple windows using promise
test('Multiple Windows test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const [new_tab] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByRole('link', { name: 'Click Here' }).click(),
    ]);
    await new_tab.waitForLoadState();
    console.log('New tab URL:', new_tab.url());
    await expect(new_tab).toHaveURL('https://the-internet.herokuapp.com/windows/new');
    await expect(new_tab.locator('h3')).toHaveText('New Window');
    await new_tab.close();
});

test('date picker - simple example', async ({ page }) => {
  await page.goto('https://demoqa.com/date-picker');
  await page.locator('#datePickerMonthYearInput').fill('08/25/2026');
  await page.keyboard.press('Escape');
  const value = await page.locator('#datePickerMonthYearInput').inputValue();
  console.log('Selected date: ' + value);
});

//date picker with actual selection
test('date picker - select tomorrow', async ({ page }) => {
  await page.goto('https://demoqa.com/date-picker');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const day = tomorrow.getDate();
  const month = tomorrow.toLocaleString('default', { month: 'long' });
  await page.locator('#datePickerMonthYearInput').click();
  await page.getByRole('gridcell', { name: month + ' ' + day }).click();
  const fieldValue = await page.locator('#datePickerMonthYearInput').inputValue();
  console.log('Field now shows: ' + fieldValue);
  expect(fieldValue).toContain(String(day));
});



//fully dynamic date picker 
test.only('date picker - fully dynamic', async ({ page }) => {
  await page.goto('https://demoqa.com/date-picker');
const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 2);
  const day = targetDate.getDate();
  const month = targetDate.toLocaleString('default', { month: 'long' });
  const year = targetDate.getFullYear();
  console.log('Target date: ' + month + ' ' + day + ', ' + year);
  await page.locator('#datePickerMonthYearInput').click();
  await page.locator('.react-datepicker__year-select').selectOption(String(year));
  await page.locator('.react-datepicker__month-select').selectOption(month);
  await page.getByRole('gridcell', { name: month + ' ' + day }).click();
  const fieldValue = await page.locator('#datePickerMonthYearInput').inputValue();
  console.log('Field now shows: ' + fieldValue);
  expect(fieldValue).toContain(String(day));
});