'use strict';
class MainPageCtrl {
    constructor(ngfStocks, ngfStocksData) {
        const vm = this;

        vm.getFieldData();

        vm.addStock = function () {
            ngfStocks.addModalOpen();
        };

        vm.removeStock = function(stock) {
            ngfStocks.remove(stock);
        };

        ngfStocks.getAllForUser().then((result) => {
            vm.allStocks = result;
            ngfStocksData.getTodayPrices(_.map(result, 'symbol')).then((priceData) => {
                ngfStocks.assignData(vm.allStocks, priceData);
            });
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
}

angular.module('main-page').controller('MainPageCtrl', MainPageCtrl);