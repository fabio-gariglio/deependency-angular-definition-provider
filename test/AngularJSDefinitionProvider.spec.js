'use strict';

const should = require('should');

var AngularDefinitionProvider = require('../lib/AngularDefinitionProvider');

describe('Describing [AngularDefinitionProvider]', () => {

  context('calling getServiceDefinition(serviceRegistration)', () => {

    context('by providing an AngularJS value defined externally', () => {

      var serviceRegistration = {
        angularjs: () => require('./samples/angularValue'),
      };

      describe('the serviceDefinition', () => {

        var serviceDefinition = null;

        before(() => {

          // Act
          var definitionProvider = new AngularDefinitionProvider();
          serviceDefinition = definitionProvider.getServiceDefinition(serviceRegistration);

        });

        it('should not be null or undefined', () => {

          should(serviceDefinition).be.not.undefined();
          should(serviceDefinition).be.not.null();

        });

        it('should not be named as angular value is named', () => {

          serviceDefinition.names.should.be.Array();
          serviceDefinition.names.should.have.length(1);
          serviceDefinition.names.should.match(['angularValue']);

        });

        it('should have a factory method', () => {

          should(serviceDefinition.factoryMethod).be.Function();

        });

        it('should allow to get the angular value registered', () => {

          var instance = serviceDefinition.factoryMethod();
          should(instance).be.equal('i-am-an-angular-value');

        });

      });

    });

    context('by providing an AngularJS constant defined externally', () => {

      var serviceRegistration = {
        angularjs: () => require('./samples/angularConstant'),
      };

      describe('the serviceDefinition', () => {

        var serviceDefinition = null;

        before(() => {

          // Act
          var definitionProvider = new AngularDefinitionProvider();
          serviceDefinition = definitionProvider.getServiceDefinition(serviceRegistration);

        });

        it('should not be null or undefined', () => {

          should(serviceDefinition).be.not.undefined();
          should(serviceDefinition).be.not.null();

        });

        it('should not be named as angular constant is named', () => {

          serviceDefinition.names.should.be.Array();
          serviceDefinition.names.should.have.length(1);
          serviceDefinition.names.should.match(['angularConstant']);

        });

        it('should have a factory method', () => {

          should(serviceDefinition.factoryMethod).be.Function();

        });

        it('should allow to get the angular constant registered', () => {

          var instance = serviceDefinition.factoryMethod();
          should(instance).be.equal('i-am-an-angular-constant');

        });

      });

    });

  });

});
