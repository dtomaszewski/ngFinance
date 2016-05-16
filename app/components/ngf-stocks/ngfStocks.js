'use strict';
angular.module('ngf-stocks', ['firebase', 'ngMaterial'])
    .factory('ngfStocks', ($firebaseArray, $firebaseObject, Firebase, $mdDialog, $q) => {
        const stocksRef = new Firebase('https://ngfinance.firebaseio.com/stocks');
        let userStockList;
        const STOCK_ADDED_EVENT = 'STOCK_ADDED';
        
        function getAllForUser() {
            const fbRef = stocksRef.orderByChild('count');
            userStockList = $firebaseArray(fbRef);
            return userStockList.$loaded();
        }

        function addModalOpen() {
            $mdDialog.show({
                clickOutsideToClose: true,
                controller: 'ngfAddStockCtrl',
                controllerAs: 'ngfAddStockCtrl',
                focusOnOpen: false,
                targetEvent: event,
                templateUrl: 'components/ngf-stocks/add/ngf-add-stock.tmpl.html'
            }).then(() => $mdDialog.hide());
        }

        function add(stock) {
            return $q.when(userStockList.$add(stock));
        }

        function remove(stock) {
            return $q.when(userStockList.$remove(stock));
        }

        function assignData(stocks, data) {
            _.map(stocks, (stock) => {
                // eslint-disable-next-line no-param-reassign
                stock.data = _.find(data, (item) => item.Symbol === stock.symbol);
            });
        }

        return {
            addModalOpen,
            add,
            assignData,
            getAllForUser,
            remove,
            STOCK_ADDED_EVENT
        };
    });