// https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

function MyService(timestampProvider) {

  this.toString = function () {
    return timestampProvider.getTimestamp();
  }

}

myApp.service('angularService', ['timestampProvider', MyService]);
