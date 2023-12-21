import {username, password, userFullName, expectedApplicationsPageRows} from '../../fixtures.js'

describe('Login Page', async () => {

    function getEmailField() {
        return $('#email');
     }
     
    function getPasswordField() {
        return $('#password');
     }

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    it('should show login form', async () => {

        const emailField = await getEmailField();
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();

        const passwordField = await getPasswordField();
        await expect(passwordField).toBeDisplayed();
        await expect(passwordField).toBeEnabled();

        const loginButton = $('.btn-primary'); // did not await element here
        await expect(await loginButton.getText()).toEqual('Přihlásit'); // awaited getText() which resolved the whole chain
    });

    it('should login with valid credentials', async () => {
        const loginButton = $('.btn-primary');
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');

        await getEmailField().setValue(username);
        await getPasswordField.setValue(password);
        await loginButton.click();

        await expect(await userNameDropdown.getText()).toEqual(userFullName);
    });

    it('should not login with invalid credentials', async () => {
        const emailField = await getEmailField();
        const passwordField = await getPasswordField();
        const loginButton = $('.btn-primary');
        const toastMessage = $('.toast-message');
        const fieldError = $('.invalid-feedback');

        await getEmailField().setValue(username);
        await getPasswordField().setValue('invalid');
        await loginButton.click();

        // toast message is visiblae
        await expect(await toastMessage.getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');

        // validation message in the form is visible as well
        await expect(await fieldError.getText()).toEqual('Tyto přihlašovací údaje neodpovídají žadnému záznamu.');

        // and we still see login form
        await expect(await getEmailField()).toBeDisplayed();
        await expect(await passwordField).toBeDisplayed();
        await expect(await loginButton).toBeDisplayed();
    });

    it('should logout', async () => {
        const emailField = await getEmailField();
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
        const logoutLink = $('#logout-link');

        await getEmailField().setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        // assert we are logged in, without it, the test would be invalid
        await expect(await userNameDropdown.getText()).toEqual(userFullName);

        await userNameDropdown.click();
        await logoutLink.click();

        await expect(await userNameDropdown.isDisplayed()).toBeFalsy();
        await expect(await navbarRight.getText()).toEqual('Přihlásit');
    });
});