import {Page,Locator, expect} from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage{
    readonly page:Page;
    readonly contactNameInput:Locator;
    readonly contactEmailInput:Locator;
    readonly contactPhoneInput:Locator;
    readonly contactMessageInput:Locator;
    readonly contactSubmitButton:Locator;
    readonly contactSuccessMessage:Locator;


    constructor(page:Page){
        super(page);
        this.page = page;
        this.contactNameInput = page.getByRole('textbox', { name: 'Full Name *' });
        this.contactEmailInput = page.getByRole('textbox', { name: 'Email Address *' })
        this.contactPhoneInput = page.getByRole('textbox', { name: 'Phone Number *' })
        this.contactMessageInput = page.getByRole('textbox', { name: 'Your Message *' })
        this.contactSubmitButton = page.getByRole('button', { name: 'Send Message' })
        this.contactSuccessMessage = page.getByText('Thank you! We will contact you soon.', { exact: true })
    }  
    async open() {
        await this.goto('/contact');
    }
    async fillContactForm(name: string, email: string, phone: string, message: string) {
        await this.contactNameInput.fill(name);
        await this.contactEmailInput.fill(email);
        await this.contactPhoneInput.fill(phone);
        await this.contactMessageInput.fill(message);
    }
    async submitContactForm() {
        await this.contactSubmitButton.click();
    }

}