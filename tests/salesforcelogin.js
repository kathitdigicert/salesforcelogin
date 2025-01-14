const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Go to Salesforce login page
    await page.goto('https://login.salesforce.com/');

    // Enter username
    await page.fill('input#username', 'username');

    // Enter password
    await page.fill('input#password', 'password');

    // Click login button
    await page.click('input#Login');

    // Wait for navigation to complete
    // await page.waitForNavigation();

    // Close browser
    // await browser.close();
})();