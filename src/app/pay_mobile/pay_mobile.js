angular.module( 'vinibar.pay_mobile', [
  'ui.router',
  'angularPayments',
  'clientFactory',
  'ui.bootstrap',
  'orderService',
  'toaster'
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
.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'pay_mobileCtrl', function pay_mobileCtrl( $scope, $http, $location, currentClient, $rootScope, API_ENDPOINT, $state, Order, toaster ) {
    $scope.client = currentClient.currentClient;
    $scope.serializedOrder = $scope.client.order;
    $scope.delivery = {
      mode: 'Colissimo',
      cost: 11.90
    };
    $scope.updateOrder = function(num) {
      $rootScope.loading = true;
      if (num === 1) {  $scope.delivery.cost = 8.9;
                        $scope.delivery.mode = 'Point Relais';}

      if (num === 2) {  $scope.delivery.cost = 11.9;
                        $scope.delivery.mode = 'Colissimo'; }

      if (num === 3) {  $scope.delivery.cost = 0;
                        $scope.delivery.mode = 'Vinify'; }
    Order.update($scope.client.order.uuid, $scope.delivery.cost, $scope.delivery.mode)
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
    var apiEndPoint =  'http://127.0.0.1:8000/api';

    Stripe.setPublishableKey('pk_live_gNv4cCe8tsZpettPUsdQj25F');
    $scope.submit = function(status, response) {

        if (response.error) {
          console.log(response);
        } else {
          $rootScope.loading = true;
          var data = {
            id: response.id,
            order_uuid: $scope.client.order.uuid
          };
          $http({
            url: apiEndPoint + '/orders/chargevinibar/',
            method: "POST",
            data: data
          })
          .success(function(data, status, headers, config) {
            $rootScope.loading = false;
            if ($scope.client.order.delivery_mode === 'Point Relais') {
              $http({
                url: apiEndPoint + '/orders/pickmremail/',
                method: "POST",
                data: { 'order_id': $scope.client.order.uuid },
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
              });
            }
            $state.go('remerciement_mobile');
          })
          .error(function(data, status, headers, config) {
            $rootScope.loading = false;
            toaster.pop('error', 'Une erreur est survenue', 'Vous n\'avez pas été facturés. Merci de réessayer');
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
