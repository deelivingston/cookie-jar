'use strict';

var cookieJarApp = angular.module('cookieJarApp',  [
        'ngRoute',
        'appControllers'
    ]);

cookieJarApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/board', {
                templateUrl: 'board/board.html',
                controller: 'BoardCtrl'
            }).
            when('/jarapp', {
                templateUrl: 'jarapp/jarapp.html',
                controller: 'CookieJarCtrl'
            }).
            otherwise({
                redirectTo: '/board'
            });
    }]);