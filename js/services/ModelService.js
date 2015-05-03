(function () {
    "use strict";
    /*global angular, console*/
    
    var app = angular.module('ModelService', ['DataProvider']);
    app.value('DataService', {
        allRecords: "1"
    });
    
}());