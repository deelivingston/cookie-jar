'use strict';

angular.module('cookieJar.jarapp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jarapp', {
    templateUrl: 'jarapp/jarapp.html',
    controller: 'JarAppCtrl'
  });
}])

.controller('JarAppCtrl', [function() {

}]);