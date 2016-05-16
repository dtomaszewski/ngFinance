'use strict';
class ngFinanceAppCtrl {
    constructor() {
        const vm = this;

        vm.sidebarLinks = [
            {
                sref: 'main',
                title: 'Stocks page'
            },
            {
                sref: 'currency',
                title: 'Currency page'
            }
        ];
    }
}

angular.module('ng-finance-app').controller('ngFinanceAppCtrl', ngFinanceAppCtrl);