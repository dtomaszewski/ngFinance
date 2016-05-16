'use strict';
angular.module('ngf-data-table', ['md.data.table'])
    .directive('ngfDataTable', () => {
        const directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/ngf-data-table/ngf-data-table.tmpl.html',
            scope: {
                addItem: '&',
                removeItem: '=',
                fieldData: '=',
                items: '=',
                title: '@'
            }
        };

        return directive;
    });