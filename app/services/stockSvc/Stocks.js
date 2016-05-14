'use strict';
angular.module('stocks', ['firebase'])
    .factory('Stocks', ($firebaseArray, $firebaseObject, Firebase) => {
        const stocksRef = new Firebase('https://ngfinance.firebaseio.com/stocks');
        let userStockList;

        function getAllForUser() {
            const fbRef = stocksRef.orderByChild('count');
            userStockList = $firebaseArray(fbRef);
            return userStockList;
        }

        return {
            getAllForUser
        };
    });