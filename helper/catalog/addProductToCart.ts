import { Page } from 'playwright';
import { expect } from '@playwright/test';

interface Product {
    productName: string,
    quantity: number,
    size: 'Small' | 'Medium' | 'Large' | 'So large you can\'t eat it' | 'Too much for you to handle'
}
interface AddProductToCartType {
    dropitShopSite: Page
    product: Product
}

export const addProductToCart = async ({ dropitShopSite, product }: AddProductToCartType) => {
    await dropitShopSite.getByRole("button", { name:"Search" }).click()
    await dropitShopSite.getByPlaceholder('Search').fill(product.productName.toLowerCase())
    await dropitShopSite.getByRole('search').getByRole('button', { name: 'Search' }).click()
    await expect(dropitShopSite.getByText(product.productName)).toBeVisible()
    await dropitShopSite.getByText(product.productName).click()
    await dropitShopSite.getByText(product.size).click()
    await dropitShopSite.locator('input[name="quantity"]').fill(product.quantity.toString())
    await dropitShopSite.getByRole('button', { name: 'add' }).click()
};