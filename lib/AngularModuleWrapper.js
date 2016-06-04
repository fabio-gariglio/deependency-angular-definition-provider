module.exports = function AngularModuleWrapper(serviceDefinition) {

  this.value = function (name, instance) {

    serviceDefinition.names = [name];
    serviceDefinition.factoryMethod = () => instance;

  };

  this.constant = function (name, instance) {

    serviceDefinition.names = [name];
    serviceDefinition.factoryMethod = () => instance;

  };

}
