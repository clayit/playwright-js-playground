// All constants for Sauce Demo tests

export const SAUCEDEMO_USERS = {
	STANDARD: 'standard_user',
	LOCKED: 'locked_out_user',
	PROBLEM: 'problem_user',
	PERFORMANCE: 'performance_glitch_user',
	ERROR: 'error_user',
	VISUAL: 'visual_user',
} as const;

export const SAUCEDEMO_PASSWORD = 'secret_sauce';

export const SAUCEDEMO_URL_BASE = 'https://www.saucedemo.com';

export const SAUCEDEMO_URLS = {
	BASE: SAUCEDEMO_URL_BASE,
	INVENTORY: `${SAUCEDEMO_URL_BASE}/inventory.html`,
	CART: `${SAUCEDEMO_URL_BASE}/cart.html`,
	CHECKOUT_STEP_ONE: `${SAUCEDEMO_URL_BASE}/checkout-step-one.html`,
	CHECKOUT_STEP_TWO: `${SAUCEDEMO_URL_BASE}/checkout-step-two.html`,
	CHECKOUT_COMPLETE: `${SAUCEDEMO_URL_BASE}/checkout-complete.html`,
} as const;

export const SAUCEDEMO_ERROR_MESSAGES = {
	LOCKED_OUT: 'Epic sadface: Sorry, this user has been locked out.',
	WRONG_PASSWORD:
		'Epic sadface: Username and password do not match any user in this service',
	REQUIRED_USERNAME: 'Epic sadface: Username is required',
	REQUIRED_PASSWORD: 'Epic sadface: Password is required',
} as const;
