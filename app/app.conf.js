'use strict';
angular.module('ng-finance-app')
    .config(($urlRouterProvider) => {
        $urlRouterProvider.otherwise('/main');
    });