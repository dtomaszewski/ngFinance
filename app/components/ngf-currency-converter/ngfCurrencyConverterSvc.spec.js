describe('Service : ngfCurrencyConverterSvc', () => {
    let ngfCurrency;
    let $httpBackend;

    beforeEach(module('ngf-currency-converter'));

    beforeEach(inject((_ngfCurrency_, _$httpBackend_) => {
        ngfCurrency = _ngfCurrency_;
        $httpBackend = _$httpBackend_;
    }));

    it('should calculate currencies', () => {
        const successCallback = jasmine.createSpy();
        const responseObj = {
            from: 'PLN',
            to: 'USD',
            from_amount: 200
        };
        $httpBackend.when('GET', 'https://currencyconverter.p.mashape.com/?from=PLN&from_amount=21&to=USD').respond(responseObj);

        ngfCurrency.convert('PLN', 'USD', 21).then(successCallback);

        expect(successCallback).not.toHaveBeenCalled();
        expect($httpBackend.flush).not.toThrow();
        expect(successCallback).toHaveBeenCalledWith(responseObj);
    });
});