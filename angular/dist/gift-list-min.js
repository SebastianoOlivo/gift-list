angular.module('giftlist', ['ui.router']);

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


(function() {
    'use strict';

    function giftListService($q, $http) {
        var service = {
            getGiftLists: getGiftLists,
            getItemList: getItemList
        };

        return service;


        function getGiftLists() {

            var deferred = $q.defer();
            $http.get('src/db.json').then(
                function(data) {
                    deferred.resolve(data);
                },
                function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        }

        function getItemList(id) {
            var deferred = $q.defer();
            $http.get('src/db.json').then(
                function(data) {
                    deferred.resolve(data);
                },
                function(data) {
                    deferred.reject(data);
                });
            return deferred.promise;
        };
    }


    angular
        .module('giftlist')
        .factory('giftListService', giftListService);

    giftListService.$inject = ['$q', '$http'];
})();

(function() {
    'use strict';

    function GiftListController(giftListService) {
        var vm = this;
        vm.giftList = [];

        getGiftLists();

        function getGiftLists() {
            var request = giftListService.getGiftLists();
            request.then(function(data){
                vm.giftList = data.data;
            })

        }
    }
    angular
        .module('giftlist')
        .controller('GiftListController', GiftListController);

    GiftListController.$inject = ['giftListService'];
})();

(function() {
    'use strict';

    function ItemListController(giftListService, $scope, $stateParams) {
        var vm = this;
        vm.itemList = [];
        $scope.id = $stateParams.id;

        function getItemList(id) {

            var request = giftListService.getItemList();
            request.then(function(data) {

                angular.forEach(data.data, function(value, key) {
                    if (value.id === id) {
                        vm.itemList = value;
                        console.log( vm.itemList);

                    }
                })
            })
        }

        getItemList($scope.id);

    }
    angular
        .module('giftlist')
        .controller('ItemListController', ItemListController);

    ItemListController.$inject = ['giftListService', '$scope', '$stateParams'];
})();

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

// @codekit-prepend  "app.modules.js", "app.config.route.js", "services/gift-list.service.js", "controllers/gift-list.controller.js", "controllers/item-list.controller.js", "directives/gift-list.directive.js";

