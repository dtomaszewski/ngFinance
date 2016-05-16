'use strict';
class ngfAddStockCtrl {
    constructor($mdDialog, $rootScope, ngfStocks) {
        const vm = this;
        vm.ngfStocks = ngfStocks;
        vm.dialog = $mdDialog;
        vm.stockService = ngfStocks;
        vm.stock = {};
        vm.rootScope = $rootScope;
    }

    addStock(stock) {
        this.stockService.add(stock).then(() => {
            this.dialog.hide();
            this.rootScope.$broadcast(this.ngfStocks.STOCK_ADDED_EVENT);
        });
    }
}

angular.module('ngf-stocks').controller('ngfAddStockCtrl', ngfAddStockCtrl);