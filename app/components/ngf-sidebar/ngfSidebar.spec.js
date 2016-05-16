describe('Directive : ngfSidebar', () => {
    let scope;
    let element;

    beforeEach(module('templates'));
    beforeEach(module('ngf-sidebar'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        scope.links = [
            {
                sref: 'main',
                title: 'Stocks page'
            },
            {
                sref: 'currency',
                title: 'Currency page'
            }
        ];

        element = angular.element('<ngf-sidebar links="links"></ngf-sidebar>');

        element = $compile(element)(scope);
        $rootScope.$digest();
    }));

    it('should have proper values in isolated scope', () => {
        const isolatedScope = element.isolateScope();

        expect(isolatedScope.links).toEqual(scope.links);
    });

    it('should have listed all passed links in template', () => {
        const sections = element.find('section');
        expect(sections.length).toBe(2);

        expect(sections.eq(0).find('md-button').attr('ui-sref')).toBe('main');
        expect(sections.eq(0).find('md-button').text()).toBe('Stocks page');
        expect(sections.eq(1).find('md-button').attr('ui-sref')).toBe('currency');
        expect(sections.eq(1).find('md-button').text()).toBe('Currency page');
    });
});