describe('Controller : CurrencyPageCtrl', () => {
    let currencyPageCtrl;

    beforeEach(() => {
        module('ui.router');
        module('currency-page');
    });

    beforeEach(inject(($controller) => {
        currencyPageCtrl = $controller('CurrencyPageCtrl');
    }));

    it('should be defined', () => {
        expect(currencyPageCtrl).toBeDefined();
    });
});