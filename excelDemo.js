const path = require('path');
const Exceljs = require('exceljs');
const { test, expect } = require('@playwright/test');

async function writeExcelTest(searchText, replaceText, changes, filePath) {
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet('Sheet1');
    const output = readExcel(worksheet, searchText);

    if (output.row === -1 || output.column === -1) {
        throw new Error(`Text "${searchText}" not found in the excel sheet`);
    }

    const cell = worksheet.getCell(
        output.row + (changes.rowchange ?? 0),
        output.column + (changes.columnchange ?? 0)
    );
    cell.value = replaceText;

    await workbook.xlsx.writeFile(filePath);
}

function readExcel(worksheet, searchText) {
    const output = { row: -1, column: -1 };

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, columnNumber) => {
            if (`${cell.value}`.trim() === `${searchText}`.trim()) {
                output.row = rowNumber;
                output.column = columnNumber;
            }
        });
    });

    return output;
}

test('upload download and excel validations', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;

    const filePath = path.join(process.cwd(), await download.suggestedFilename());
    await download.saveAs(filePath);

    await writeExcelTest('Mango', '999', { rowchange: 0, columnchange: 2 }, filePath);
    await page.locator('#fileinput').setInputFiles(filePath);

    await expect(page.getByText('999')).toBeVisible();
});
