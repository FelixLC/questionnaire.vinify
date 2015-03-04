/**
 * Email resource module of the application
 */
(function (app) {

  'use strict';

  app.factory('WinemakerMockResource', function (MockModelResource) {

    var mockData = [];

    return new MockModelResource('winemaker', mockData);

  });

}(angular.module('vinibar.mockresources.winemaker', [
  'vinibar.mockmodelresource'
])));