import  LoginPage from './loginPage'
import InventoryPage from './inventoryPage'
import CartPage from './cartPage'

class PageObjectManager {
    constructor(page) {
        this.page = page;
    }

    getLoginPage() {
        return new LoginPage(this.page);
    }

    getInventoryPage() {
        return new InventoryPage(this.page);
    }

    getCartPage() {
        return new CartPage(this.page);
    }
}

module.exports = PageObjectManager;