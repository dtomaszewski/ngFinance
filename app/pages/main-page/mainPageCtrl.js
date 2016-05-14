'use strict';
class MainPageCtrl {
    constructor(Stocks) {
        const vm = this;

        vm.columnNames = ['Name', 'Count'];
        vm.allStocks = Stocks.getAllForUser();
    }
}

angular.module('main-page').controller('MainPageCtrl', MainPageCtrl);