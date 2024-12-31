import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { addProductToCart, fillContactDetails, fillDeliveryDetails, fillPaymentDetails } from '../../helper/'
import { TestEnviroment } from '../../setup/types'
import { WRONG_EMAIL_ERROR_MSG, WRONG_CARD_NUMBER_ERROR_MSG } from '../../setup/constants'
interface DropitShopSiteType {
    dropitShopSite: Page
    enviromentInput: TestEnviroment
}

export const verifiesUserCantPlaceTheOrderWhenEmailOrCardNumberAreWrong = async ({ dropitShopSite, enviromentInput  }: DropitShopSiteType) => {
    const products = enviromentInput.productsN
    for (const product of products) {
          await addProductToCart({ dropitShopSite, product })
     }

    await dropitShopSite.getByRole('link', { name: /Cart \d+ items/ }).click();
    await dropitShopSite.getByRole('button', { name: 'Check out' }).click()

    await fillContactDetails({ dropitShopSite, emailOrMobulePhoneNumber: enviromentInput.contact })
    await fillDeliveryDetails({ dropitShopSite, deliveryDetails: enviromentInput.delivery, saveThisInformationForNextTime: true })
    await fillPaymentDetails({ dropitShopSite, paymentDetails: enviromentInput.payment })

    await dropitShopSite.getByPlaceholder('Email or mobile phone number').fill("wrong email")
    await dropitShopSite.getByText('Pay now').click()
    await expect(dropitShopSite.getByText(WRONG_EMAIL_ERROR_MSG)).toBeVisible() 
    await dropitShopSite.getByPlaceholder('Email or mobile phone number').fill(enviromentInput.contact)

    await dropitShopSite.locator('iframe[title="Field container for: Card number"]').contentFrame()
        .locator('input[name="number"]').fill('11111')
    await dropitShopSite.getByText('Pay now').click()

    await expect(dropitShopSite.getByText(WRONG_CARD_NUMBER_ERROR_MSG)).toBeVisible() 

    const errorTestColor = await dropitShopSite.getByText(WRONG_CARD_NUMBER_ERROR_MSG).evaluate(el => window.getComputedStyle(el).color);
    await expect(errorTestColor).toBe('rgb(221, 29, 29)');

    await expect(dropitShopSite.getByText(/^Confirmation #\w+$/)).not.toBeVisible()
};