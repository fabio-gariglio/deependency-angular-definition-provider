'use strict';

const AngularModuleWrapper = require('./AngularModuleWrapper');

module.exports = function AngularApplicationWrapper(serviceDefinition) {

  this.module = function () {

    return new AngularModuleWrapper(serviceDefinition);

  };

}
