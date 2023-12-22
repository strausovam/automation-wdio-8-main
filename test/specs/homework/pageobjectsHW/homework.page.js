//Finalni pageobject

import AppHWPage from './appHW.page.js';

class RegistrationPage extends AppHWPage {

    constructor() {
        super();
        this.url = '/registrace';
    }

    get nameField() { return $('#name'); }
    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get passwordConfirmField() { return $('#password-confirm'); }
    get submitButton() { return $('button.btn-primary'); }

    async open() {
        await browser.reloadSession();
        await browser.url(this.url);
    }

    async register(fullName, email, password) {
        await this.nameField.setValue(fullName)
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.passwordConfirmField.setValue(password);
        await this.submitButton.click();
    }
}

export default new RegistrationPage();