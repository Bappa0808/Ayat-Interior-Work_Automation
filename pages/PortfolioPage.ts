import {test,Page, Locator} from "@playwright/test";
import {BasePage} from "../../AyatInteriorWrokAutomation/pages/BasePage";

export class PortfolioPage extends BasePage{

    readonly page:Page;
    readonly portfolioHeadingText:Locator;
    readonly portfolioSearchbar:Locator;
    readonly portfolioSearchResult:Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.portfolioHeadingText =page.getByRole('heading', { name: 'Our Portfolio' });
        this.portfolioSearchbar=page.getByRole('textbox', { name: 'Search portfolio' });
        this.portfolioSearchResult=page.locator("//section[@class='section-padding bg-white']//div[@class='container-custom']");

        

    }

    async open() {
        await this.goto('/portfolio');
    }
    async searchPortfolio(portfolioName: string) {
        await this.portfolioSearchbar.fill(portfolioName);
    }
}