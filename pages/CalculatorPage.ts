import {Page,Locator, expect} from "@playwright/test";
import { BasePage } from "./BasePage";

export class CalculatorPage extends BasePage{
    readonly page:Page;
    readonly calculatorButtonMain:Locator;
    readonly calculatorBuiltupArea:Locator;
    readonly calculatorCeilingHeight:Locator;
    readonly calculatorProjectCity:Locator;
    readonly calculatorNextButton_1step:Locator;
    readonly calculatorSelectQuality_premium:Locator;
    readonly calculatorMaterial_Execution_Scope:Locator;
    readonly calculatorScope_of_Work:Locator;
    readonly calculatorWardrobes:Locator;
    readonly calculatorTv_unit:Locator;
    readonly calculatorFalse_pooja_Unit:Locator;
    readonly calculator_Next_step_2nd_step:Locator;
    readonly calculator_full_name:Locator;
    readonly calculator_Phone_WhatsApp_Number:Locator;
    readonly calculator_reveal_complete_cost_breakdown:Locator;
    readonly calculator_download_printable_quote:Locator;


     constructor(page:Page){
        super(page);
        this.page = page;
        this.calculatorButtonMain =page.locator('span').filter({ hasText: 'Calculate Now' }).first()
        this.calculatorBuiltupArea  = page.getByPlaceholder('e.g. 1200')
        this.calculatorCeilingHeight = page.locator("//input[@value='10']")
        this.calculatorProjectCity = page.getByRole('button', { name: /Delhi/i })
        this.calculatorNextButton_1step = page.getByRole('button', { name: 'Next Step' })
        this.calculatorSelectQuality_premium =page.locator(':text-is("Premium")')
        this.calculatorMaterial_Execution_Scope = page.getByText('Turnkey (Material + Labour)')
        this.calculatorScope_of_Work =page.getByText('Turnkey (Material + Labour)')
        this.calculatorWardrobes =page.getByText('Wardrobes', { exact: true })
        this.calculatorTv_unit = page.getByText('TV Unit')
        this.calculatorFalse_pooja_Unit =page.getByText('Pooja Unit')
        this.calculator_Next_step_2nd_step = page.getByRole('button', { name: 'Next Step' })
        this.calculator_full_name = page.getByRole('textbox', { name: 'e.g. Ramesh Sharma' })
        this.calculator_Phone_WhatsApp_Number = page.getByRole('textbox', { name: '+91 9876543210' })
        this.calculator_reveal_complete_cost_breakdown = page.getByText('Reveal Complete Cost Breakdown & Quotation')
        this.calculator_download_printable_quote =page.getByRole('button', { name: 'Download Printable Quote' })
    }
    async open() {
        await this.page.goto('/calculators');
    }
    async fillCalculatorForm(builtupArea: number, ceilingHeight: string, fullName: string, phoneNumber: string) {
        await this.calculatorButtonMain.click();
        await this.calculatorBuiltupArea.fill(builtupArea.toString());
        await this.calculatorCeilingHeight.fill(ceilingHeight);
        await this.calculatorProjectCity.click();
        await this.calculatorNextButton_1step.click();
        await this.calculatorSelectQuality_premium.click();
        await this.calculatorMaterial_Execution_Scope.click();
        await this.calculatorScope_of_Work.click();
        await this.calculatorWardrobes.click();
        await this.calculatorTv_unit.click();
        await this.calculatorFalse_pooja_Unit.click();
        await this.calculator_Next_step_2nd_step.click();
        await this.calculator_full_name.fill(fullName);
        await this.calculator_Phone_WhatsApp_Number.fill(phoneNumber);
        await this.calculator_reveal_complete_cost_breakdown.click();
    }
}