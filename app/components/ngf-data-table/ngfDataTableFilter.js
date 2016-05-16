angular.module('ngf-data-table')
    .filter('conditionalCurrency', ($filter) => {
        return function(input, hasCurrency) {
            return hasCurrency ? $filter('currency')(input) : input;
        };
    });