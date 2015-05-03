(function () {

    "use strict";
    /*global angular, console*/
    /*jslint plusplus: true */


    function DeleteController($scope, $routeParams) {
        $scope.id = $routeParams.id;
        console.log('delete controller');

        $scope.editedItem = null;

        var item = null,
            i = 0;

        for (i = 0; i < $scope.allItems.length; i++) {
            if ($scope.id === $scope.allItems[i].id) {
                $scope.editedItem = $scope.allItems[i];
                break;
            }
        }

        $scope.delItem = function (item) {
            console.log(item);
            $scope.allItems.splice($scope.allItems.indexOf(item), 1);
            $scope.go('/');
        };

    }

    var app = angular.module('Allegro');
    app.controller('DeleteController', DeleteController);

    DeleteController.$inject = ['$scope', '$routeParams'];

}());