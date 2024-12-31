import { Page } from 'playwright';
interface LoginType {
        dropitShopSite: Page
        password: string | undefined
    }

export const login = async ({ dropitShopSite, password }: LoginType) => {
    dropitShopSite.locator('#password').fill(password || "")
    dropitShopSite.getByRole("button", {name: "Enter"}).click()
 };