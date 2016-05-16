describe('Directive : ngfCurrencyConverter', () => {
    let $q;
    let scope;
    let element;
    let isolatedScope;
    let ngfCurrency;

    beforeEach(module('templates'));
    beforeEach(module('ngf-currency-converter'));

    beforeEach(inject(($rootScope, $compile, _ngfCurrency_, _$q_) => {
        ngfCurrency = _ngfCurrency_;
        $q = _$q_;
        scope = $rootScope.$new();

        element = angular.element('<ngf-currency-converter></ngf-currency-converter>');

        element = $compile(element)(scope);
        $rootScope.$digest();

        isolatedScope = element.isolateScope();
    }));

    it('should have isolated scope defined', () => {
        expect(isolatedScope).toBeDefined();
    });

    it('should execute ngfCurrency with correct parameters', () => {
        const resolveObj = {
            from: 'PLN',
            to: 'USD',
            to_amount: 200
        };

        isolatedScope.currency = {
            from: 'PLN',
            to: 'USD',
            amount: 100
        };

        spyOn(ngfCurrency, 'convert').and.callFake(() => {
            const deferred = $q.defer();
            deferred.resolve(resolveObj)
            return deferred.promise;
        });

        isolatedScope.calculateCurrency();
        scope.$digest();

        expect(ngfCurrency.convert).toHaveBeenCalledWith('PLN', 'USD', 100);
        expect(isolatedScope.converted).toEqual(resolveObj);
    });
});