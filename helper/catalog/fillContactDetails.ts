import { Page } from 'playwright';
interface FillContactDetailsType {
    dropitShopSite: Page
    emailOrMobulePhoneNumber: string
}

export const fillContactDetails = async ({ dropitShopSite, emailOrMobulePhoneNumber }: FillContactDetailsType) => {
    await dropitShopSite.getByPlaceholder("Email or mobile phone number").fill(emailOrMobulePhoneNumber)
};