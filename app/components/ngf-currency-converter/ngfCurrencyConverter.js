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
            // eslint-disable-next-line no-param-reassign
            scope.calculateCurrency = function () {
                ngfCurrency.convert(scope.currency.from, scope.currency.to, scope.currency.amount)
                    .then((result) => {
                        // eslint-disable-next-line no-param-reassign
                        scope.converted = result;
                    });
            };
        }

        return directive;
    });