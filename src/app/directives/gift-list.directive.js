(function() {
    'use strict';

    function giftList() {
        return {
            restrict: 'A',
            replace: 'true',
            // scope: {
            //     nom: '@',
            //     backgroundCollor: '@',
            //     background: '@'
            // },
            templateURL: 'src/app/directives/gift-list.template.html'
        };
    }

    angular
        .module('giftlist')
        .controller('giftList', giftList);

})();