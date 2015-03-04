/**
 * Domain resource module of the application
 */
(function (app) {

  'use strict';

  app.factory('WineResource', function ($q, ModelResource) {

    var WineResource = new ModelResource('wines');

    return WineResource;
  });

}(angular.module('vinibar.resources.wine', [
  'vinibar.modelresource'
])));