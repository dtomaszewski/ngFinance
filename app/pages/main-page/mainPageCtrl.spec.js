describe('Controller : MainPageController', () => {
    let $controller;
    let $q;
    let $rootScope;
    let mainPageCtrl;
    let ngfStocksData;
    let ngfStocks;

    const fieldData = [
        {
            columnName: 'Symbol',
            fieldName: 'symbol'
        },
        {
            columnName: 'Name',
            fieldName: 'name'
        },
        {
            columnName: 'Count',
            fieldName: 'count'
        },
        {
            columnName: 'Last open price',
            fieldName: 'Open',
            dataField: true,
            currency: true
        },
        {
            columnName: 'Last close price',
            fieldName: 'Close',
            dataField: true,
            currency: true
        }
    ];

    beforeEach(() => {
        module('ui.router');
        module('main-page');
    });

    beforeEach(inject((_$controller_, _$q_, _ngfStocksData_, _ngfStocks_, _$rootScope_) => {
        $controller = _$controller_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        mainPageCtrl = $controller('MainPageCtrl');
        ngfStocks = _ngfStocks_;
        ngfStocksData = _ngfStocksData_;
    }));

    it('should be defined', () => {
        expect(mainPageCtrl).toBeDefined();
    });

    it('should have field data', () => {
        expect(mainPageCtrl.fieldData).toEqual(fieldData);
    });

    it('should collect all stocks for user and take its details', () => {
        const deferred = $q.defer();
        spyOn(ngfStocks, 'getAllForUser').and.returnValue(deferred.promise);

        mainPageCtrl = $controller('MainPageCtrl');

        expect(ngfStocks.getAllForUser).toHaveBeenCalled();
    });

    it('should call proper method on addStock', () => {
        spyOn(ngfStocksData, 'getTodayPrices').and.callFake(() => {
            const deferred = $q.defer();
            deferred.resolve({
                test: 'test'
            });
            return deferred.promise;
        });

        spyOn(ngfStocks, 'addModalOpen').and.callFake(() => {
            const deferred = $q.defer();
            deferred.resolve({
                test: 'test'
            });
            return deferred.promise;
        });

        mainPageCtrl.addStock();

        expect(ngfStocks.addModalOpen).toHaveBeenCalled();
    });

    it('should call proper method on removeStock', () => {
        spyOn(ngfStocks, 'remove');

        mainPageCtrl.removeStock();

        expect(ngfStocks.remove).toHaveBeenCalled();
    });

    it('should call getTodayPrices method', () => {
        const resolveData = [{
            symbol: 'AAPL',
            name: 'Apple',
            price: 123
        }, {
            symbol: 'GOOG',
            name: 'Google',
            price: 222
        }];
        spyOn(ngfStocksData, 'getTodayPrices').and.callFake(() => {
            const deferred = $q.defer();
            deferred.resolve(resolveData);
            return deferred.promise;
        });

        spyOn(ngfStocks, 'assignData').and.callThrough();

        const stocks = [{
            symbol: 'AAPL',
            name: 'Apple'
        }, {
            symbol: 'GOOG',
            name: 'Google'
        }];

        mainPageCtrl.getStockData(stocks);

        expect(ngfStocksData.getTodayPrices).toHaveBeenCalledWith(['AAPL', 'GOOG']);
        $rootScope.$digest();
        expect(ngfStocks.assignData).toHaveBeenCalled();
    });
});