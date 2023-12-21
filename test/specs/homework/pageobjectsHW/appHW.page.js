//ukol 9.lekce

class AppHWPage {

    get toast() { return $('.toast-message'); }
    get navbarRight() { return $('.navbar-right'); }
    get userNameDropdown() { return this.navbarRight.$('[data-toggle="dropdown"]'); }
    get fieldError() { return $('.invalid-feedback'); }

    async open() {
        await browser.url('/');
    }

    async getToastMessage() {
        return await this.toast.getText();
    }

    async getCurrentUser() {
        return await this.userNameDropdown.getText();
    }

    async getFieldError() {
        return await this.fieldError.getText();
    }

}

export default AppHWPage;
