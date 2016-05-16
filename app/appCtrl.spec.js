describe('Controller : ngFinanceAppCtrl', () => {
    let ngFinanceAppCtrl;

    beforeEach(() => {
        module('ng-finance-app');
    });

    beforeEach(inject(($controller) => {
        ngFinanceAppCtrl = $controller('ngFinanceAppCtrl');
    }));

    it('should be defined', () => {
        expect(ngFinanceAppCtrl).toBeDefined();
    });

    it('should have sidebar links defined', () => {
        const sidebarLinks = [
            {
                sref: 'main',
                title: 'Stocks page'
            },
            {
                sref: 'currency',
                title: 'Currency page'
            }
        ];

        expect(ngFinanceAppCtrl.sidebarLinks).toEqual(sidebarLinks);
    });
});