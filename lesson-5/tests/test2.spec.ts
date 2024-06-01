import { test } from '@playwright/test';

test('add product to cart', async ({ page }) => { 
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="02-xpath-product-page.html" and text()="Bài học 2: Product page"]').click();
    
    // Thêm sản phẩm thứ nhất số lượng 1 vào giỏ hàng
        await page.locator('//button[@class="add-to-cart" and @data-product-id="1"]').click();

    // Thêm sản phẩm thứ hai số lượng 2 vào giỏ hàng
    for (let i = 1; i <= 2; i++) {
        await page.locator('//button[@class="add-to-cart" and @data-product-id="2"]').click()
    };

    // Thêm sản phẩm thứ ba số lượng 3 vào giỏ hàng
    for (let i = 1; i <= 3; i++) {
        await page.locator('//button[@class="add-to-cart" and @data-product-id="3"]').click()
    };
});
       