(function () {
  'use strict';

  angular
      .module('orderService', [ 'settings' ])
      .factory('Order', Order)
       ;

  /* @ngInject */
  function Order ($http, settings) {
    var service = {
        testCoupon: testCoupon,
        create: create,
        update: update
    };
    return service;

    // //////////////

    function testCoupon (coupon, success, failure) {
      $http.post(settings.apiEndPoint + '/orders/testcoupon/', coupon)
          .success(function (data, status, headers, config) {
            return success(data);
          })
          .error(function (data, status, headers, config) {
            return failure(data);
          });
    }
    function create (type, uuid, coupon, success, failure) {
      var url = (type === 'Vinibar') ? settings.apiEndPoint + '/orders/vinibarorder/' :
                                                                   settings.apiEndPoint + '/orders/discovery/create/';

      $http.post(url,  { coupon: coupon, order_uuid: uuid })
            .success(function (data, status, headers, config) {
              return success(data);
            })
            .error(function (data, status, headers, config) {
              return failure(data);
            });
    }
    function update (uuid, deliveryCost, deliveryMode, success, failure) {
      $http.post(settings.apiEndPoint + '/orders/updateorder/',  {
        order_uuid: uuid,
        delivery_cost: deliveryCost,
        delivery_mode: deliveryMode
      })
          .success(function (data, status, headers, config) {
            return success(data);
          })
          .error(function (data, status, headers, config) {
            return failure(data);
          });
    }
  }
})();