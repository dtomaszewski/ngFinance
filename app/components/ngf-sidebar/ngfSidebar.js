'use strict';
angular.module('ngf-sidebar', [])
    .directive('ngfSidebar', () => {
        const directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/ngf-sidebar/ngf-sidebar.tmpl.html',
            scope: {}
        };

        return directive;
    });