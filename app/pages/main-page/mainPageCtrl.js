'use strict';
class MainPageCtrl {
    constructor(Stocks, StocksData) {
        const vm = this;

        vm.stocks = Stocks;
        vm.stocksData = StocksData;

        vm.getFieldData();
        vm.getStocks();

        vm.addStock = function () {
            Stocks.addModalOpen();
        };

        vm.removeStock = function(stock) {
            Stocks.remove(stock);
        };
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
                columnName: 'Today price',
                fieldName: 'Close',
                dataField: true
            }
        ];
    }

    getStocks() {
        this.stocks.getAllForUser().then((result) => {
            this.allStocks = result;
            this.stocksData.getTodayPrices(_.map(result, 'symbol')).then((priceData) => {
                this.stocks.assignData(this.allStocks, priceData);
            });
        });
    }
}

angular.module('main-page').controller('MainPageCtrl', MainPageCtrl);