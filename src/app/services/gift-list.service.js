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