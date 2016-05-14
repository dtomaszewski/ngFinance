'use strict';
angular.module('main-page')
    .config(($stateProvider) => {
        $stateProvider.state('map', {
            url: '/main',
            templateUrl: 'pages/main-page/main-page.tmpl.html',
            controller: 'MainPageCtrl',
            controllerAs: 'mainPageCtrl'
        });
    });