import {test,expect} from "@playwright/test";
import {ContactPage} from '../../../pages/ContactPage';

test.describe('Contact page',()=>{
    test('verify the contact page loads successfully',async({page})=>{
        const contactPage = new ContactPage(page);
        await contactPage.open();
        await expect(page).toHaveURL('/contact');
    });
    test('verify contact form submission',async({page})=>{
        const contactPage = new ContactPage(page);
        await contactPage.open();
        await contactPage.fillContactForm("Test User", "test@example.com", "1234567890", "This is a test message.");
        await contactPage.submitContactForm();
        await expect(contactPage.contactSuccessMessage).toBeVisible();
    });
});