/**
 * Domain resource module of the application
 */
(function (app) {

  'use strict';

  app.factory('WinemakerResource', function ($q, ModelResource) {

    var WinemakerResource = new ModelResource('winemaker');

    return WinemakerResource;
  });

}(angular.module('vinibar.resources.winemaker', [
  'vinibar.modelresource'
])));