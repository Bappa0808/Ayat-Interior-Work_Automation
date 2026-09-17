import {Page,Locator, expect} from "@playwright/test";
import { BasePage } from "./BasePage";

export class AboutPage extends BasePage{

    readonly page:Page;
    readonly aboutImg:Locator;



    constructor(page:Page){
        super(page);
        this.page = page;
        this.aboutImg = page.getByAltText('Modern Interior Design', { exact: true })
    }
    async open() {
        await super.goto('/about');
    }
    async verifyAboutImage() {
        await expect(this.aboutImg).toBeVisible();
    }

}