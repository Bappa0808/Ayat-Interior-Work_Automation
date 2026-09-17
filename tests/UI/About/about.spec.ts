import {test,expect} from "@playwright/test";
import {  AboutPage } from '../../../pages/About';


test.describe('About page',()=>{

     test('verify the about page loads successfully',async({page})=>{
            const aboutPage = new AboutPage(page);
            await aboutPage.open();
            await aboutPage.verifyAboutImage();
        });
})
