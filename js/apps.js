(function () {
    "use strict";
    var app = angular.module('Allegro', ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        //    $locationProvider.html5Mode(true);
        $routeProvider.when("/edit/:id", {
            templateUrl: "partials/edit.html",
            controller: 'EditController',
            controllerAs: 'ctrl'
        });
        $routeProvider.when("/del/:id", {
            templateUrl: "partials/delete.html",
            controller: 'DeleteController',
            controllerAs: 'ctrl'
        });
        $routeProvider.when("/add", {
            templateUrl: "partials/add.html",
            controller: 'AddController',
            controllerAs: 'ctrl'
        });
        $routeProvider.otherwise({
            redirectTo: "/"
        });
    });
}());