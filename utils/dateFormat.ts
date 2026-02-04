export { Page } from '@playwright/test';

export class DateFormat {
    async selectDate(page: any) {
        const targetYear = 2026;
        const targetMonthName = 'May';
        const day = '20';

        // ✅ Convert month name to number (0–11)
        const months: Record<string, number> = {
            January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7,
            September: 8, October: 9, November: 10, December: 11
        };

        const targetMonth = months[targetMonthName];

        while (true) {
            const currentYear = Number(
                await page.locator('.ui-datepicker-year').textContent()
            );
            const currentMonthName =
                await page.locator('.ui-datepicker-month').textContent();
            const currentMonth = months[currentMonthName!];

            // ✅ Stop condition
            if (currentYear === targetYear && currentMonth === targetMonth) {
                break;
            }

            // ✅ Single direction decision (no conflict)
            if (
                currentYear < targetYear ||
                (currentYear === targetYear && currentMonth < targetMonth)
            ) {
                await page.locator('[title="Next"]').click();
            } else {
                await page.locator('[title="Prev"]').click();
            }
        }
        await page.getByRole('link', { name: day }).click();
    } 
}
