/**
 * Email resource module of the application
 */
(function (app) {

  'use strict';

  app.factory('WineMockResource', function (MockModelResource) {

    var mockData = [];

    return new MockModelResource('wine', mockData);

  });

}(angular.module('vinibar.mockresources.wine', [
  'vinibar.mockmodelresource'
])));