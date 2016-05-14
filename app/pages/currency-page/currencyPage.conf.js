'use strict';
angular.module('currency-page')
    .config(($stateProvider) => {
        $stateProvider.state('currency', {
            url: '/currency',
            templateUrl: 'pages/currency-page/currency-page.tmpl.html',
            controller: 'CurrencyPageCtrl',
            controllerAs: 'currencyPageCtrl'
        });
    });