import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

/* describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        const windowSize = await browser.getWindowSize();
        
        console.log(windowSize);

        await browser.saveScreenshot('login_page.png');

        await browser.pause(5000);

    });

});

*/

/*describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        const emailField = await $('#email');
        const passwordField = await $('#password');
        const loginButton = await $('.btn-primary');
        const forgotPasswordLink = await $('=Zapomněli jste své heslo?');

        console.log(await loginButton.isEnabled());
        console.log(await loginButton.isDisplayed());
        console.log(await loginButton.isExisting());
        console.log(await loginButton.getText());
        console.log(await forgotPasswordLink.getAttribute('href'));

    });

});

*/

/* describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        const emailField = await $('#email');
        const passwordField = await $('#password');
        const loginButton = await $('.btn-primary');
        const forgotPasswordLink = await $('=Zapomněli jste své heslo?');

        console.log(await loginButton.isEnabled());
        console.log(await loginButton.isDisplayed());
        console.log(await loginButton.isExisting());
        console.log(await loginButton.getText());
        console.log(await forgotPasswordLink.getAttribute('href'));


        await $('#email').setValue('martina@czechitas.cz');
        await $('#password').setValue('heslo1234');
        await loginButton.click();

        await browser.pause(2000);

        await emailField.clearValue();
        await emailField.setValue(username);

        await passwordField.clearValue();
        await passwordField.setValue(password);

        await loginButton.click();

        await browser.pause(2000);
    });

    //podminene cekani jsou lepsi nez pauzy, vice v materialech 3. lekce

*/

/* describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');
        const emailField = $('#email');
        const passwordField = $('#password');
        console.log('Email field is displayed: ' + await emailField.isDisplayed());
        console.log('Email field is enabled: ' + await emailField.isEnabled());
        console.log('Password field is displayed: ' + await passwordField.isDisplayed());
        console.log('Password field is enabled: ' + await passwordField.isEnabled());

        const loginButton = await $('.btn-primary');
        console.log('Login button text: ' + await loginButton.getText());

        const link = $('form').$('a').getAttribute('href');
        console.log('Forgot password? link: ' + await link);

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        const currentUser = $('.navbar-right').$('strong').getText()
        console.log(await currentUser);

        await $('=Přihlášky').click();
        await browser.pause(1000);

        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log('There are ' + rows.length + ' rows in the table');
        for (const row of rows) {
            const rowText = await row.getText()
            console.log(rowText);
        }
        
});
}) */



// 4 .lekce
// cviceni c.1
describe('Login And Applications Page', async () => {

    it('My long and ugly test', async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');

        // selektory pro elementy na prihlasovacim formulari
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');
        const fieldError = $('.invalid-feedback');
        const toastMessage = $('.toast-message');


        // uzivatel na je formulari pro prihlaseni
        console.log('Email field is dislayed: ' + await emailField.isDisplayed());
        console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
        console.log('Login button is dislayed: ' + await loginButton.isDisplayed());


        // uzivatel nevyplni prihlasovaci udaje a klikne prihlasit - ocekava ze se neprihlasi
        await loginButton.click();
        console.log('Email field is dislayed: ' + await emailField.isDisplayed());
        console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
        console.log('Login button is dislayed: ' + await loginButton.isDisplayed());

        
        // uzivatel vyplni spatne prihlasovaci udaje a klikne prihlasit - ocekava ze se neprihlasi
        await emailField.setValue(username);
        await passwordField.setValue('invalid');
        await loginButton.click();
        console.log('Error: ' + await toastMessage.getText());
        console.log('Field error: ' + await fieldError.getText());
        console.log('Email field is dislayed: ' + await emailField.isDisplayed());
        console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
        console.log('Login button is dislayed: ' + await loginButton.isDisplayed());


        // uzivatel vyplni spravne prihlasovaci udaje a klikne prihlasit - ocekava ze se prihlasi
        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        // kontrola jmena prihlaseneho uzivaele
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        console.log('User currently logged in: ' + await userNameDropdown.getText());

        // prechod na prihlasky
        await $('=Přihlášky').click();
        await browser.pause(1000);

        console.log('Page title is: ' + await $('h1').getText());

        // vypis tabulky
        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log('There are ' + rows.length + ' rows in the table');
        for (const row of rows) {
            const rowText = await row.getText()
            console.log(rowText);
        }
        
        // selektory pro filtrovani v tabulce
        const searchInput = $('input[type="search"]');
        const loading = $('#DataTables_Table_0_processing');   // selektor Provádím při načítání dat v tabulce
        const searchText = 'mar';

        // filtrovani v tabulce
        await searchInput.setValue(searchText);
        await browser.pause(1000);
        await loading.waitForDisplayed({ reverse: true});

        // vypis tabulky
        const filteredRows = await $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + filteredRows.length + ' filtered rows in the table');
        for (const row of filteredRows) {
            console.log(await row.getText());
        }

        // odhlaseni
        const navbarRight = $('.navbar-right')
        const logoutLink = $('#logout-link');
        await userNameDropdown.click();
        await logoutLink.click();
        console.log('Navbar text: ' + await navbarRight.getText());
    });
});


//lekce 4 cviceni c.2

