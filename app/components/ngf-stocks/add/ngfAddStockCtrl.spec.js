describe('Controller : ngfAddStockCtrl', () => {
    let $q;
    let $rootScope;
    let addStockCtrl;
    let ngfStocks;

    beforeEach(() => {
        module('ngf-stocks');
    });

    beforeEach(inject(($controller, _ngfStocks_, _$q_, _$rootScope_) => {
        $q = _$q_;
        $rootScope = _$rootScope_;
        ngfStocks = _ngfStocks_;
        addStockCtrl = $controller('ngfAddStockCtrl');
    }));

    it('should be defined', () => {
        expect(addStockCtrl).toBeDefined();
    });

    it('should have local properties', () => {
        expect(addStockCtrl.dialog).toBeDefined();
        expect(addStockCtrl.stockService).toBeDefined();
        expect(addStockCtrl.stock).toEqual({});
    });

    it('should perform action on addStock', () => {
        spyOn(ngfStocks, 'add').and.callFake(() => {
            const deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
        });
        spyOn(addStockCtrl.dialog, 'hide').and.callThrough();

        const stock = {
            count: 1,
            name: 'Apple',
            symbol: 'APPL'
        };

        addStockCtrl.addStock(stock);
        $rootScope.$apply();

        expect(ngfStocks.add).toHaveBeenCalledWith(stock);
        expect(addStockCtrl.dialog.hide).toHaveBeenCalled();
    });
});