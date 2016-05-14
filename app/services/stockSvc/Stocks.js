'use strict';
angular.module('stocks', ['firebase'])
    .factory('Stocks', ($firebaseArray, $firebaseObject, Firebase, $mdDialog) => {
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
            }).then(() => console.log('item added'));
        }

        return {
            getAllForUser,
            addModalOpen
        };
    });