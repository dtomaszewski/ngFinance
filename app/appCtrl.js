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

angular.module('main-page').controller('ngFinanceAppCtrl', ngFinanceAppCtrl);