'use strict';
class AddStockCtrl {
    constructor($mdDialog, Stocks) {
        const vm = this;
        vm.dialog = $mdDialog;
        vm.stockService = Stocks;
        vm.stock = {};
    }

    addStock(stock) {
        this.stockService.add(stock).then(() => this.dialog.hide());
    }
}

angular.module('ngf-stocks').controller('ngfAddStockCtrl', AddStockCtrl);