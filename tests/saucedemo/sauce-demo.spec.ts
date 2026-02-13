import { expect, test } from '@playwright/test';
import {
	SAUCEDEMO_PASSWORD,
	SAUCEDEMO_URLS,
	SAUCEDEMO_USERS,
} from '../common/constants';

test.describe('Sauce Demo Store', () => {
	test('login works with standard user', async ({ page }) => {
		await page.goto(SAUCEDEMO_URLS.BASE);

		await page.fill('#user-name', SAUCEDEMO_USERS.STANDARD);

		await page.fill('#password', SAUCEDEMO_PASSWORD);

		await page.click('#login-button');

		await expect(page).toHaveURL(/.*inventory.html/);
		await expect(page.locator('.title')).toHaveText('Products');
	});
});
