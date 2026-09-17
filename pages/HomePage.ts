import {Page,Locator} from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    readonly page:Page;
    readonly logo:Locator;
    readonly costCalculator:Locator;
    readonly serviceLink:Locator;
    readonly contactLink : Locator;
    readonly portfolioLink : Locator;
    readonly aboutLink :Locator;
    readonly blogLink :Locator;
    readonly reviewLink:Locator;
    readonly costCalculatorButton:Locator;
    readonly viewOurWorkButton:Locator;
    readonly callButton:Locator;
    readonly viewAllServicesButton:Locator;
    readonly viewFullPortfolioButton:Locator;
    readonly readAllReviewsButton:Locator;

    

    constructor(page:Page){
        super(page);
        this.page = page;

        this.logo =page.getByText('Ayat Interior', { exact: true });

        this.serviceLink = page.locator('nav').getByRole('link', { name: 'Services', exact: true });
        this.costCalculator = page.locator('nav').getByRole('link', { name: 'Cost Calculator', exact: true });
        this.contactLink = page.locator('nav').getByRole('link', { name: 'Contact', exact: true });
        this.portfolioLink = page.locator('nav').getByRole('link', { name: 'Portfolio', exact: true });
        this.aboutLink =page.locator('nav').getByRole('link', { name: 'About', exact: true }); 
        this.blogLink = page.locator('nav').getByRole('link', { name: 'Blog', exact: true }); 
        this.reviewLink= page.locator('nav').getByRole('link', { name: 'Reviews', exact: true });
        this.costCalculatorButton = page.getByText('Cost Calculator', { exact: true });
        this.viewOurWorkButton = page.getByRole('link', { name: 'View Our Work' });
        this.callButton = page.getByRole('link', { name: 'Call: 8815765905' });
        this.viewAllServicesButton=page.getByRole('link', { name: 'View All Services' });
        this.viewFullPortfolioButton=page.getByRole('link', { name: 'View Full Portfolio' });
        this.readAllReviewsButton=page.getByRole('link', { name: 'Read All Reviews' });
    }
     async open() {
        await super.goto('');
    }
     async clickServices() {
        await this.serviceLink.click();
    }
     async clickPortfolio() {
        await this.portfolioLink.click();
    }
    async clickContact() {
        await this.contactLink.click();
    }
    async clickCostCalculator() {
        await this.costCalculator.click();
    }
    async clickAbout() {
        await this.aboutLink.click();
    }
    async clickBlog() {
        await this.blogLink.click();
    }
    async clickReviews() {
        await this.reviewLink.click();
    }
    async clickCostCalculatorButton() {
        await this.costCalculatorButton.click();
    }
    async clickViewOurWorkButton() {
        await this.viewOurWorkButton.click();
    }
    async clickViewFullPortfolioButton() {
        await this.viewFullPortfolioButton.click();
    }
    async clickReadAllReviewsButton() {
        await this.readAllReviewsButton.click();
    }

}