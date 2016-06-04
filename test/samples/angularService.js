// https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

myApp.service('angularService', function angularService() {
  this.toString = function () {
    return 'i-am-an-angular-service'
  }
});
