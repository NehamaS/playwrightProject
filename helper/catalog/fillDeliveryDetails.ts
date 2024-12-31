import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { DeliveryDetails } from '../../setup/types'
interface FillDeliveryDetailsType {
    dropitShopSite: Page
    deliveryDetails: DeliveryDetails
    saveThisInformationForNextTime: boolean
}   

export const fillDeliveryDetails = async ({ dropitShopSite, deliveryDetails, saveThisInformationForNextTime }: FillDeliveryDetailsType) => {
    await dropitShopSite.getByPlaceholder("First name (optional)").fill(deliveryDetails.firstName)
    await dropitShopSite.getByPlaceholder("Last name").fill(deliveryDetails.lastName)
    await dropitShopSite.getByPlaceholder("Address").fill(deliveryDetails.address)
    await dropitShopSite.getByPlaceholder("Apartment, suite, etc. (optional)").fill(deliveryDetails.apartment)
    await dropitShopSite.getByPlaceholder("Postal code (optional)").fill(deliveryDetails.postalCode)
    await dropitShopSite.getByPlaceholder("City").fill(deliveryDetails.city)
    if (saveThisInformationForNextTime)
        await dropitShopSite.locator('input[name="save_shipping_information"]').check()
};