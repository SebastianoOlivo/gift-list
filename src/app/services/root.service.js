(function() {
    'use strict';

    function rootService($http, $q) {
        var service = {
            getData: getData
        };
        return service;

        function getData(action) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: action
            }).the(
                function(data) {
                    deferred.resolve(data);
                },
                function(data) {
                    deferred.reject(data);
                }
                );

            return deferred.promise;
        }
    }

    angular
        .module('giftlist')
        .factory('rootService', rootService);

    rootService.$inject = ['$http', '$q'];

})();