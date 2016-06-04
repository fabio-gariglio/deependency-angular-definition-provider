// https://docs.angularjs.org/guide/providers

var myApp = angular.module('myApp', []);

myApp.provider('angularProvider', function angularProvider() {

  this.$get = ["timestampProvider", function angularProviderFactory(timestampProvider) {
    return {
      toString: function() {
        return timestampProvider.getTimestamp();
      }
    }
  }];

});
