import { Locator, Page } from '@playwright/test';

export class GuiElementLocators {
  readonly EnterName: Locator;
  readonly EnterEmail: Locator;
  readonly EnterPhone: Locator;
  readonly EnterAddress: Locator;
  readonly SelectGender: Locator;
  readonly SelectDay: Locator;
  readonly CountrySelect: Locator;
  readonly ColourSelect: Locator;
  readonly AnimalSelect: Locator;
  readonly SelectDate1: Locator;
  readonly SelectDate2: Locator;
  readonly SelectDate3: Locator;
  readonly SubmitBut: Locator;

  constructor(page: Page) {
    this.EnterName = page.getByPlaceholder('Enter Name');
    this.EnterEmail = page.getByPlaceholder('Enter EMail');
    this.EnterPhone = page.getByPlaceholder('Enter Phone');
    this.EnterAddress = page.getByRole('textbox', { name: 'Address' });
    this.SelectGender = page.getByLabel('Male').first();
    this.SelectDay = page.getByRole('checkbox', { name: 'Monday' });
    this.CountrySelect = page.locator('select#country');
    this.ColourSelect = page.locator('select#colors');
    this.AnimalSelect = page.locator('select#animals');
    this.SelectDate1 = page.locator('#datepicker');
    this.SelectDate2 = page.locator('#txtDate');
    this.SelectDate3 = page.locator('.date-picker-box');
    this.SubmitBut = page.getByRole('button', { name: 'Submit' }).first();
  }
}
