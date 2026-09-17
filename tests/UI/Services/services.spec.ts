import {test,expect} from "@playwright/test";
import {ServicesPage} from  '../../../pages/ServicesPage';

test.describe('Services page',()=>{
        test('verify the services page loads successfully',async({page})=>{
            const servicesPage = new ServicesPage(page);
            await servicesPage.open();
            await expect(servicesPage.serviceHeadingText).toBeVisible();
        });
        test('verify service search functionality',async({page})=>{
            const servicesPage = new ServicesPage(page);
            await servicesPage.open();
            await servicesPage.searchService("room");
            await expect(servicesPage.searchbarServices).toBeVisible();

            await expect(servicesPage.bedroomInteriorHeading).toBeVisible();
        });
         test('verify service search reult images are displayed',async({page})=>{
            const servicesPage = new ServicesPage(page);
            await servicesPage.open();
            await expect(servicesPage.servicesImage).toBeVisible();
        });
        test('verify estimated cart functionality',async({page})=>{
            const servicesPage = new ServicesPage(page);
            await servicesPage.open();
            await servicesPage.clickAddToCart();
            await servicesPage.enterSqft("100");
            await servicesPage.clickAddToCartPopUp();
            await expect(servicesPage.aaddToCartButtonAdded).toBeVisible();
            await servicesPage.clickEstimatedCart();
            await expect(servicesPage.estimatedTotalPrice).toBeVisible();
        });
});