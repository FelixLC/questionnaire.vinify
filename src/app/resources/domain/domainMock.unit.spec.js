/**
 * Email resource module of the application
 */
(function (app) {

  'use strict';

  app.factory('DomainMockResource', function (MockModelResource) {

    var mockData = [];

    return new MockModelResource('domain', mockData);

  });

}(angular.module('vinibar.mockresources.domain', [
  'vinibar.mockmodelresource'
])));