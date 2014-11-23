/**
 * Resource module of the application
 *
 * This module of the cosmomanager wraps the $resource in a service for the api.
 */
(function (app) {

  'use strict';

  app.factory('MockOrder', function () {

    var mockResource = function () {
      this.data = {"uuid": "6c152929d6dd419d92af620faceda402", "class_name": "order", "order_type": "Discovery", "user": {"uuid": "37988394d0da47d9952f201ffacaca3a", "class_name": "user", "first_name": "F\u00e9lix", "last_name": "Le Chevallier", "email": "felixvinif@vinify.co", "phone": "0683620433", "token": "74128054aa5e08ad79478cb0ceaee5ca94999e43", "status": 2.5}, "status": 1, "order_id": "VD1499", "delivery_address": "ec0d3e555f924e1dae5ece91c39ff9cf", "billing_address": "ec0d3e555f924e1dae5ece91c39ff9cf", "delivery_mode": "Colissimo", "coupon": null, "referral_coupon": null, "refills": [], "quantity": 1, "num_bottles": 3, "amount": 39, "delivery_cost": 11.9, "final_price": 50.9, "date_created": "2014-11-18T15:08:37.536Z", "date_payed": null, "date_delivered": null};
    };

    mockResource.testCoupon = function (coupon, success, failure) {
      if (success && angular.isFunction(success) && coupon.coupon === 1) {
        success({ coupon_type: 'Referral' });
      } else if (failure && angular.isFunction(failure) && coupon.coupon === 2) {
        failure('This code is not valid');
      } else {
        throw 'Resource.query must be passed a callback';
      }
    };

    mockResource.update = function (uuid, deliveryCost, deliveryMode, success, failure) {
      if (success && angular.isFunction(success) && uuid === 1) {
        success(mockResource.data);
      } else if (failure && angular.isFunction(failure) && uuid === 2) {
        failure();
      } else {
        throw 'Resource.query must be passed a callback';
      }
    };

    return mockResource;

  });

  app.factory('MockCurrentClient', function () {

    return {
      currentClient: {
        order : {"uuid": "6c152929d6dd419d92af620faceda402", "class_name": "order", "order_type": "Discovery", "user": {"uuid": "37988394d0da47d9952f201ffacaca3a", "class_name": "user", "first_name": "F\u00e9lix", "last_name": "Le Chevallier", "email": "felixvinif@vinify.co", "phone": "0683620433", "token": "74128054aa5e08ad79478cb0ceaee5ca94999e43", "status": 2.5}, "status": 1, "order_id": "VD1499", "delivery_address": "ec0d3e555f924e1dae5ece91c39ff9cf", "billing_address": "ec0d3e555f924e1dae5ece91c39ff9cf", "delivery_mode": "Colissimo", "coupon": null, "referral_coupon": null, "refills": [], "quantity": 1, "num_bottles": 3, "amount": 39, "delivery_cost": 11.9, "final_price": 50.9, "date_created": "2014-11-18T15:08:37.536Z", "date_payed": null, "date_delivered": null}
      }
    };

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