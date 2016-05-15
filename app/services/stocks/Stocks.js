'use strict';
angular.module('stocks', ['firebase', 'ngMaterial'])
    .factory('Stocks', ($firebaseArray, $firebaseObject, Firebase, $mdDialog, $q) => {
        const stocksRef = new Firebase('https://ngfinance.firebaseio.com/stocks');
        let userStockList;

        function getAllForUser() {
            const fbRef = stocksRef.orderByChild('count');
            userStockList = $firebaseArray(fbRef);
            return userStockList.$loaded();
        }

        function addModalOpen() {
            $mdDialog.show({
                clickOutsideToClose: true,
                controller: 'AddStockCtrl',
                controllerAs: 'addStockCtrl',
                focusOnOpen: false,
                targetEvent: event,
                templateUrl: 'services/stocks/add/add-stock.tmpl.html'
            }).then(() => $mdDialog.hide());
        }

        function add(stock) {
            return $q.when(userStockList.$add(stock));
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
            getAllForUser
        };
    });