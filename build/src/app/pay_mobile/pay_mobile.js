angular.module( 'vinibar.pay_mobile', [
  'ui.router',
  'placeholders',
  'angularPayments',
  'clientFactory',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'pay_mobile', {
    url: '/pay_mobile',
    views: {
      "main": {
        controller: 'pay_mobileCtrl',
        templateUrl: 'pay_mobile/pay_mobile.tpl.html'
      }
    },
    data:{ pageTitle: 'Commander' }
  });
})
.constant('API_ENDPOINT','https://api.vinify.co/api')
.controller( 'pay_mobileCtrl', function pay_mobileCtrl( $scope, $http, $location, currentClient, $rootScope, API_ENDPOINT, $state ) {
    $scope.client = currentClient.currentClient;
    $scope.serializedOrder = $scope.client.order;
    $scope.delivery = {
      mode: 'Colissimo',
      cost: 11.90
    };
    $scope.updateOrder = function(num) {
      if (num === 1) {  $scope.delivery.cost = 8.9;
                        $scope.delivery.mode = 'Point Relais';}

      if (num === 2) {  $scope.delivery.cost = 11.9;
                        $scope.delivery.mode = 'Colissimo'; }

      if (num === 3) {  $scope.delivery.cost = 0;
                        $scope.delivery.mode = 'Vinify'; }
      $scope.order_data = {
        'order_uuid': $scope.client.order.uuid,
        'delivery_cost': $scope.delivery.cost,
        'delivery_mode': $scope.delivery.mode
      };
      $rootScope.loading = true;
      $http({
              url: API_ENDPOINT + '/orders/updateorder/',
              method: 'POST',
              data: $scope.order_data,
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              }
            })
            .success(function(data, status, headers, config) {
                  $scope.client.order = data;
                  console.log($scope.client.order.final_price);
                  console.log(Math.round($scope.client.order.final_price * 100)/100);
                  $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100)/100;
                  $rootScope.loading = false;
              })
            .error(function(data, status, headers, config) {
                  console.log('error @ createOrder');
                  $rootScope.loading = false;
              });
      };
    var apiEndPoint =  'https://api.vinify.co/api';

    Stripe.setPublishableKey('pk_live_gNv4cCe8tsZpettPUsdQj25F');
    $scope.submit = function(status, response) {

        if (response.error) {
          console.log(response);
        } else {
          $rootScope.loading = true;
          var data = {
            id: response.id,
            order_uuid: $scope.serializedOrder.uuid
          };
          $http({
            url: apiEndPoint + '/orders/chargevinibar/',
            method: "POST",
            data: data
          })
          .success(function(data, status, headers, config) {
            $rootScope.loading = false;
            if ($scope.serializedOrder.delivery_mode === 'Point Relais') {
              $http({
                url: apiEndPoint + '/orders/pickmremail/',
                method: "POST",
                data: { 'order_id': $scope.serializedOrder.uuid },
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
              });
            }
            $state.go('remerciement_mobile');
          })
          .error(function(data, status, headers, config) {
            $rootScope.loading = false;
            //todo manage errors
          });
        }

    };


    $scope.calcPrice = function() {
        var price = 0;
        for (var i = SerializedOrder.refills.length - 1; i >= 0; i--) {
          price += SerializedOrder.refills[i].price_level;
        }
        //return price.toString().substring(0, 2) + "." + price.toString().substring(2);
        return price;
    };

    $scope.displayPrice = function(price) {
      return price;
      //var string = price.toString();
      //var len = string.length - 2;
      //return string.substring(0, len) + "." + string.substring(len);
    };
});
