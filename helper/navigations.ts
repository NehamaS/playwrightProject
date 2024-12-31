import { Page } from 'playwright';
import { expect } from '@playwright/test'
interface pageNavigation {
    dropitShopSite: Page
    pageUrl: string
}

export const catalogNavigation = async ({ dropitShopSite, pageUrl }: pageNavigation) => {
    await dropitShopSite.getByRole('link', { name: 'Catalog', exact: true }).click()
    await expect(dropitShopSite).toHaveURL(pageUrl);
};

export const contactNavigation = async ({ dropitShopSite, pageUrl }: pageNavigation) => {
    await dropitShopSite.getByRole('link', { name: 'Contatc', exact: true }).click()
    await expect(dropitShopSite).toHaveURL(pageUrl);
};

