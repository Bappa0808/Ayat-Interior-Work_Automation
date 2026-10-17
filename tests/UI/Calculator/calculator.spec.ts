import {test,expect} from "@playwright/test";
import {CalculatorPage} from  '../../../pages/CalculatorPage';

test.describe('Calculator page',()=>{
        test('verify the calculator page loads successfully',async({page})=>{
            const calculatorPage = new CalculatorPage(page);
            await calculatorPage.open();
            await calculatorPage.fillCalculatorForm(1000, "10", "Test User", "+91 9876543210");
            await expect(calculatorPage.calculator_download_printable_quote).toBeVisible();
        });
    })