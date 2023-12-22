class Helper {
    async getRandomEmail() {
        const timestamp = Date.now();
        return `test${timestamp}@czechitas.cz`;
    }
}

export default new Helper;