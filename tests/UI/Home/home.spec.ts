import {test,expect} from "@playwright/test";
import { HomePage } from '../../../pages/HomePage';

test.describe('Home page',()=>{
    test('verify the homepage loads successfully',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();
        await expect(homePage.logo).toBeVisible();
    });
    test('verify the service navigation',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await homePage.clickServices();

    await expect(page).toHaveURL(/services/i);
    })

    test('verify the Portfolio navigation',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await homePage.clickPortfolio();

    await expect(page).toHaveURL(/portfolio/i);
    })
     test('verify the about navigation',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await homePage.clickAbout();

    await expect(page).toHaveURL(/about/i);
    })
     test('verify the blog navigation',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await homePage.clickBlog();

    await expect(page).toHaveURL(/blog/i);
    })
    test('verify the reviews navigation',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await homePage.clickReviews();

    await expect(page).toHaveURL(/reviews/i);
    })
     test('verify the contact navigation',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await homePage.clickContact();

    await expect(page).toHaveURL(/contact/i);
    })
     test('verify the cost calculator Button verify',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await homePage.clickCostCalculatorButton();

    await expect(page).toHaveURL(/calculators/i);
    })

    test('verify the view our work button working',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await homePage.clickViewOurWorkButton();

    await expect(page).toHaveURL(/portfolio/i);
    })
     test('verify the call button is displayed',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await expect(homePage.callButton).toBeVisible();
    })
    test('verify the view all services button is displayed',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await expect(homePage.viewAllServicesButton).toBeVisible();
    })
    test('verify the view full portfolio button is displayed',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await expect(page).toHaveURL(/portfolio/i);
    })
    test('verify the read all reviews button is displayed',async({page})=>{
        const homePage = new HomePage(page);
        await homePage.open();

    await expect(page).toHaveURL(/reviews/i);
    })




    
});