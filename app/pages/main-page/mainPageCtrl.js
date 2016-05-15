'use strict';
class MainPageCtrl {
    constructor($timeout, Stocks, StocksData) {
        const vm = this;

        vm.columnNames = ['Symbol', 'Name', 'Count', 'Today price'];

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