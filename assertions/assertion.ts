import { Page, Locator, expect } from '@playwright/test';

// Assert that element text equals the expected value
export async function assertTextEquals(locator: Locator, expectedText: string): Promise<void> {
  await expect(locator).toHaveText(expectedText);
}

// Assert that element text contains the expected substring
export async function assertTextContains(locator: Locator, expectedText: string): Promise<void> {
  await expect(locator).toContainText(expectedText);
}

// Assert that element is visible
export async function assertIsVisible(locator: Locator): Promise<void> {
  await expect(locator).toBeVisible();
}

// Assert that element is hidden
export async function assertIsHidden(locator: Locator): Promise<void> {
  await expect(locator).toBeHidden();
}

// Assert that element is enabled
export async function assertIsEnabled(locator: Locator): Promise<void> {
  await expect(locator).toBeEnabled();
}

// Assert that element is disabled
export async function assertIsDisabled(locator: Locator): Promise<void> {
  await expect(locator).toBeDisabled();
}

// Assert that element is checked (for checkboxes/radio buttons)
export async function assertIsChecked(locator: Locator): Promise<void> {
  await expect(locator).toBeChecked();
}

// Assert that element is not checked
export async function assertIsNotChecked(locator: Locator): Promise<void> {
  await expect(locator).not.toBeChecked();
}

// Assert that element exists in the DOM
export async function assertElementExists(locator: Locator): Promise<void> {
  await expect(locator).toBeTruthy();
}

// Assert that element does not exist in the DOM
export async function assertElementNotExists(locator: Locator): Promise<void> {
  const count = await locator.count();
  expect(count).toBe(0);
}

// Assert that element count equals expected value
export async function assertElementCount(locator: Locator, expectedCount: number): Promise<void> {
  await expect(locator).toHaveCount(expectedCount);
}

// Assert that input/textarea has expected value
export async function assertInputValue(locator: Locator, expectedValue: string): Promise<void> {
  await expect(locator).toHaveValue(expectedValue);
}

// Assert that attribute has expected value
export async function assertAttribute(
  locator: Locator,
  attributeName: string,
  expectedValue: string
): Promise<void> {
  await expect(locator).toHaveAttribute(attributeName, expectedValue);
}

// Assert that class contains expected class name
export async function assertClassContains(locator: Locator, className: string): Promise<void> {
  const classAttr = await locator.getAttribute('class');
  expect(classAttr).toContain(className);
}

// Assert that page URL equals expected URL
export async function assertPageUrl(page: Page, expectedUrl: string): Promise<void> {
  await expect(page).toHaveURL(expectedUrl);
}

// Assert that page URL contains expected substring
export async function assertPageUrlContains(page: Page, urlSubstring: string): Promise<void> {
  expect(page.url()).toContain(urlSubstring);
}

// Assert that page title equals expected title
export async function assertPageTitle(page: Page, expectedTitle: string): Promise<void> {
  await expect(page).toHaveTitle(expectedTitle);
}

// Assert that element has focus
export async function assertHasFocus(locator: Locator): Promise<void> {
  await expect(locator).toBeFocused();
}

// Assert that element is editable
export async function assertIsEditable(locator: Locator): Promise<void> {
  await expect(locator).toBeEditable();
}

// Assert that element is in viewport
export async function assertIsInViewport(locator: Locator): Promise<void> {
  const isVisible = await locator.isVisible();
  expect(isVisible).toBe(true);
}

// Assert that actual value equals expected value
export function assertEqual(actual: any, expected: any, message?: string): void {
  expect(actual).toBe(expected);
}

// Assert that actual value does not equal expected value
export function assertNotEqual(actual: any, expected: any, message?: string): void {
  expect(actual).not.toBe(expected);
}

// Assert that actual value is greater than expected value
export function assertGreaterThan(actual: number, expected: number, message?: string): void {
  expect(actual).toBeGreaterThan(expected);
}

// Assert that actual value is less than expected value
export function assertLessThan(actual: number, expected: number, message?: string): void {
  expect(actual).toBeLessThan(expected);
}

// Assert that value is truthy
export function assertTrue(value: any, message?: string): void {
  expect(value).toBeTruthy();
}

// Assert that value is falsy
export function assertFalse(value: any, message?: string): void {
  expect(value).toBeFalsy();
}

// Assert that array contains expected value
export function assertArrayContains(array: any[], expectedValue: any): void {
  expect(array).toContain(expectedValue);
}

// Assert that array does not contain expected value
export function assertArrayNotContains(array: any[], expectedValue: any): void {
  expect(array).not.toContain(expectedValue);
}

// Assert that array/string length equals expected value
export function assertLength(value: any[] | string, expectedLength: number): void {
  expect(value.length).toBe(expectedLength);
}

// Assert that object contains expected property
export function assertObjectHasProperty(obj: object, propertyName: string): void {
  expect(obj).toHaveProperty(propertyName);
}

// Assert that object matches expected object structure
export function assertObjectMatches(actual: object, expected: object): void {
  expect(actual).toEqual(expect.objectContaining(expected));
}
