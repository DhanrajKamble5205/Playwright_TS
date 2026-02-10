import {test, expect} from '@playwright/test';
import { GuiElementPage } from '../pages/guiElement';
import userInfo from '../test-data/userInfo.json';

 test.beforeEach('Navigate to GUI Element Page', async ({page}) => {
    const guiElement = new GuiElementPage(page);
    await guiElement.goto();
    await guiElement.verifyGoto();
 });

test('Gui Element Test', async ({page}) => {
    const guiElement = new GuiElementPage(page);
    const data = userInfo.Form; 
    const pref = userInfo.Preferences
    const date = userInfo.DateSelection;
    
    // Navigate and verify
    await guiElement.navigateToGuiElementPage(data.name, data.email, data.phone, data.address, pref.Country, pref.Colour, pref.Animal);
    await guiElement.verifyNavigateToGuiElementPage(data.name, data.email, data.phone, data.address, pref.Country, pref.Colour, pref.Animal);
    
    // Select Date 1 and verify
    await guiElement.selectDate1();
    await guiElement.verifySelectDate1();
    
    // Select Date 2 and verify
    await guiElement.selectDate2(date.year, date.month, date.day);
    await guiElement.verifySelectDate2();
    
    // Select Date 3 and verify
    await guiElement.selectDate3();
    await guiElement.verifySelectDate3();
    
    // Submit and verify
    await guiElement.submitButton();
    await guiElement.verifySubmitButton();

    console.log('TC01: Test Passed Successfully!!!');
    
    //await page.pause()
});