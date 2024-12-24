import { nanoid } from 'nanoid';
import { Page } from 'playwright';

interface webPage {
    websitePage: Page
}

export const fillRandomName = async ({ websitePage }: webPage) => {
    await websitePage.locator('input[name="firstname"]').fill(nanoid(10));
};

export const fillRandomLastName = async ({ websitePage }: webPage) => {
    await websitePage.locator('input[name="lastname"]').fill(nanoid(10));
};

export const fillMaleGender = async ({ websitePage }: webPage) => {
    const genderRadioButton = await websitePage.locator('input[name="gender"][value="male"]');
    await genderRadioButton.isChecked() || await genderRadioButton.check({ force: true });
};