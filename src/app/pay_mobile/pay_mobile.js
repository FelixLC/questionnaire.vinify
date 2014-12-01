angular.module('vinibar.pay_mobile', [
  'ui.router',
  'angularPayments',
  'clientFactory',
  'ui.bootstrap',
  'orderService',
  'Mixpanel',
  'settings',
  'toaster'
])

.config(function config ($stateProvider) {
  $stateProvider.state('pay_mobile', {
    url: '/pay_mobile',
    views: {
      main: {
        controller: 'pay_mobileCtrl',
        templateUrl: 'pay_mobile/pay_mobile.tpl.html'
      }
    },
    data: { pageTitle: 'Commander' }
  });
})

.controller('pay_mobileCtrl', function pay_mobileCtrl (Mixpanel, $scope, $http, currentClient, $rootScope, settings, $state, Order, toaster) {
    var init = function (argument) {
      $scope.client = currentClient.currentClient;
      $scope.serializedOrder = $scope.client.order;
      $scope.delivery = {
        mode: 'Colissimo',
        cost: ($scope.client.order_type === 'Vinibar') ? 11.9 : 8.90
      };
    };

    init();

    $scope.updateOrder = function (num) {
      $rootScope.loading = true;
      if (num === 1) {
        $scope.delivery.cost = ($scope.client.order_type === 'Vinibar') ? 8.9 : 4.90;
        $scope.delivery.mode = 'Point Relais';
      } else if (num === 2) {
        $scope.delivery.cost = ($scope.client.order_type === 'Vinibar') ? 11.9 : 8.90;
        $scope.delivery.mode = 'Colissimo';
      } else if (num === 3) {
        $scope.delivery.cost = 0;
        $scope.delivery.mode = 'Vinify';
      }
      Order.update($scope.client.order.uuid, $scope.delivery.cost, $scope.delivery.mode,
            function (data) {
                  $scope.client.order = data;
                  console.log($scope.client.order.final_price);
                  console.log(Math.round($scope.client.order.final_price * 100)/100);
                  $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100)/100;
                  $rootScope.loading = false;
              }, function (data) {
                  console.log('error @ createOrder');
                  $rootScope.loading = false;
              });
      };


    Stripe.setPublishableKey('pk_live_gNv4cCe8tsZpettPUsdQj25F');
    $scope.submit = function (status, response) {

        if (response.error) {
            toaster.pop('error', 'Une erreur est survenue', 'Merci de vérifier vos coordonnées bancaires');
        } else {
          $rootScope.loading = true;
          var data = {
            id: response.id,
            order_uuid: $scope.client.order.uuid
          };
          $http({
            url: ($scope.client.order_type === 'Vinibar') ? settings.apiEndPoint +'/orders/chargevinibar/' : settings.apiEndPoint +'/orders/discovery/charge/',
            method: "POST",
            data: data
          })
          .success(function (data, status, headers, config) {
            currentClient.order = data;
            $rootScope.loading = false;
            if ($scope.client.order.delivery_mode === 'Point Relais') {
              $http({
                url: settings.apiEndPoint + '/orders/pickmremail/',
                method: "POST",
                data: { 'order_id': $scope.client.order.uuid },
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
              });
            }
            $state.go('remerciement_mobile');
            Mixpanel.track('Sucessful payment');
          })
          .error(function (data, status, headers, config) {
            $rootScope.loading = false;
            toaster.pop('error', 'Une erreur est survenue', 'Vous n\'avez pas été facturés. Merci de réessayer');
            Mixpanel.track('Server failed to proceed payment');
          });
        }

    };


    $scope.calcPrice = function () {
        var price = 0;
        for (var i = SerializedOrder.refills.length - 1; i >= 0; i--) {
          price += SerializedOrder.refills[i].price_level;
        }
        return price;
    };

    $scope.displayPrice = function (price) {
      return price;
    };
});
