'use strict';
angular.module('currency-page')
    .config(($stateProvider) => {
        $stateProvider.state('map', {
            url: '/currency',
            templateUrl: 'pages/currency-page/currency-page.tmpl.html',
            controller: 'currencyPageCtrl',
            controllerAs: 'currencyPageCtrl'
        });
    });