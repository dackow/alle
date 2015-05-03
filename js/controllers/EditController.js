(function () {
    "use strict";
    /*global angular, console*/
    /*jslint plusplus: true */
    var app = angular.module('Allegro');

    function EditController($scope, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.editedItem = {
            id: -1,
            name: 'not defined',
            price_to_sell: 0,
            price_to_buy: 0,
            link: 'not defined',
            active: true
        };

        var item = null,
            i = 0;

        for (i = 0; i < $scope.allItems.length; i = i + 1) {
            if ($scope.id === $scope.allItems[i].id) {
                item = $scope.allItems[i];
                break;
            }
        }

        if (item !== null) {
            $scope.editedItem.id = item.id;
            $scope.editedItem.name = item.name;
            $scope.editedItem.price_to_buy = item.price_to_buy;
            $scope.editedItem.price_to_sell = item.price_to_sell;
            $scope.editedItem.link = item.link;
        }


        $scope.editSubmit = function () {
            //do some validation
            //....
            var item = null,
                i = 0;

            for (i = 0; i < $scope.allItems.length; i = i + 1) {
                if ($scope.id === $scope.allItems[i].id) {
                    item = $scope.allItems[i];
                    break;
                }
            }

            if (item !== null) {
                item.id = $scope.editedItem.id;
                item.name = $scope.editedItem.name;
                item.price_to_buy = $scope.editedItem.price_to_buy;
                item.price_to_sell = $scope.editedItem.price_to_sell;
                item.link = $scope.editedItem.link;
            }

            $scope.go('/');
        };
    }

    app.controller('EditController', EditController);
    EditController.$inject = ['$scope', '$routeParams'];

}());