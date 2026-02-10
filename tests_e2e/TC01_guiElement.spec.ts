import { test } from '@playwright/test';
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
    
    await guiElement.navigateToGuiElementPage(data.name, data.email, data.phone, data.address, pref.Country, pref.Colour, pref.Animal);
    await guiElement.verifyNavigateToGuiElementPage(data.name, data.email, data.phone, data.address, pref.Country, pref.Colour, pref.Animal);
    await guiElement.selectDate1();
    await guiElement.verifySelectDate1();
    await guiElement.selectDate2(date.year, date.month, date.day);
    await guiElement.verifySelectDate2();
    await guiElement.selectDate3();
    await guiElement.verifySelectDate3();
    await guiElement.submitButton();
    await guiElement.verifySubmitButton();

    console.log('TC01: Test Passed Successfully!!!');
    
    //await page.pause()
});