import { Page } from 'playwright';
    interface FillEmailAndPassword {
        dropitShopSite: Page
        password: string | undefined
    }

export const login = async ({ dropitShopSite, password }: FillEmailAndPassword) => {
    dropitShopSite.locator('#password').fill(password || "")
    dropitShopSite.getByRole("button", {name: "Enter"}).click()
 };