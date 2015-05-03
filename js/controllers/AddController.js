(function () {
    "use strict";
    /*global angular, console*/
    /*jslint indent: 4*/

    function AddController($scope) {
        $scope.newItem = {
            id: -1,
            name: null,
            price_to_sell: null,
            price_to_buy: null,
            link: null,
            active: true,
            payment_confirmed: false
        };

        $scope.validate = function () {
            if ($scope.newItem !== null && $scope.newItem !== undefined && $scope.newItem.name !== null && $scope.newItem.name.length > 0 && $scope.newItem.price_to_sell !== null && $scope.newItem.price_to_sell.length > 0 && $scope.newItem.price_to_buy !== null && $scope.newItem.price_to_buy.length > 0 && $scope.newItem.link !== null && $scope.newItem.link.length > 0) {
                return true;
            } else {
                return false;
            }
        };

        $scope.checkIfAlreadyExists = function () {
            var i;
            for (i = 0; i < $scope.allItems.length; i = i + 1) {
                if ($scope.id === $scope.allItems[i].id) {
                    return true;
                }
            }
            return false;
        };

        $scope.checkIfSame = function (elem1, elem2) {
            if (elem1.name === elem2.name && elem1.link === elem2.link) {
                return true;
            } else {
                return false;
            }
        };

        $scope.addSubmit = function () {
            console.log('add submit');
            $scope.allItems.push($scope.newItem);
            $scope.go('/');
        };

    }

    var app = angular.module('Allegro');
    app.controller('AddController', AddController);

    AddController.$inject = ['$scope'];

}());