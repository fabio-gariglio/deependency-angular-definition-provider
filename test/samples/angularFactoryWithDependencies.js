// https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

myApp.factory('angularFactory', ['timestampProvider', function angularFactory(timestampProvider) {
  return timestampProvider.getTimestamp();
}]);
