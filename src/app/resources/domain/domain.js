/**
 * Domain resource module of the application
 */
(function (app) {

  'use strict';

  app.factory('DomainResource', function ($q, ModelResource) {

    var DomainResource = new ModelResource('domain');

    return DomainResource;
  });

}(angular.module('vinibar.resources.domain', [
  'vinibar.modelresource'
])));