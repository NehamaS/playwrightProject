import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { PaymentDetails } from '../../setup/types'

interface FillPaymentDetailsType {
    dropitShopSite: Page
    paymentDetails: PaymentDetails
}
    

export const fillPaymentDetails = async ({ dropitShopSite, paymentDetails }: FillPaymentDetailsType) => {
    await dropitShopSite.locator('iframe[title="Field container for: Card number"]').contentFrame()
        .locator('input[placeholder="Card number"]').fill(paymentDetails.cardNumber)

    await dropitShopSite.locator('iframe[title="Field container for: Expiration date (MM / YY)"]').contentFrame()
        .locator('input[placeholder="Expiration date (MM / YY)"]').fill(paymentDetails.expirationDay)

    await dropitShopSite.locator('iframe[title="Field container for: Security code"]').contentFrame()
        .locator('input[placeholder="Security code"]').fill(paymentDetails.securityCode)
};