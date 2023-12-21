// Finalni reseni ukolu

import RegistrationPage from '../pageobjectsHW/homework.page.js'
import {fullName, email, password, passwordC} from '../fixturesHW.js'

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