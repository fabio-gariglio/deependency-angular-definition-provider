// https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

function MyService() {

  this.toString = function () {
    return 'i-am-an-angular-service'
  }

}

myApp.service('angularService', MyService);
