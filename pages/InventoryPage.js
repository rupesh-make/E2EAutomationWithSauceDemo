import BasePage from './BasePage';

class InventoryPage extends BasePage {
    constructor(page) {
        super(page);

        this.productNames = page.locator('.inventory_item_name');
        this.addToCartButtons = page.locator('button:has-text("Add to cart")');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async getAllProductNames() {
        const count = await this.productNames.count();

        for (let i = 0; i < count; i++) {
            const name = await this.productNames.nth(i).textContent();
            console.log(name);
        }
    }

    async addProductToCart(productName) {
        const count = await this.productNames.count();

        for (let i = 0; i < count; i++) {
            const name = await this.productNames.nth(i).textContent();

            if (name.trim() === productName) {
                await this.addToCartButtons.nth(i).click();
                break;
            }
        }
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = InventoryPage;