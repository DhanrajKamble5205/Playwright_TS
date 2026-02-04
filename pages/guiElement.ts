import { Locator, Page } from '@playwright/test';
import { DateFormat } from '../utils/dateFormat';
import { CurrentDate, NextDate } from '../utils/dateEnter';
import { getDate } from '../utils/dateEnter';

export class GuiElementPage {

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
    readonly SelectDate2: Locator
    readonly SelectDate3: Locator;
    readonly SubmitBut: Locator;


    constructor(private page: Page) {
        this.EnterName = this.page.getByPlaceholder('Enter Name');
        this.EnterEmail = this.page.getByPlaceholder('Enter EMail');
        this.EnterPhone = this.page.getByPlaceholder('Enter Phone');
        this.EnterAddress = this.page.getByRole('textbox', { name: 'Address' });
        this.SelectGender = this.page.getByLabel('Male').first();
        this.SelectDay = this.page.getByRole('checkbox', { name: 'Monday' });
        this.CountrySelect = this.page.locator('select#country');
        this.ColourSelect = this.page.locator('select#colors');
        this.AnimalSelect = this.page.locator('select#animals');
        this.SelectDate1 = this.page.locator('#datepicker');
        this.SelectDate2 = this.page.locator('#txtDate');
        this.SelectDate3 = this.page.locator('.date-picker-box');
        this.SubmitBut = this.page.getByRole('button', { name: 'Submit' }).first();
    }


    async navigateToGuiElementPage (name: string, email: string, phone: string, address: string, Country: string, Colour: string , Animal: string) {        
        await this.EnterName.fill(name);
        await this.EnterEmail.fill(email);
        await this.EnterPhone.fill(phone);
        await this.EnterAddress.fill(address);    
        await this.SelectGender.click();
        await this.SelectDay.check();
        await this.CountrySelect.selectOption(Country);
        await this.ColourSelect.selectOption(Colour);
        await this.AnimalSelect.selectOption(Animal); 
        console.log('TC01: Input Entered Successfully!!!');
    }

    async selectDate1() {
        const dateFormat = new DateFormat();
        await this.SelectDate1.click();
        await dateFormat.selectDate(this.page);
        console.log('TC01: Date1 Entered Successfully!!!');
    }

    async selectDate2(year: string, month: string, day: string) {
        await this.SelectDate2.click();
        await this.page.locator('.ui-datepicker-year').selectOption(year);
        await this.page.locator('.ui-datepicker-month').selectOption(month);
        await this.page.getByRole('link', { name: day }).click();
        console.log('TC01: Date2 Entered Successfully!!!');
    }

    async selectDate3() {
        await this.page.getByPlaceholder('Start Date').fill(getDate(0));
        await this.page.getByPlaceholder('End Date').fill(getDate(30));
        console.log('TC01: Date3 Entered Successfully!!!');
    }

    async submitButton() {
        await this.SubmitBut.click();
    }
}

