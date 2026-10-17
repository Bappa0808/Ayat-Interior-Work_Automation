import {Page,Locator, expect} from "@playwright/test";
import { BasePage } from "./BasePage";

export class ReviewPage extends BasePage{
    readonly page:Page;
    readonly reviewNameInput:Locator;
    readonly reviewDesignation:Locator
    readonly reviewMessageInput:Locator;
    readonly reviewSubmitButton:Locator;
    readonly reviewSuccessMessage:Locator;


    constructor(page:Page){
        super(page);
        this.page = page;
        this.reviewNameInput = page.getByRole('textbox', { name: 'Your Name *' });
        this.reviewDesignation =page.getByRole('textbox', { name: 'Designation (Optional)' })
        this.reviewMessageInput = page.getByRole('textbox', { name: 'Your Review *' })
        this.reviewSubmitButton = page.getByText('Submit Review', { exact: true })
        this.reviewSuccessMessage = page.getByText('Thank you for your review!', { exact: true });
    }  
    async open() {
        await this.goto('/reviews');
    }
    async fillReviewForm(name: string, designation: string, message: string) {
        await this.reviewNameInput.fill(name);
        await this.reviewDesignation.fill(designation);
        await this.reviewMessageInput.fill(message);
    }
    async submitReviewForm() {
        await this.reviewSubmitButton.click();
    }
    
}