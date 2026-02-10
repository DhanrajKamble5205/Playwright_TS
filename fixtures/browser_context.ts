import  {test, chromium} from '@playwright/test';

export class browser_context {
    // Fixture: launch cromium browser
    launch_Cromium: async (use) => {
        const browser = await chromium.launch(); // browser launched
        const context = await browser.newContext(); // created browser context

        const page1 = await context.newPage(); // using browser context launched new page.
    }

    // Fixture: newPage event browser launch
    newPage: async (use){

        const pagePromise = context.waitForEvent('page'); //  waiting for new page before clicking.
        const newPage = await pagePromise; // it is used when you navigate from page1 to newPage
    }

}