// https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

myApp.factory('angularFactory', function angularFactory() {
  return 'i-am-an-angular-factory';
});
