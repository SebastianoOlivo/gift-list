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