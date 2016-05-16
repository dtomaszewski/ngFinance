'use strict';
class MainPageCtrl {
    constructor(Stocks, StocksData) {
        const vm = this;

        vm.stocks = Stocks;
        vm.stocksData = StocksData;

        vm.getFieldData();

        vm.addStock = function () {
            Stocks.addModalOpen();
        };

        vm.removeStock = function(stock) {
            Stocks.remove(stock);
        };

        Stocks.getAllForUser().then((result) => {
            vm.allStocks = result;
            StocksData.getTodayPrices(_.map(result, 'symbol')).then((priceData) => {
                Stocks.assignData(vm.allStocks, priceData);
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