'use strict';
class ngfAddStockCtrl {
    constructor($mdDialog, ngfStocks) {
        const vm = this;
        vm.dialog = $mdDialog;
        vm.stockService = ngfStocks;
        vm.stock = {};
    }

    addStock(stock) {
        this.stockService.add(stock).then(() => this.dialog.hide());
    }
}

angular.module('ngf-stocks').controller('ngfAddStockCtrl', ngfAddStockCtrl);