'use strict';
class MainPageCtrl {
    constructor($timeout, Stocks, StocksData) {
        const vm = this;

        vm.fieldData = [
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
                columnName: 'Today price',
                fieldName: 'Close',
                dataField: true
            }
        ];

        Stocks.getAllForUser().then((result) => {
            vm.allStocks = result;
            StocksData.getTodayPrices(_.map(result, 'symbol')).then((priceData) => {
                Stocks.assignData(vm.allStocks, priceData);
            });
        });

        vm.addStock = function () {
            Stocks.addModalOpen();
        };
    }
}

angular.module('main-page').controller('MainPageCtrl', MainPageCtrl);