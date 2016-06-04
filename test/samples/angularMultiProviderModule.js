// https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

myApp.service('angularService', function angularService() {
  this.toString = function () {
    return 'i-am-an-angular-service'
  }
});

myApp.factory('angularFactory', function angularFactory() {
  return 'i-am-an-angular-factory';
});

myApp.value('angularValue', 'i-am-an-angular-value');
