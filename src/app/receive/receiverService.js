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
          updateReceiver: updateReceiver,
          coupon: null
      };

      //  //////////////

      function activate (_code) {
        return $http.post(settings.apiEndPoint + '/orders/gift/activate/',  {
          code: _code
        }).then(function (response) {
          service.coupon = response.data.coupon;
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
      function updateReceiver (firstName, lastName, email, password) {
        return $http.post(settings.apiEndPoint + '/users/updatereceiver/',  {
          coupon_code: service.coupon.code,
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password
        });
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