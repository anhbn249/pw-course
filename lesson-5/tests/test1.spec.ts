import { test } from '@playwright/test';

test('registration', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    await page.locator('//input[@id="username"]').fill('anhbn');
    await page.locator('//input[@id="email"]').fill('anhbn@vmogroup.com');
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.selectOption('//select[@id="country"]', 'Australia');
    await page.locator('//input[@id="dob"]').fill('2024-05-06'); 
    await page.locator('//input[@id="profile"]').setInputFiles('C:\\Users\\HP\\Downloads\\441271553_839463161551576_7415655162605779340_n.jpg');
    await page.locator('//textarea[@id= "bio"]').fill('lesson 5')
    await page.locator('//div[@class="tooltip"]').hover();
    await page.locator('//input[@id= "newsletter"]').check();
    await page.locator('//button[@type= "submit" and text()="Register"]').click();
});
