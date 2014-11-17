(function() {
    'use strict';

    angular
        .module('orderService', [])
        .factory('Order', Order)
        .constant('API_ENDPOINT','http://127.0.0.1:8000/api');

    /* @ngInject */
    function Order($http, API_ENDPOINT) {
        var service = {
            create: create,
            update: update
        };
        return service;

        ////////////////

        function create(type, coupon) {
          var url = (type === 'Vinibar') ? API_ENDPOINT +'/orders/vinibarorder/' : API_ENDPOINT +'/orders/discovery/create/';
          return $http.post( url,  {'coupon' : coupon} );
        }
        function update(uuid, delivery_cost, delivery_mode) {
          return $http.post( API_ENDPOINT + '/orders/updateorder/',  {
            'order_uuid': uuid,
            'delivery_cost': delivery_cost,
            'delivery_mode': delivery_mode
          });
        }
    }
})();