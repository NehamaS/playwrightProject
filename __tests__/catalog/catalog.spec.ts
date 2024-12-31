import { test } from '@playwright/test';
import { EnvUrl, CatalogUrl, Environments } from '../../setup/enum';
import { catalogNavigation, login, getPassword } from '../../helper';
import { verifiesAddingProductsToTheBasketAndFillingOutAPaymentForm, verifiesUserCantPlaceTheOrderWhenEmailOrCardNumberAreWrong } from '../../verifications'
import { ENVIRONMENTS_INPUTS } from '../../setup/constants'

import * as dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.ENV as Environments

test.describe('Main Page --> Catalog', () => {
    const baseUrl = EnvUrl[ENV];
    const catalogUrl = CatalogUrl[ENV]
    test.beforeEach(async ({ page: dropitShopSite }) => {
        await dropitShopSite.goto(baseUrl);
        await login({ dropitShopSite, password: getPassword(ENV) })
        await catalogNavigation({ dropitShopSite, pageUrl: catalogUrl })
    });

    test
        ('@dev verifies adding products to the basket and filling out a payment form', async ({ page: dropitShopSite }) => {
            await verifiesAddingProductsToTheBasketAndFillingOutAPaymentForm({ dropitShopSite, enviromentInput:ENVIRONMENTS_INPUTS[ENV] })
        });
    test
        ('@dev verifies user cant place the order when email or card number are wrong', async ({ page: dropitShopSite }) => {
            await verifiesUserCantPlaceTheOrderWhenEmailOrCardNumberAreWrong({ dropitShopSite, enviromentInput: ENVIRONMENTS_INPUTS[ENV] })
        });
   
})