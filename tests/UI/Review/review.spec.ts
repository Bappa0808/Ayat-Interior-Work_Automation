import {test,expect} from "@playwright/test";
import {ReviewPage} from  '../../../pages/Review';
import { ServicesPage } from "../../../pages/ServicesPage";

test.describe('Review page',()=>{ 

    test.describe('reviw functionality',()=>{
            test('verify the services page loads successfully',async({page})=>{
                const reviewsPage = new ReviewPage(page);
                await reviewsPage.open();
                await reviewsPage.fillReviewForm("Test User", "Test Designation", "This is a test review message.");
                await reviewsPage.submitReviewForm();
                await expect(page.getByText(/Thank you for your review/i)).toBeVisible();
            });

})
})