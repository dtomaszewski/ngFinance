fdescribe('Directive : ngfDataTable', () => {
    let scope;
    let element;

    beforeEach(module('templates'));
    beforeEach(module('ngMaterial'));
    beforeEach(module('md.data.table'));
    beforeEach(module('ngf-data-table'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        scope.items = [
            {
                count: 12,
                name: 'Google',
                symbol: 'GOOG',
                $id: '-KHkBef0TvNGxQm8fJKn'
            }, {
                count: 21,
                name: 'Yahoo',
                symbol: 'YHOO',
                $id: '-KHotWeKzN7xDfVbLBg9',
                data: {
                    Close: 333
                }
            }
        ];

        scope.fieldData = [
            {
                columnName: 'Symbol',
                fieldName: 'symbol'
            },
            {
                columnName: 'Name',
                fieldName: 'name'
            },
            {
                columnName: 'Count',
                fieldName: 'count'
            },
            {
                columnName: 'Today price',
                fieldName: 'Close',
                dataField: true
            }
        ];

        scope.addItem = function () {};
        scope.removeItem = function () {};

        element = angular.element('<ngf-data-table ' +
            'field-data="fieldData" items="items" ' +
            'title="Test title" add-item="addItem" remove-item="removeItem">' +
            '</ngf-data-table>');

        element = $compile(element)(scope);
        $rootScope.$digest();
    }));

    it('should have proper values in isolated scope', () => {
        const isolatedScope = element.isolateScope();

        expect(isolatedScope.fieldData).toEqual(scope.fieldData);
        expect(isolatedScope.items).toEqual(scope.items);
        expect(isolatedScope.title).toEqual('Test title');
        expect(isolatedScope.addItem).toEqual(jasmine.any(Function));
        expect(isolatedScope.removeItem).toEqual(jasmine.any(Function));
    });

    it('Should have title passed in attribute', () => {
        expect(element.find('h2').text()).toBe('Test title');
    });

    it('Should have correct column headers', () => {
        const headers = element.find('thead').find('th');
        expect(headers.length).toBe(4);
        expect(headers.eq(0).text().trim()).toBe('Symbol');
        expect(headers.eq(1).text().trim()).toBe('Name');
        expect(headers.eq(2).text().trim()).toBe('Count');
        expect(headers.eq(3).text().trim()).toBe('Today price');
    });

    it('Should have correct items data', () => {
        const itemRows = element.find('tbody').find('tr');

        expect(itemRows.length).toBe(2);
        expect(itemRows.eq(0).find('td').eq(0)
            .text()
            .trim()).toBe('GOOG');
        expect(itemRows.eq(0).find('td').eq(1)
            .text()
            .trim()).toBe('Google');
        expect(itemRows.eq(0).find('td').eq(2)
            .text()
            .trim()).toBe('12');
        expect(itemRows.eq(0).find('td').eq(3)
            .text()
            .trim()).toBe('');
    });

    it('should take correct values from data object', () => {
        const secondItemRow = element.find('tbody').find('tr').eq(1);

        expect(secondItemRow.find('td').eq(3)
            .text()
            .trim()).toBe('333');
    });
});