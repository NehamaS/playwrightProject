import { expect } from '@playwright/test';
import { Page } from 'playwright';

interface webPage {
    websitePage: Page
}

export const learnHowToAutomateAnApplicationThatEvolvesOverTimeNavigation = async ({ websitePage }:webPage) => {
    await websitePage.getByRole('link', { name: 'Learn how to automate an application that evolves over time', exact: true }).click()
};

export const loginAutomationNavigation = async ({ websitePage }: webPage) => {
    await websitePage.getByRole('link', { name: 'Login automation', exact: true }).click()
};

export const interactionsWithSimpleElementsNamesNavigation = async ({ websitePage }: webPage) => {
    await websitePage.getByRole('link', { name: 'Interactions with simple elements', exact: true }).click()
};

