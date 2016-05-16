describe('Directive : ngfTopBar', () => {
    let scope;
    let element;

    beforeEach(module('templates'));
    beforeEach(module('ngf-top-bar'));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();

        scope.title = 'Top bar test title';

        element = angular.element('<ngf-top-bar title="{{ title }}"></ngf-top-bar>');

        element = $compile(element)(scope);
        $rootScope.$digest();
    }));

    it('should have proper values in isolated scope', () => {
        const isolatedScope = element.isolateScope();

        expect(isolatedScope.title).toEqual('Top bar test title');
    });

    it('should show title in template', () => {
        expect(element.find('h1').text()).toBe('Top bar test title');
    });
});