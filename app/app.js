'use strict';

// Declare app level module which depends on views, and components
angular.module('cookieJar', [
  'ngRoute',
  'cookieJar.board',
  'cookieJar.jarapp',
  'cookieJar.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/board'});
}]);
