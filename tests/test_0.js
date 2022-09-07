'use strict';

const puppeteer = require('puppeteer');

(async () => {

        // const browser = await puppeteer.launch({headless: false,   ignoreDefaultArgs: ['--disable-extensions'],})
        // const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
        // const browser = await puppeteer.launch({ headless: false }); // default is true
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        await page.goto('http://example.com/')
        await page.screenshot({path: 'Screenshots/example.png', fullPage: true});
        await page.waitForSelector('h1')
        await browser.close()

})();