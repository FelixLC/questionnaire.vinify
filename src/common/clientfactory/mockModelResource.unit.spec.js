/**
 * Resource module of the application
 *
 * This module of the cosmomanager wraps the $resource in a service for the api.
 */
(function (app) {

  'use strict';

  app.factory('MockOrder', function () {

    var mockResource = function () {
      this.data = {};
    };

    mockResource.testCoupon = function (coupon, success, failure) {
      if (success && angular.isFunction(success) && coupon.coupon === 1) {
        success({coupon_type: 'Referral'});
      } else if (failure && angular.isFunction(failure) && coupon.coupon === 2) {
        failure('This code is not valid');
      } else {
        throw 'Resource.query must be passed a callback';
      }
    };

    return mockResource;

  });

  app.factory('MockClient', function () {

    var mockResource = function () {
      this.data = {};
    };

    mockResource.testCoupon = function (coupon, success, failure) {
      if (success && angular.isFunction(success) && coupon.coupon === 1) {
        success({coupon_type: 'Referral'});
      } else if (failure && angular.isFunction(failure) && coupon.coupon === 2) {
        failure('This code is not valid');
      } else {
        throw 'Resource.query must be passed a callback';
      }
    };

    return mockResource;

  });

  app.factory('MockToaster', function () {

    var mockResource = function () {
      this.data = {};
    };

    mockResource.pop = function (a, b, c) {
      console.log(b + c);
    };

    return mockResource;

  });

}(angular.module("vinibar.mockmodelresource", [
  ])));