import {test,expect} from "@playwright/test";
import {PortfolioPage} from  '../../../pages/PortfolioPage';



test.describe('Portfolio page',()=>{

    test('verify the portfolio page loads successfully',async({page})=>{
            const portfolioPage = new PortfolioPage(page);
            await portfolioPage.open();
            await expect(portfolioPage.portfolioHeadingText).toBeVisible();
        });
        test('verify the portfolio page search functionality',async({page})=>{
            const portfolioPage = new PortfolioPage(page);
            await portfolioPage.open();
            await portfolioPage.searchPortfolio('kitchen');
            
                await expect(portfolioPage.portfolioSearchResult.first()).toBeVisible();
        });
})