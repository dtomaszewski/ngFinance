fdescribe('Filter : ngfDataTableFilter', () => {
    let $filter;
    beforeEach(module('ngf-data-table'));

    beforeEach(inject((_$filter_) => {
        $filter = _$filter_;
    }));

    it('should be defined', () => {
        expect($filter('conditionalCurrency')).toBeDefined();
    });

    it('should apply currency filter according to flag', function () {
        expect($filter('conditionalCurrency')(10, false)).toEqual(10);
        expect($filter('conditionalCurrency')(10, true)).toEqual('$10.00');
    });
});