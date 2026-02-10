import { Page } from '@playwright/test';
import { BASE_URL, guiElementPath } from '../config/playwright.qa.config';
import { DateFormat } from '../utils/dateFormat';
import { getDate } from '../utils/dateEnter';
import { GuiElementLocators } from './locators/guiElementLocators';
import {
    assertIsVisible,
    assertIsEnabled,
    assertIsEditable,
    assertInputValue,
    assertPageUrlContains,
    assertIsChecked
} from '../assertions/assertion';


export class GuiElementPage {

    readonly locators: GuiElementLocators;

    constructor(private page: Page) {
        this.locators = new GuiElementLocators(this.page);
    }

    // URL of the GUI Element Page
    async goto() {
        await this.page.goto(`${BASE_URL}${guiElementPath}`);
    }

    async navigateToGuiElementPage(name: string, email: string, phone: string, address: string, Country: string, Colour: string, Animal: string) {
        await this.locators.EnterName.fill(name);
        await this.locators.EnterEmail.fill(email);
        await this.locators.EnterPhone.fill(phone);
        await this.locators.EnterAddress.fill(address);
        await this.locators.SelectGender.click();
        await this.locators.SelectDay.check();
        await this.locators.CountrySelect.selectOption(Country);
        await this.locators.ColourSelect.selectOption(Colour);
        await this.locators.AnimalSelect.selectOption(Animal);
        console.log('TC01: Input Entered Successfully!!!');
    }

    async selectDate1() {
        const dateFormat = new DateFormat();
        await this.locators.SelectDate1.click();
        await dateFormat.selectDate(this.page);
        console.log('TC01: Date1 Entered Successfully!!!');
    }

    async selectDate2(year: string, month: string, day: string) {
        await this.locators.SelectDate2.click();
        await this.page.locator('.ui-datepicker-year').selectOption(year);
        await this.page.locator('.ui-datepicker-month').selectOption(month);
        await this.page.getByRole('link', { name: day }).click();
        console.log('TC01: Date2 Entered Successfully!!!!');
    }

    async selectDate3() {
        await this.page.getByPlaceholder('Start Date').fill(getDate(0));
        await this.page.getByPlaceholder('End Date').fill(getDate(30));
        console.log('TC01: Date3 Entered Successfully!!!');
    }

    async submitButton() {
        await this.locators.SubmitBut.click();
    }

    // VERIFY METHODS FOR EACH ACTION

    // Verify goto action
    async verifyGoto(): Promise<void> {
        await assertPageUrlContains(this.page, guiElementPath);
    }

    // Verify navigateToGuiElementPage action
    async verifyNavigateToGuiElementPage(name: string, email: string, phone: string, address: string, Country: string, Colour: string, Animal: string): Promise<void> {
        // Verify all form fields are visible and editable
        await assertIsVisible(this.locators.EnterName);
        await assertIsEditable(this.locators.EnterName);
        await assertInputValue(this.locators.EnterName, name);

        await assertIsVisible(this.locators.EnterEmail);
        await assertIsEditable(this.locators.EnterEmail);
        await assertInputValue(this.locators.EnterEmail, email);

        await assertIsVisible(this.locators.EnterPhone);
        await assertIsEditable(this.locators.EnterPhone);
        await assertInputValue(this.locators.EnterPhone, phone);

        await assertIsVisible(this.locators.EnterAddress);
        await assertIsEditable(this.locators.EnterAddress);
        await assertInputValue(this.locators.EnterAddress, address);

        // Verify selection fields
        await assertIsVisible(this.locators.SelectGender);
        await assertIsEnabled(this.locators.SelectGender);

        await assertIsVisible(this.locators.SelectDay);
        await assertIsEnabled(this.locators.SelectDay);
        await assertIsChecked(this.locators.SelectDay);

        await assertIsVisible(this.locators.CountrySelect);
        await assertIsEnabled(this.locators.CountrySelect);

        await assertIsVisible(this.locators.ColourSelect);
        await assertIsEnabled(this.locators.ColourSelect);

        await assertIsVisible(this.locators.AnimalSelect);
        await assertIsEnabled(this.locators.AnimalSelect);
    }

    // Verify selectDate1 action
    async verifySelectDate1(): Promise<void> {
        await assertIsVisible(this.locators.SelectDate1);
        await assertIsEnabled(this.locators.SelectDate1);
    }

    // Verify selectDate2 action
    async verifySelectDate2(): Promise<void> {
        await assertIsVisible(this.locators.SelectDate2);
        await assertIsEnabled(this.locators.SelectDate2);
    }

    // Verify selectDate3 action
    async verifySelectDate3(): Promise<void> {
        const startDateLocator = this.page.getByPlaceholder('Start Date');
        const endDateLocator = this.page.getByPlaceholder('End Date');

        await assertIsVisible(startDateLocator);
        await assertIsEditable(startDateLocator);

        await assertIsVisible(endDateLocator);
        await assertIsEditable(endDateLocator);
    }

    // Verify submitButton action
    async verifySubmitButton(): Promise<void> {
        await assertIsVisible(this.locators.SubmitBut);
        await assertIsEnabled(this.locators.SubmitBut);
    }
}

