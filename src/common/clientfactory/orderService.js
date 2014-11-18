(function() {
    'use strict';

    angular
        .module('orderService', [])
        .factory('Order', Order)
        .constant('API_ENDPOINT','http://127.0.0.1:8000/api');

    /* @ngInject */
    function Order($http, API_ENDPOINT) {
        var service = {
            testCoupon: testCoupon,
            create: create,
            update: update
        };
        return service;

        ////////////////

        function testCoupon ( coupon, success, failure ) {
            $http.post(API_ENDPOINT +'/orders/testcoupon/', coupon)
                .success(function(data, status, headers, config){
                    return success(data);
                })
                .error(function(data, status, headers, config){
                    return failure(data);
                });
        }
        function create( type, coupon, success, failure ) {
          var url = ( type === 'Vinibar' ) ? API_ENDPOINT +'/orders/vinibarorder/' : API_ENDPOINT +'/orders/discovery/create/';
          $http.post(  url,  {'coupon' : coupon} )
                .success(function(data, status, headers, config){
                    return success(data);
                })
                .error(function(data, status, headers, config){
                    return failure(data);
                });
        }
        function update( uuid, delivery_cost, delivery_mode, success, failure ) {
            $http.post( API_ENDPOINT + '/orders/updateorder/',  {
                'order_uuid': uuid,
                'delivery_cost': delivery_cost,
                'delivery_mode': delivery_mode
            })
                .success(function(data, status, headers, config){
                    return success(data);
                })
                .error(function(data, status, headers, config){
                    return failure(data);
                });
        }
    }
})();