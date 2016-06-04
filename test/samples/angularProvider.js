// https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

myApp.provider('angularProvider', function angularProvider() {

  this.$get = function angularProviderFactory(apiToken) {
    return {
      toString: function() {
        return 'i-am-an-angular-provider';
      }
    }
  };

});
