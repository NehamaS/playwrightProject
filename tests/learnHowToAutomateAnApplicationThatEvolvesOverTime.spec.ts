import { test } from '@playwright/test';
import { EnvUrl, Environments } from '../enum';
import { learnHowToAutomateAnApplicationThatEvolvesOverTimeNavigation } from '../helper/navigations'
import { fillMaleGender,fillRandomLastName,fillRandomName } from '../helper/learnHowToAutomateAnApplicationThatEvolvesOverTime'

import * as dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.ENV as Environments

test.describe('Main Page --> Learn how to automate an application that evolves over time', () => {
    const baseUrl = EnvUrl[ENV];
    test.beforeEach(async ({ page: websitePage }) => {
        await websitePage.goto(baseUrl);
        await learnHowToAutomateAnApplicationThatEvolvesOverTimeNavigation({ websitePage })
    });
    test('@dev verify fill sprint1c form', async ({ page: websitePage }) => {
        await fillRandomName({ websitePage })
        await websitePage.getByRole("button", { name: "submit" }).click()
    });
    test('@dev verify fill sprint1 and sprint3 forms', async ({ page: websitePage }) => {
        await fillRandomName({ websitePage})
        await websitePage.getByRole("link", { name: "Go to the next sprint" }).click()

        await websitePage.getByRole("link", { name: "Go to sprint 3" }).click()

        await fillRandomName({ websitePage})
        await fillRandomLastName({ websitePage})
        await fillMaleGender({ websitePage})
        await websitePage.getByRole("button", { name: "submit" }).click()
    });
})