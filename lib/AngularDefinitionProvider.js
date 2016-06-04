'use strict';

const AngularApplicationWrapper = require('./AngularApplicationWrapper');

module.exports = function AngularDefinitionProvider() {

  this.getServiceDefinition = function (registrationRequest) {

    var serviceDefinition = {};

    global.angular = new AngularApplicationWrapper(serviceDefinition);

    registrationRequest.angularjs();

    global.angular = undefined;

    return serviceDefinition;

  };

};
