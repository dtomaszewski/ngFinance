describe('Service : Stock', () => {
    let $q;
    let $mdDialog;
    let $rootScope;
    let ngfStocks;
    beforeEach(() => {
        module('ngf-stocks');
    });

    beforeEach(inject((_$q_, _$mdDialog_, _$rootScope_, _ngfStocks_) => {
        ngfStocks = _ngfStocks_;
        $q = _$q_;
        $mdDialog = _$mdDialog_;
        $rootScope = _$rootScope_;
    }));

    it('should have methods defined', () => {
        expect(ngfStocks.getAllForUser).toEqual(jasmine.any(Function));
        expect(ngfStocks.addModalOpen).toEqual(jasmine.any(Function));
        expect(ngfStocks.add).toEqual(jasmine.any(Function));
        expect(ngfStocks.assignData).toEqual(jasmine.any(Function));
        expect(ngfStocks.remove).toEqual(jasmine.any(Function));
        expect(ngfStocks.STOCK_ADDED_EVENT).toBe('STOCK_ADDED');
    });

    it('should open modal to create new stock', () => {
        const modalObject = {
            clickOutsideToClose: true,
            controller: 'ngfAddStockCtrl',
            controllerAs: 'ngfAddStockCtrl',
            focusOnOpen: false,
            targetEvent: event,
            templateUrl: 'components/ngf-stocks/add/ngf-add-stock.tmpl.html'
        };

        spyOn($mdDialog, 'show').and.callFake(() => {
            const deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
        });
        spyOn($mdDialog, 'hide');

        ngfStocks.addModalOpen();
        $rootScope.$digest();

        expect($mdDialog.show).toHaveBeenCalledWith(modalObject);
        expect($mdDialog.hide).toHaveBeenCalled();
    });

    it('should assign query data properly', () => {
        const stocks = [
            {
                symbol: 'AAPL',
                name: 'Apple'
            },
            {
                symbol: 'GOOG',
                name: 'Google'
            }
        ];
        const data = [
            {
                Symbol: 'AAPL',
                amount: 123
            },
            {
                Symbol: 'GOOG',
                amount: 321
            }
        ]

        ngfStocks.assignData(stocks, data);

        expect(stocks).toEqual([
            {
                symbol: 'AAPL',
                name: 'Apple',
                data: {
                    Symbol: 'AAPL',
                    amount: 123
                }
            },
            {
                symbol: 'GOOG',
                name: 'Google',
                data: {
                    Symbol: 'GOOG',
                    amount: 321
                }
            }
        ]);
    });
});