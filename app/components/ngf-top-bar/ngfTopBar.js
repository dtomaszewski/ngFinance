'use strict';
angular.module('ngf-top-bar', [])
    .directive('ngfTopBar', () => {
        const directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/ngf-top-bar/ngf-top-bar.tmpl.html',
            scope: {
                title: '@'
            }
        };

        return directive;
    });