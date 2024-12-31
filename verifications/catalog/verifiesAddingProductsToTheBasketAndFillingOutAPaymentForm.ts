import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { addProductToCart, fillContactDetails, fillDeliveryDetails, fillPaymentDetails } from '../../helper/'
import { TestEnviroment } from '../../setup/types'
interface DropitShopSiteType {
    dropitShopSite: Page
    enviromentInput: TestEnviroment
}

export const verifiesAddingProductsToTheBasketAndFillingOutAPaymentForm = async ({ dropitShopSite, enviromentInput }: DropitShopSiteType) => {
    const products = enviromentInput.productsP
    for (const product of products) {
          await addProductToCart({ dropitShopSite, product })
    }
    await dropitShopSite.getByRole('link', { name: /Cart \d+ items/ }).click();
    await dropitShopSite.getByRole('button', { name: 'Check out' }).click()
    await expect(dropitShopSite.getByLabel('Cost summary').getByText(enviromentInput.totalAmountForPay)).toBeVisible() 

    await fillContactDetails({ dropitShopSite, emailOrMobulePhoneNumber: enviromentInput.contact })
    await fillDeliveryDetails({ dropitShopSite, deliveryDetails: enviromentInput.delivery, saveThisInformationForNextTime: true })
    await fillPaymentDetails({ dropitShopSite, paymentDetails: enviromentInput.payment })

    await dropitShopSite.getByText('Pay now').click()
    await expect(dropitShopSite.getByText(/^Confirmation #\w+$/)).toBeVisible() 
};