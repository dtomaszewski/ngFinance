'use strict';

angular.module('currency', []).factory('Currency', ($http, $q, $httpParamSerializer) => {
    const url = 'https://community-neutrino-currency-conversion.p.mashape.com/convert';
    const headers = {
        // 'X-Mashape-Key': '40sdHLz5OdmshKi9i7UcEGu2vIyip1on4mbjsn74nDQ3BQgo3S',
        'X-Mashape-Key': 'pJbeIVwdEtEzDt8xrDVy2dPF8MTFFuT0KiZ97bgGyaIK6I56',
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    function convert(fromCurrency, toCurrency, amount) {
        return $q.when($http({
            method: 'POST',
            url,
            headers,
            data: $httpParamSerializer({
                'from-type': fromCurrency,
                'from-value': amount,
                'to-type': toCurrency
            })
        })).then((result) => result.data);
    }

    return {
        convert
    };
});