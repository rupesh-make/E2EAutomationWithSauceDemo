import BasePage from './BasePage'

class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.fill(this.username, username);
        await this.fill(this.password, password);
        await this.click(this.loginBtn);
    }
}

module.exports = LoginPage;