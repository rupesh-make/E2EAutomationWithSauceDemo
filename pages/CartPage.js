import BasePage from './BasePage';

class CartPage extends BasePage {
    constructor(page) {
        super(page);

        this.cartItems = page.locator('.inventory_item_name');
    }

    async isProductInCart(productName) {
        const count = await this.cartItems.count();

        for (let i = 0; i < count; i++) {
            const name = await this.cartItems.nth(i).textContent();

            if (name.trim() === productName) {
                return true;
            }
        }
        return false;
    }
}

module.exports = CartPage;