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
}
