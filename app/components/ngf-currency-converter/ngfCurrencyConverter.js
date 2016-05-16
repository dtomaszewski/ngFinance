'use strict';
angular.module('ngf-currency-converter', [])
    .directive('ngfCurrencyConverter', (ngfCurrency) => {
        const directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/ngf-currency-converter/ngf-currency-converter.tmpl.html',
            scope: {},
            link
        };

        function link(scope) {

            scope.converted = {
                valid: true
            };

            scope.calculateCurrency = function () {
                console.log(scope.currency);
                ngfCurrency.convert(scope.currency.from, scope.currency.to, scope.currency.amount)
                    .then((result) => {
                        console.log(result);
                        scope.converted = result;
                    });
            };
        }

        return directive;
    });