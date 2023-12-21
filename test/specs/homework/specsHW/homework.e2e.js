/* describe('Homework', async () => {

    it('should open page and create screenshot', async () => { */

        // sem vypracuj domácí úkol   npm run wdio -- --suite homework
/* 
        await browser.reloadSession();
        await browser.url('/registrace'); */
       /*  await browser.saveScreenshot('registration_page.png');
        await browser.pause(5000); */


  /*       const idNameSelector = $('#name');
        console.log(await idNameSelector.getHTML());
        const idEmailSelector = $('#email');
        console.log(await idEmailSelector.getHTML());
        const idPasswordSelector = $('#password');
        console.log(await idPasswordSelector.getHTML());
        const idPasswordConfirmSelector = $('#password-confirm');
        console.log(await idPasswordConfirmSelector.getHTML());
        const tagAndClassSelector = $('button.btn-primary');
        console.log(await tagAndClassSelector.getHTML());

       
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        await nameField.setValue('Martin Novak');
        await emailField.setValue('martin.novak@gmail.com');
        await passwordField.setValue('Heslo1234');
        await passwordConfirmField.setValue('Heslo1234');
        await submitButton.click();
        await browser.pause(1000);
    });

}); */

/* describe('Registration Page', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        await $('#email').setValue(username);
        await $('#password').setValue(password);
        await $('.btn-primary').click();
        await $('=Přihlášky').click();
        await browser.pause(1000);
    }); 

    it('should open the registration page', async () => {
        await browser.reloadSession();
        await browser.url('/registrace');
        console.log('Page title is: ' + await $('h1').getText());
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        console.log('Nanme field is dislayed: ' + await nameField.isDisplayed());
        console.log('Email field is dislayed: ' + await emailField.isDisplayed());
        console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
        console.log('Password confirmation field is dislayed: ' + await passwordConfirmField.isDisplayed());
        console.log('Submit button is dislayed: ' + await submitButton.isDisplayed());
    });

     it('valid registration', async () => {
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        await nameField.setValue('Martin Malatny');
        await emailField.setValue('martin.malatny@gmail.com');
        await passwordField.setValue('Heslo1234');
        await passwordConfirmField.setValue('Heslo1234');
        await submitButton.click();
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
        console.log('User currently logged in: ' + await userNameDropdown.getText());
    }); 

    it('invalid registration - existing email', async () => {
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        await nameField.setValue('Martin Malatny');
        await emailField.setValue('martin.malatny@gmail.com');
        await passwordField.setValue('Heslo1234');
        await passwordConfirmField.setValue('Heslo1234');
        await submitButton.click();
        const fieldError = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError.getText());
        const toastMessage = $('.toast-message');
        console.log('Error: ' + await toastMessage.getText());
    });

    it('invalid registration - invalid password', async () => {
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        await nameField.setValue('Lenka Klokocna');
        await emailField.setValue('lenka.klokocna@gmail.com');
        await passwordField.setValue('12345678');
        await passwordConfirmField.setValue('12345678');
        await submitButton.click();
        const fieldError = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError.getText());
        const toastMessage = $('.toast-message');
        console.log('Error: ' + await toastMessage.getText());
    });
}); */


// ukol cviceni 5 - assertace
/* describe('Registration Page', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace'); */
       /*  await $('#email').setValue(username);
        await $('#password').setValue(password);
        await $('.btn-primary').click();
        await $('=Přihlášky').click(); */
        /* await browser.pause(1000);
    }); 
 
    it('should open the registration page', async () => {
        await browser.reloadSession();
        await browser.url('/registrace');
        console.log('Page title is: ' + await $('h1').getText());
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        console.log('Nanme field is dislayed: ' + await nameField.isDisplayed());
        console.log('Email field is dislayed: ' + await emailField.isDisplayed());
        console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
        console.log('Password confirmation field is dislayed: ' + await passwordConfirmField.isDisplayed());
        console.log('Submit button is dislayed: ' + await submitButton.isDisplayed());
    });

     it('valid registration', async () => {
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        await nameField.setValue('Martin Malatnyyy');
        await emailField.setValue('martin.malatnyyy@gmail.com');
        await passwordField.setValue('Heslo1234');
        await passwordConfirmField.setValue('Heslo1234');
        await submitButton.click();
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
        await expect(await userNameDropdown.getText()).toEqual(nameField);
    });  

    it('invalid registration - existing email', async () => {
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        await nameField.setValue('Martin Malatny');
        await emailField.setValue('martin.malatny@gmail.com');
        await passwordField.setValue('Heslo1234');
        await passwordConfirmField.setValue('Heslo1234');
        await submitButton.click();
        const fieldError = $('.invalid-feedback');
        await expect(await fieldError.getText()).toEqual('Účet s tímto emailem již existuje');
        const toastMessage = $('.toast-message');
        await expect(await toastMessage.getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
    });

    it('invalid registration - invalid password', async () => {
        const nameField = $('#name');
        const emailField = $('#email');
        const passwordField = $('#password');
        const passwordConfirmField = $('#password-confirm');
        const submitButton = $('button.btn-primary');
        await nameField.setValue('Lenka Klokocna');
        await emailField.setValue('lenka.klokocna@gmail.com');
        await passwordField.setValue('12345678');
        await passwordConfirmField.setValue('12345678');
        await submitButton.click();
        const fieldError = $('.invalid-feedback');
        await expect(await fieldError.getText()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
        const toastMessage = $('.toast-message');
        await expect(await toastMessage.getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
    });
});
 */


