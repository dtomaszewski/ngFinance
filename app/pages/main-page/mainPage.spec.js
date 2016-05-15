describe('Controller : MainPageController', () => {
    let mainPageCtrl;

    beforeEach(() => {
        module('ui.router');
        module('main-page');
    });

    beforeEach(inject(($controller) => {
        mainPageCtrl = $controller('MainPageCtrl');
    }));

    it('should be defined', () => {
        expect(mainPageCtrl).toBeDefined();
    });
});