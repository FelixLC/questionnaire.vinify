(function () {
  'use strict';

  angular
      .module('receiverService', [])
      .factory('Receive', Receive);

  /* @ngInject */
  function Receive ($http, settings) {
      var service = {
          activate: activate,
          update: update,
          receive: receive,
          coupon: null
      };

      //  //////////////

      function activate (_code) {
        return $http.post(settings.apiEndPoint + '/orders/gift/activate/',  {
          code: _code
        }).then(function (response) {
          service.coupon = response.data;
          return response;
        });
      }
      function update () {
        if (service.coupon.uuid) {
          return $http.post(settings.apiEndPoint + '/orders/gift/update/',  {
            coupon_uuid: service.coupon.uuid
          });
        } else {
          return new Error('No coupon');
        }
      }
      function receive () {
        if (service.coupon.uuid) {
          return $http.post(settings.apiEndPoint + '/orders/gift/receive/',  {
            coupon_uuid: service.coupon.uuid
          });
        } else {
          return new Error('No coupon');
        }
      }

      return service;
    }
})();