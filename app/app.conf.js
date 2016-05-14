'use strict';
angular.module('ngFinanceApp')
    .config(($urlRouterProvider) => {
        $urlRouterProvider.otherwise('/main');
    });