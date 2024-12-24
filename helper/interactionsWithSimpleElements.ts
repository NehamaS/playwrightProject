import { Page } from 'playwright';
interface ExtractTableData {
    websitePage: Page
}

interface TableRow {
    title: string;
    work: string;
    salary: string;
}

export const extractTableData = async ({ websitePage }: ExtractTableData): Promise<TableRow[]> =>  {
    await websitePage.waitForSelector('#htmlTableId');
    const tableData = await websitePage.$$eval('#htmlTableId tbody tr', (rows) => {
        return Array.from(rows)
            .slice(1)
            .map((row) => {
                const cells = row.querySelectorAll('td');
                return {
                    title: cells[0]?.textContent?.trim() || '',
                    work: cells[1]?.textContent?.trim() || '',
                    salary: cells[2]?.textContent?.trim() || '',
                };
            });
    });

    return tableData;
};




