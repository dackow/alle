(function () {
    "use strict";
    /*global angular, console*/
    /*jslint indent: 4*/

    var dataProvider = angular.module('DataProvider', []);

    dataProvider.factory('DataProvider', function () {
        var itemList = [{
                id: 0,
                name: 'Buty',
                price_to_sell: 120,
                price_to_buy: 80,
                link: 'http://allegro.pl',
                active: true
            },
            {
                id: 1,
                name: 'Kurtka',
                price_to_sell: 150,
                price_to_buy: 100,
                link: 'http://allegro.pl',
                active: false
                },
            {
                id: 2,
                name: 'Router',
                price_to_sell: 50,
                price_to_buy: 45,
                link: 'http://allegro.pl',
                active: true
                },
            {
                id: 3,
                name: 'Kubek',
                price_to_sell: 10,
                price_to_buy: 5,
                link: 'http://allegro.pl',
                active: true
                }];
        return {
            all: function () {
                return itemList;
            },
            sumSell: function () {
                var s = 0,
                    i = 0;
                for (i = 0; i < itemList.length; i = i + 1) {
                    if (itemList[i].active) {
                        s += (itemList[i].price_to_sell);
                    }
                }
                return s;
            },
            sumBuy: function () {
                var s = 0,
                    i = 0;

                for (i = 0; i < itemList.length; i = i + 1) {
                    if (itemList[i].active) {
                        s += (itemList[i].price_to_buy);
                    }
                }
                return s;
            }

        };
    });


}());