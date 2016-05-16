'use strict';

angular.module('ngf-currency-converter').factory('ngfCurrency', ($http, $q, $httpParamSerializer) => {
    const url = 'https://currencyconverter.p.mashape.com/';
    const headers = {
        'X-Mashape-Key': 'ixQZhwZE5HmshicU6MNZBMgjhtVgp1PCuzjjsncg1AXyWDQZeE',
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    function convert(fromCurrency, toCurrency, amount) {
        return $q.when($http({
            method: 'GET',
            url,
            headers,
            params: {
                from: fromCurrency,
                from_amount: amount,
                to: toCurrency
            }
        })).then((result) => result.data);
    }

    return {
        convert
    };
});