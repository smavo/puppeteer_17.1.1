'use strict';

// Require puppeteer
const puppeteer = require('puppeteer');

(async () => {
    // Create an instance of the chrome browser
    // But disable headless mode !
    const browser = await puppeteer.launch({
        headless: false
    });

    // Create a new page
    const page = await browser.newPage();

    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(0);

    // Navigate to some website e.g Our Code World
    await page.goto('https://smavodev.com/');
    await page.screenshot({path: 'Screenshots/smavodev.png', fullPage: true});

    await browser.close();
    // ...
})();