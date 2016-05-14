'use strict';
class MainPageCtrl {
    constructor(Stocks) {
        const vm = this;

        vm.columnNames = ['Symbol', 'Name', 'Count'];
        vm.allStocks = Stocks.getAllForUser();

        vm.addStock = function () {
            Stocks.addModalOpen();
        };
    }
}

angular.module('main-page').controller('MainPageCtrl', MainPageCtrl);