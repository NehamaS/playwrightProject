import { test, expect } from '@playwright/test';
import { EnvUrl, Environments } from '../enum';
import { interactionsWithSimpleElementsNamesNavigation } from '../helper/navigations'
import { extractTableData } from '../helper/interactionsWithSimpleElements'
import { ENVIRONMENTS_INPUTS } from '../constants'

import * as dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.ENV as Environments

test.describe('Main Page --> Interactions with simple elements', () => {
    const baseUrl = EnvUrl[ENV];
    test.beforeEach(async ({ page: websitePage }) => {
        await websitePage.goto(baseUrl);
        await interactionsWithSimpleElementsNamesNavigation({ websitePage })
    });
    test
        ('@dev Verify correctness of table data', async ({ page: websitePage }) => {
            const tableData = await extractTableData({ websitePage })

            const sortedCurrentData = tableData.map(obj => JSON.stringify(obj)).sort();
            const sortedExpectedData = ENVIRONMENTS_INPUTS[ENV].tableData.map(obj => JSON.stringify(obj)).sort();
      
            expect(sortedCurrentData.every((str, index) => str === sortedExpectedData[index])).toBe(true);
         });
   
})