(function () {
    "use strict";
    /*global angular, console*/
    /*jslint plusplus: true */




    function MainController($scope, $location) {
        //    $scope.allItems = DataProvider.all();
        //
        //    $scope.sumSell = DataProvider.sumSell();
        //    $scope.sumBuy = DataProvider.sumBuy();

        $scope.go = function (path) {
            console.log('Path:' + path);
            $location.path(path);
        };

        $scope.closeEntry = function () {
            $scope.go('/');
        };


        //    var promise = $http({
        //        method: 'GET',
        //        url: 'http://img17.allegroimg.pl/photos/oryginal/52/64/82/99/5264829923'
        //    });


    }

    var app = angular.module('Allegro');
    app.controller('MainController', MainController);
    MainController.$inject = ['$scope', '$location', '$http', 'ModelService'];


}());