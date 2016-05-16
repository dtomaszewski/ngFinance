'use strict';
angular.module('ngf-currency-converter', ['currency'])
    .directive('ngfCurrencyConverter', (Currency) => {
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
                Currency.convert(scope.currency.from, scope.currency.to, scope.currency.amount)
                    .then((result) => {
                        console.log(result);
                        scope.converted = result;
                    });
            };
        }

        return directive;
    });