//ukol cviceni 6 - bylo udelat reporter, ten je v wdio config js

//ukol cviceni 7 - organizace kodu

/* 
async function openRegistrationPage() {
    await browser.reloadSession();
    await browser.url('/registrace');
    await browser.pause(1000);
}

function getNameField() {
    return $('#name');
}

function getEmailField() {
    return $('#email');
}

function getPasswordField() {
    return $('#password');
}

function getPasswordConfirmField() {
    return $('#password-confirm');
}

function getSubmitButton() {
    return $('button.btn-primary');
}

function getRightNavbar() {
    return $('.navbar-right');
}

function getUserNameDropdown() {
    return getRightNavbar().$('[data-toggle="dropdown"]');
}

function getToast() {
    return $('.toast-message');
}

function getFieldError() {
    return $('.invalid-feedback');
}

describe('Registration Page', async () => {

    beforeEach(async () => {
        await openRegistrationPage();
    });
 
    it('should open the registration page', async () => {
        console.log('Page title is: ' + await $('h1').getText());
        const nameField = await getNameField();
        const emailField = await getEmailField();
        const passwordField = await getPasswordField();
        const passwordConfirmField = await getPasswordConfirmField();
        const submitButton = await getSubmitButton();
      
        console.log('Name field is dislayed: ' + await expect(nameField).toBeDisplayed());
        console.log('Email field is dislayed: ' + await expect(emailField).toBeDisplayed());
        console.log('Password field is dislayed: ' + await expect(passwordField).toBeDisplayed());
        console.log('Password confirmation field is dislayed: ' + await expect(passwordConfirmField).toBeDisplayed());
        console.log('Submit button is dislayed: ' + await expect(submitButton).toBeDisplayed());
    });

     it('valid registration', async () => {
        await getNameField().setValue('Martin Malatnyyy');
        await getEmailField().setValue('martin.malatnyyy@gmail.com');
        await getPasswordField().setValue('Heslo1234');
        await getPasswordConfirmField().setValue('Heslo1234');
        await getSubmitButton().click();
        await expect(await getUserNameDropdown().getText()).toEqual('Martin Malatnyyy');
    });  

    it('invalid registration - existing email', async () => {
        await getNameField().setValue('Martin Malatny');
        await getEmailField().setValue('martin.malatny@gmail.com');
        await getPasswordField().setValue('Heslo1234');
        await getPasswordConfirmField().setValue('Heslo1234');
        await getSubmitButton().click();
        await expect(await getFieldError().getText()).toEqual('Účet s tímto emailem již existuje');
        await expect(await getToast().getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
    });

    it('invalid registration - invalid password', async () => {
        await getNameField().setValue('Lenka Klokocna');
        await getEmailField().setValue('lenka.klokocna@gmail.com');
        await getPasswordField().setValue('12345678');
        await getPasswordConfirmField().setValue('12345678');
        await getSubmitButton().click();
        await expect(await getFieldError().getText()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
        await expect(await getToast().getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
    });
}); */

// ukol z lekce c.8 a 9 - page object pattern

import RegistrationPage from '../pageobjectsHW/homework.page.js/index.js'
import {fullName, email, password, passwordC} from '../../../fixturesHW.js'

describe('Registration Page', async () => {

    beforeEach(async () => {
        await RegistrationPage.open();
    });
 
    it('should open the registration page', async () => {
        await expect(await RegistrationPage.nameField).toBeDisplayed();
        await expect(await RegistrationPage.nameField).toBeEnabled();
        await expect(await RegistrationPage.emailField).toBeDisplayed();
        await expect(await RegistrationPage.emailField).toBeEnabled();
        await expect(await RegistrationPage.passwordField).toBeDisplayed();
        await expect(await RegistrationPage.passwordField).toBeEnabled();
        await expect(await RegistrationPage.passwordConfirmField).toBeDisplayed();
        await expect(await RegistrationPage.passwordConfirmField).toBeEnabled();
        await expect(await RegistrationPage.submitButton).toBeDisplayed();
        await expect(await RegistrationPage.submitButton.getText()).toEqual('Zaregistrovat');
    });

     it('valid registration', async () => {
        await RegistrationPage.register(fullName, email, password, passwordC);
        await expect(await RegistrationPage.getCurrentUser()).toEqual(fullName);
    });  

    it('invalid registration - existing email', async () => {
        await RegistrationPage.register('Milan Konecny', 'm.konecny@gmail.com', 'Heslo123', 'Heslo123');
        await expect(await RegistrationPage.getToastMessage()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
        await expect(await RegistrationPage.getFieldError()).toEqual('Účet s tímto emailem již existuje')
    
        await expect(await RegistrationPage.nameField).toBeDisplayed();
        await expect(await RegistrationPage.emailField).toBeDisplayed();
        await expect(await RegistrationPage.passwordField).toBeDisplayed();
        await expect(await RegistrationPage.passwordConfirmField).toBeDisplayed();
        await expect(await RegistrationPage.submitButton).toBeDisplayed();
    });

    it('invalid registration - invalid password', async () => {
        await RegistrationPage.register('Marek Popleta', 'm.popleta@gmail.com', '12345678', '12345678');
        await expect(await RegistrationPage.getToastMessage()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
        await expect(await RegistrationPage.getFieldError()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici')
    });
});