'use strict';
class MainPageCtrl {
    constructor($rootScope, ngfStocks, ngfStocksData) {
        const vm = this;
        vm.ngfStocksData = ngfStocksData;
        vm.ngfStocks = ngfStocks;
        vm.getFieldData();

        vm.addStock = function () {
            ngfStocks.addModalOpen();
        };

        vm.removeStock = function(stock) {
            ngfStocks.remove(stock);
        };

        ngfStocks.getAllForUser().then((result) => {
            vm.allStocks = result;
            vm.getStockData(result);

        });

        $rootScope.$on(ngfStocks.STOCK_ADDED_EVENT, () => {
            vm.getStockData(vm.allStocks);
        });
    }

    getFieldData() {
        this.fieldData = [
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
    }

    getStockData(stocks) {
        this.ngfStocksData.getTodayPrices(_.map(stocks, 'symbol')).then((priceData) => {
            this.ngfStocks.assignData(this.allStocks, priceData);
        });
    }
}

angular.module('main-page').controller('MainPageCtrl', MainPageCtrl);