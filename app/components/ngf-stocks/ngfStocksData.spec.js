describe('Service : ngfStocksData', () => {
    let ngfStocksData;
    let $httpBackend;

    beforeEach(module('ngf-stocks'));

    beforeEach(inject((_ngfStocksData_, _$httpBackend_) => {
        ngfStocksData = _ngfStocksData_;
        $httpBackend = _$httpBackend_;
    }));

    it('should be call proper url on get period data', () => {
        const symbols = "'GOOG','APPL','YHOO'";
        const date = '2016-01-01';
        const getUrl = 'http://query.yahooapis.com/v1/public/yql?q=select%20%2A%20from%20yahoo.finance.historicaldata%20where%20symbol%20in%20%28%27GOOG%27%2C%27APPL%27%2C%27YHOO%27%29%20and%20startDate%20%3D%20%222016-01-01%22%20and%20endDate%20%3D%20%222016-01-01%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';

        $httpBackend.expect('JSONP', getUrl).respond({
            query: {}
        });

        ngfStocksData.getPeriodData(symbols, date, date);

        expect($httpBackend.flush).not.toThrow();
    });

    it('should call getPeriodData with correct parameters for todays date', () => {
        const getUrl = 'http://query.yahooapis.com/v1/public/yql?q=select%20%2A%20from%20yahoo.finance.historicaldata%20where%20symbol%20in%20%28%27GOOG%27%2C%27APPL%27%2C%27YHOO%27%29%20and%20startDate%20%3D%20%222015-01-09%22%20and%20endDate%20%3D%20%222015-01-09%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
        const today = moment('2015-01-10').toDate();
        jasmine.clock().mockDate(today);

        ngfStocksData.getTodayPrices(['GOOG', 'APPL', 'YHOO']);

        $httpBackend.expect('JSONP', getUrl).respond({
            query: {}
        });

        expect($httpBackend.flush).not.toThrow();
    });
});