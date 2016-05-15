'use strict';
angular.module('stocks-data', [])
    .factory('StocksData', ($http, $q) => {
        const queryStart = 'select * from yahoo.finance.historicaldata where';

        // TODO move to separate service
        function fixedEncodeURIComponent(str) {
            return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, '%2A')
                .replace(/"/g, '%22');
        }

        function getPeriodData(stockSymbols, startDate, endDate) {
            const deferred = $q.defer();
            const querySymbol = `symbol in (${stockSymbols})`;
            const queryStartDate = `startDate = "${startDate}"`;
            const queryEndDate = `endDate = "${endDate}"`;
            const query = `${queryStart} ${querySymbol} and ${queryStartDate} and ${queryEndDate}`;
            const url = getUrl(query);

            $http.jsonp(url).success((json) => {
                console.log('json.query.results ', json);
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
            return $q.when(
                getPeriodData(formatQuerySymbols(symbols), lastWorkingDay, lastWorkingDay)
            );
        }

        // TODO move to separate service.
        function getLastWorkingDay() {
            // some dirty solution just to avoid weekends
            let subtractDays = 0;
            if (moment().isoWeekday() === 7) {
                subtractDays = 2;
            } else if (moment().isoWeekday() === 6) {
                subtractDays = 1;
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

        return {
            getPeriodData,
            getTodayPrices
        };
    });