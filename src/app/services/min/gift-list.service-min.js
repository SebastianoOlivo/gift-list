!function(){"use strict";function t(t,e){function n(){var n=t.defer();return e.get("src/db.json").then(function(t){n.resolve(t)},function(t){n.reject(t)}),n.promise}function r(n){var r=t.defer();return e.get("src/db.json").then(function(t){r.resolve(t)},function(t){r.reject(t)}),r.promise}var i={getGiftLists:n,getItemList:r};return i}angular.module("giftlist").factory("giftListService",t),t.$inject=["$q","$http"]}();