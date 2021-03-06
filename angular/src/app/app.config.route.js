(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                templateUrl: 'src/app/views/home.tpl.html',
                url: '/gift-list',
                controller:'GiftListController',
                controllerAs:'vm'
            }).state('create', {
                templateUrl: 'src/app/views/create-list.tpl.html',
                url: '/create-list'
            }).state('detail', {
                templateUrl: 'src/app/views/detail-list.tpl.html',
                url: '/detail/:id',
                controller:'ItemListController',
                controllerAs:'vm'
            });
    }
    angular.module('giftlist').config(config);
})();
