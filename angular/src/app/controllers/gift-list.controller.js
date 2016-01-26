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