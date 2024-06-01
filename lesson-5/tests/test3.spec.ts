import { test } from '@playwright/test';

test('add to do list', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="03-xpath-todo-list.html" and text()="Bài học 3: Todo page"]').click();

    
    for (let i = 1; i <= 10; i++) {
        await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
        await page.locator('//button[@id="add-task"]').click();
    }
    for (let index = 1; index <= 10; index++) {
        await page.waitForTimeout(1000);
        if (index % 2 !== 0) {
            await page.locator(`//li/span[text()='Todo ${index}']//following-sibling::div//button[contains(@onclick,'deleteTask')]`).click({force : true});

            page.once('dialog', async dialog => {
                await dialog.accept();
            })
            
        }
    }
});