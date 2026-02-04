import {test, expect} from '@playwright/test';
import { GuiElementPage } from '../pages/guiElement';
import { BASE_URL, guiElementPath } from '../config/playwright.qa.config';
import userInfo from '../test-data/userInfo.json';

 test.beforeEach('Navigate to GUI Element Page', async ({page}) => {
    await page.goto(`${BASE_URL}${guiElementPath}`);
    
 });

test('Gui Element Test', async ({page}) => {
    const guiElement = new GuiElementPage(page);
    const data = userInfo.Form; 
    const pref = userInfo.Preferences
    const date = userInfo.DateSelection;
    
    // await guiElement.navigateToGuiElementPage(data.name, data.email, data.phone, data.address, pref.Country, pref.Colour, pref.Animal);
    // await guiElement.selectDate1();
    // await guiElement.selectDate2(date.year, date.month, date.day);
    // await guiElement.selectDate3();
    await guiElement.submitButton();

    console.log('TC01: Test Passed Successfully!!!');
    
    //await page.pause()
    // Add assertions as needed

});