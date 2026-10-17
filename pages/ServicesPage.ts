import {test,Page, Locator} from "@playwright/test";
import {BasePage} from "../../AyatInteriorWrokAutomation/pages/BasePage";

export class ServicesPage extends BasePage{


     readonly page:Page;
     readonly serviceHeadingText:Locator;
     readonly searchbarServices:Locator;
     readonly bedroomInteriorHeading: Locator;
     readonly servicesImage:Locator;
     readonly addToCartButton:Locator;
     readonly addSqftInput:Locator;
     readonly AddToCartPopUp:Locator;
     readonly aaddToCartButtonAdded:Locator;
     readonly estimatedCart:Locator;
     readonly estimatedTotalPrice:Locator;
     readonly estimatedCartQuote:Locator;
     readonly estimatedCartQuoteName:Locator;
     readonly estimatedCartQuotePhone:Locator;
     readonly estimatedCartQuoteEmail:Locator;
     readonly estimatedCartQuoteCity:Locator;
     readonly estimatedCartQuoteProjectType:Locator;
     readonly estimatedCartQuoteSpecialRequirements:Locator;
     readonly estimatedCartQuoteSubmitButton:Locator;
     readonly estimatedCartQuoteSubmitSuccess:Locator;




      constructor(page: Page) {
        super(page);
        this.page = page;
        this.serviceHeadingText =page.locator('h1:has-text("Our Services")');
        this.searchbarServices = page.getByRole('textbox', { name: 'Search services' });
        this.bedroomInteriorHeading =page.getByRole('heading', { name: 'Bedroom Interior Design' });
        this.servicesImage =page.locator('div.relative.h-64.overflow-hidden').locator('div').nth(0);
        this.addToCartButton=page.locator('button').filter({ hasText: 'Add to cart' }).first()
        this.addSqftInput=page.getByRole('spinbutton', { name: 'Enter sqft' });
        this.AddToCartPopUp =page.locator("button[class='rounded-full bg-gold-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gold-700']")
        this.aaddToCartButtonAdded=page.getByRole('button', { name: 'Added' });
        this.estimatedCart =page.locator('span:has-text("Estimate Cart")')
        this.estimatedTotalPrice = page.locator('p.text-2xl.font-bold.text-gold-600:visible');
        this.estimatedCartQuote = page.locator('button').filter({ hasText: 'Get a Quote' }).last()
        this.estimatedCartQuoteName =page.getByRole('textbox', { name: 'Your full name' })
        this.estimatedCartQuotePhone = page.getByRole('textbox', { name: '+91 9876543210' })
        this.estimatedCartQuoteEmail = page.getByRole('textbox', { name: 'your.email@example.com' })
        this.estimatedCartQuoteCity = page.getByRole('textbox', { name: 'e.g. Raigarh, Chhattisgarh' })
        this.estimatedCartQuoteProjectType = this.estimatedCartQuoteProjectType = page.locator('select[name="projectType"]');
        this.estimatedCartQuoteSpecialRequirements =page.getByRole('textbox', { name: /Any specific preference, layout details, or target completion date\.\.\./i })
        this.estimatedCartQuoteSubmitButton = page.getByRole('button', { name: 'Submit' });
        this.estimatedCartQuoteSubmitSuccess = page.getByRole('heading', { name: 'Quote Request Received!' })

    }
     async open() {
        await this.goto('/services');
    }
    async searchService(serviceName: string) {
        await this.searchbarServices.fill(serviceName);
    }
    async clickAddToCart(){
        await this.addToCartButton.click();
    }
    async enterSqft(sqft: string) {
        await this.addSqftInput.fill(sqft);
    }
    async clickAddToCartPopUp() {
        await this.AddToCartPopUp.click();
    }
    async clickEstimatedCart() {
        await this.estimatedCart.click();
    }
    async clickEstimatedCartQuote() {
        await this.estimatedCartQuote.click();
    }

    async estimatedCartQuoteNameEntry(estimateQuoteName: string) {
        await this.estimatedCartQuoteName.fill(estimateQuoteName);
    }

    async estimatedCartQuotePhoneEntry(estimateQuotePhone: string) {
        await this.estimatedCartQuotePhone.fill(estimateQuotePhone);
    }
    async estimatedCartQuoteEmailEntry(estimateQuoteEmail: string) {
        await this.estimatedCartQuoteEmail.fill(estimateQuoteEmail);
    }   
    async estimatedCartQuoteCityEntry(estimateQuoteCity: string) {
        await this.estimatedCartQuoteCity.fill(estimateQuoteCity);
    }
    async selectEstimatedCartQuoteProjectType(projectType: string) {
    await this.estimatedCartQuoteProjectType.selectOption({
        label: projectType
    });
}
async enterEstimatedCartQuoteSpecialRequirements(requirements: string) {
    await this.estimatedCartQuoteSpecialRequirements.fill(requirements);
}

async clickEstimatedCartQuoteSubmit() {
    await this.estimatedCartQuoteSubmitButton.click();
}
    
}
