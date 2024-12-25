import { test, expect } from '@playwright/test';
import { EnvUrl, Environments } from '../setup/enum';
import { loginAutomationNavigation } from '../helper/navigations'
import { fillEmailAndPassword } from '../helper/loginAutomation'
import { ENVIRONMENTS_INPUTS } from '../setup/constants'
import { getPassword } from '../helper/utils'


import * as dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.ENV as Environments


test.describe('Main Page --> Login automation', () => {
    const baseUrl = EnvUrl[ENV];
    test.beforeEach(async ({ page }) => {
        await page.goto(baseUrl);
        await loginAutomationNavigation({ websitePage: page });
    });
    
    test('@dev @staging @main verify login with correct password', async ({ page: websitePage }) => {
        await fillEmailAndPassword({ websitePage, email: ENVIRONMENTS_INPUTS[ENV].emailAndPassword.email, password: getPassword(ENV) })
        await websitePage.getByRole("button", { name: "Sign in" }).click()
        expect(websitePage.getByAltText("you are in")).toBeVisible()
    });

    test('@dev verify login with incorrect password', async ({ page: websitePage }) => {
        await fillEmailAndPassword({ websitePage, email: ENVIRONMENTS_INPUTS[ENV].emailAndPassword.email, password: ENVIRONMENTS_INPUTS[ENV].emailAndPassword.wrongPassword })
        await websitePage.getByRole("button", { name: "Sign in" }).click()
        expect(websitePage.getByAltText("Invalid email or password")).toBeVisible()
    });
});