describe('Login Page', async () => {
    beforeEach(async() => { 
        await browser.reloadSession();
        await browser.url('/prihlaseni')
     });

    it('login with valid credentials', async () => {     
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();
    });
    
    it('login with invalid credentials', async () => {     
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue('invalid');
        await loginButton.click();
    });
    
    it('logout', async () => {     
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
        const logoutLink = $('#logout-link');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();
        await userNameDropdown.click();
        await logoutLink.click();
    });

     it('applications table displayed without filter', async () => {     
        await $('#email').setValue(username);
        await $('#password').setValue(password);
        await $('.btn-primary').click();
        await $('=Přihlášky').click();
        await browser.pause(1000);
        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log('There are ' + rows.length + ' rows in the table');
        for (const row of rows) {
            const rowText = await row.getText()
            console.log(rowText);
        }
    });

    it('applications table filtered', async () => {     
        await $('#email').setValue(username);
        await $('#password').setValue(password);
        await $('.btn-primary').click();
        await $('=Přihlášky').click();
        await browser.pause(1000);
        const searchInput = $('input[type="search"]');
        const loading = $('#DataTables_Table_0_processing');
        const searchText = 'mar';

        await searchInput.setValue(searchText);
        await browser.pause(1000);
        await loading.waitForDisplayed({ reverse: true});
    });
});
        
describe('Applications Page', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        await $('#email').setValue(username);
        await $('#password').setValue(password);
        await $('.btn-primary').click();
        await $('=Přihlášky').click();
        await browser.pause(1000);
    });

    it('should list all applications', async () => {
        console.log('Page title is: ' + await $('h1').getText());

        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log('There are ' + rows.length + ' rows in the table');
        for (const row of rows) {
            const rowText = await row.getText()
            console.log(rowText);
        }
    });

    it('should filter in applications', async () => {
        const searchInput = $('input[type="search"]');
        const loading = $('#DataTables_Table_0_processing');
        const searchText = 'mar';

        await searchInput.setValue(searchText);
        await browser.pause(1000);
        await loading.waitForDisplayed({ reverse: true});

        const filteredRows = await $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + filteredRows.length + ' filtered rows in the table');
        for (const row of filteredRows) {
            console.log(await row.getText());
        }
    });
});


import {username, password} from './fixtures.js'

describe('Login Page', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
    });

    it('should show login form', async () => {
        const emailField = $('#email');


        await expect(emailField).toBeEnabled()
        await expect(emailField).toBeDisplayed()
/*         console.log('Email field is dislayed: ' + await emailField.isDisplayed());
        console.log('Email field is dislayed: ' + await emailField.isEnabled()); */

        const passwordField = $('#password');
        await expect(passwordField).toBeEnabled()
        await expect(passwordField).toBeDisplayed()
        /* console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
        console.log('Password field is dislayed: ' + await passwordField.isEnabled()); */

        const loginButton = $('.btn-primary');
        await expect(loginButton).toBeEnabled()
        await expect(loginButton).toHaveText('Přihlásit')
       /*  console.log('Login button is dislayed: ' + await loginButton.isDisplayed());
        console.log('Login button text is: ' + await loginButton.getText()); */
    });

    it('should login with valid credentials', async () => {
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        console.log('User currently logged in: ' + await userNameDropdown.getText());
    });

    it('should not login with invalid credentials', async () => {

        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue('invalid');
        await loginButton.click();

        const toastMessage = $('.toast-message');
        console.log('Error: ' + await toastMessage.getText());

        const fieldError = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError.getText());

        console.log('Email field is dislayed: ' + await emailField.isDisplayed());
        console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
        console.log('Login button is dislayed: ' + await loginButton.isDisplayed());
    });

    it('should logout', async () => {
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
        const logoutLink = $('#logout-link');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

        console.log('User currently logged in: ' + await userNameDropdown.getText());

        await userNameDropdown.click();
        await logoutLink.click();

        console.log('User is logged in: ' + await userNameDropdown.isDisplayed());
        console.log('Navbar text: ' + await navbarRight.getText());
    });
});

describe('Applications Page', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        await $('#email').setValue(username);
        await $('#password').setValue(password);
        await $('.btn-primary').click();
        await $('=Přihlášky').click();
        await browser.pause(1000);
    });

    it('should list all applications', async () => {
        console.log('Page title is: ' + await $('h1').getText());

        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log('There are ' + rows.length + ' rows in the table');
        for (const row of rows) {
            const rowText = await row.getText()
            console.log(rowText);
        }
    });

    it('should filter in applications', async () => {
        const searchInput = $('input[type="search"]');
        const loading = $('#DataTables_Table_0_processing');
        const searchText = 'mar';

        await searchInput.setValue(searchText);
        await browser.pause(1000);
        await loading.waitForDisplayed({ reverse: true});

        const filteredRows = await $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + filteredRows.length + ' filtered rows in the table');
        for (const row of filteredRows) {
            console.log(await row.getText());
        }
    });
});



//jak udelat random emaily, aby clovek nemusel vymyslet nove
//1. metoda: karel.novak+1@gmail.com
//2.metoda 
/* function generateRandomEmail() {
    const domains = ["example.com", "mail.com", "test.com"];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomNumber = Math.floor(Math.random() * 10000); // Generates a random number between 0 and 9999
    const email = `user${randomNumber}@${randomDomain}`;
    return email;
} */

