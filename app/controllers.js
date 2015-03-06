'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('BoardCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.device = {
            "product_name": "Ayla EVB",
            "model": "AY001MTC1",
            "dsn": "AC000W000017427",
            "oem_model": "ledevb",
            "template_id": 532,
            "mac": "784b87911660",
            "lan_ip": "172.20.1.114",
            "connected_at": "2015-02-26T14:03:48Z",
            "key": 10913,
            "lan_enabled": true,
            "has_properties": true,
            "product_class": "demo",
            "connection_status": "Offline",
            "lat": "39.7392",
            "lng": "-104.985",
            "device_type": "Wifi"
        };
    }]);

appControllers.controller('CookieJarCtrl', ['$scope',
    function($scope) {

    }]);