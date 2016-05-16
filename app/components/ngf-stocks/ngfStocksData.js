'use strict';
angular.module('ngf-stocks')
    .factory('ngfStocksData', ($http, $q) => {
        const queryStart = 'select * from yahoo.finance.historicaldata where';

        return {
            getPeriodData,
            getTodayPrices
        };

        function getPeriodData(stockSymbols, startDate, endDate) {
            const deferred = $q.defer();
            const querySymbol = `symbol in (${stockSymbols})`;
            const queryStartDate = `startDate = "${startDate}"`;
            const queryEndDate = `endDate = "${endDate}"`;
            const query = `${queryStart} ${querySymbol} and ${queryStartDate} and ${queryEndDate}`;
            const url = getUrl(query);

            $http.jsonp(url).success((json) => {
                if (json.query.results) {
                    deferred.resolve(json.query.results.quote);
                } else {
                    deferred.reject();
                }
            }).error((error) => {
                console.error(JSON.stringify(error));
            });
            return deferred.promise;
        }

        function getTodayPrices(symbols) {
            const lastWorkingDay = getLastWorkingDay();
            return getPeriodData(formatQuerySymbols(symbols), lastWorkingDay, lastWorkingDay);
        }

        function fixedEncodeURIComponent(str) {
            return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, '%2A')
                .replace(/"/g, '%22');
        }

        function getLastWorkingDay() {
            // some dirty solution just to avoid weekends
            let subtractDays = 1;
            if (moment().isoWeekday() === 7) {
                subtractDays = 2;
            } else if (moment().isoWeekday() === 1) {
                subtractDays = 3;
            }

            return moment().subtract(subtractDays, 'day').format('YYYY-MM-DD');
        }

        function formatQuerySymbols(symbolsArray) {
            // eslint-disable-next-line quotes
            return `'${symbolsArray.join("','")}'`;
        }

        function getUrl(query) {
            const format = '&format=json&env=store%3A%2F%2Fdatatables.org%2F' +
                'alltableswithkeys&callback=JSON_CALLBACK';

            return `http://query.yahooapis.com/v1/public/yql?q=${fixedEncodeURIComponent(query)}${format}`;
        }
    });