'use strict';
angular.module('stocks', ['firebase', 'ngMaterial'])
    .factory('Stocks', ($firebaseArray, $firebaseObject, Firebase, $mdDialog, $q) => {
        const stocksRef = new Firebase('https://ngfinance.firebaseio.com/stocks');
        let userStockList;

        function getAllForUser() {
            const fbRef = stocksRef.orderByChild('count');
            userStockList = $firebaseArray(fbRef);
            return userStockList;
        }

        function addModalOpen() {
            $mdDialog.show({
                clickOutsideToClose: true,
                controller: 'AddStockCtrl',
                controllerAs: 'addStockCtrl',
                focusOnOpen: false,
                targetEvent: event,
                templateUrl: 'services/stockSvc/add/add-stock.tmpl.html'
            }).then(() => $mdDialog.hide());
        }

        function add(stock) {
            return $q.when(userStockList.$add(stock));
        }

        return {
            getAllForUser,
            addModalOpen,
            add
        };
    });