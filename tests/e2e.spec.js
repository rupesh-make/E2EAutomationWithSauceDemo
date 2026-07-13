import { test, expect } from '@playwright/test'
import  PageObjectManager from '../pages/PageObjectManager.js'
import  data from '../Utils/testData'

test('E2E SauceDemo Flow', async ({ page }) => {

    const manager = new PageObjectManager(page);

    const loginPage = manager.getLoginPage();
    const inventoryPage = manager.getInventoryPage();
    const cartPage = manager.getCartPage();

    // Step 1: Login
    await loginPage.navigate();
    await loginPage.login(data.username, data.password);

    // Validation
    await expect(page).toHaveURL(/inventory.html/);

    // Step 2: Inventory
    await inventoryPage.getAllProductNames();

    await inventoryPage.addProductToCart(data.productName);

    // Step 3: Go to Cart
    await inventoryPage.goToCart();

    // Validation
    const isPresent = await cartPage.isProductInCart(data.productName);
    expect(isPresent).toBeTruthy();
});