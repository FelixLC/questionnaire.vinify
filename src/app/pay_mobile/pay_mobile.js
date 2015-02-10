angular.module('vinibar.pay_mobile', [
  'ui.router',
  'ui.bootstrap',
  'angularPayments',
  'clientFactory',
  'ui.bootstrap',
  'orderService',
  'Mixpanel',
  'settings',
  'toaster',
  'angularLoad'
])

.config(function config ($stateProvider) {
  $stateProvider.state('pay_mobile', {
    url: '/order/paiement',
    views: {
      main: {
        controller: 'payMobileCtrl',
        templateUrl: 'pay_mobile/pay_mobile.tpl.html'
      }
    },
    // resolve: {
    //   maps: function (angularLoad) {
    //     return angularLoad.loadScript('https://maps.googleapis.com/maps/api/js?sensor=false');
    //   },
    //   mondialrelay: function (angularLoad) {
    //     return angularLoad.loadScript('https://widget.mondialrelay.com/parcelshop-picker/v3_0/scripts/jquery.plugin.mondialrelay.parcelshoppicker.min.js');
    //   }
    // },
    data: { pageTitle: 'Commander' }
  });
})

.controller('payMobileCtrl', function payMobileCtrl (Mixpanel, $scope, $http, currentClient, $rootScope, settings, $state, Order, toaster, $modal) {
  var init = function (argument) {
    $scope.state = 'order.paiement';
    $scope.date = new Date();
    // $scope.client = currentClient.currentClient;
    $scope.client = {
      order: {"uuid": "6c152929d6dd419d92af620faceda402", "class_name": "order", "order_type": "Discovery", "user": {"uuid": "37988394d0da47d9952f201ffacaca3a", "class_name": "user", "first_name": "F\u00e9lix", "last_name": "Le Chevallier", "email": "felixvinif@vinify.co", "phone": "0683620433", "token": "74128054aa5e08ad79478cb0ceaee5ca94999e43", "status": 2.5}, "status": 1, "order_id": "VD1499", "delivery_address": "ec0d3e555f924e1dae5ece91c39ff9cf", "billing_address": "ec0d3e555f924e1dae5ece91c39ff9cf", "delivery_mode": "Colissimo", "coupon": null, "referral_coupon": null, "refills": [], "quantity": 1, "num_bottles": 3, "amount": 39, "delivery_cost": 11.9, "final_price": 50.9, "date_created": "2014-11-18T15:08:37.536Z", "date_payed": null, "date_delivered": null},
      userinfos: {
        last_name: 'Le Chevallier',
        first_name: 'Felix',
        delivery_address: {
          street: '106 rue du pdt Wilson',
          zipcode: '92300',
          city: 'Levallois'
        }
      },
      email: 'felix@vinify.co'
    };
    $scope.name = $scope.client.email;
    $scope.serializedOrder = $scope.client.order;
    $scope.delivery = {
      mode: 'Colissimo',
      cost: ($scope.client.order_type === 'Vinibar') ? 11.9 : 8.90,
      mrLoaded: false
    };
    $scope.selected = { shop: false };
  };

  init();

  $scope.validateShop = function () {
    $scope.selected.shop = true;
  };

  $scope.mondialRelay = function () {
    $scope.selected = { shop: false };
    if (!$scope.delivery.mrLoaded) {
      $("#Zone_Widget").MR_ParcelShopPicker({
        PostCode: $scope.client.userinfos.delivery_address.zipcode,
        Target: "#Retour_Widget",  // selecteur jquery ou renvoyer l'ID du relais selectionné
        OnParcelShopSelected: function (Data) {
          $scope.shop = Data;
          $scope.shop.concat_ID = Data.Pays + '-' + Data.ID; // Build shop ID with the callback function
        },
        Brand: "EC004507",  // votre code client
        Country: "FR"  /* pays*/
      });
      $scope.delivery.mrLoaded = true;
    }
  };

  $scope.updateOrder = function (num) {
    $rootScope.loading = true;
    if (num === 1) {
      $scope.delivery.cost = ($scope.client.order_type === 'Vinibar') ? 8.9 : 4.90;
      $scope.delivery.mode = 'Point Relais';
      $scope.selected.shop = true;
      $scope.mondialRelay();
    } else if (num === 2) {
      $scope.delivery.cost = ($scope.client.order_type === 'Vinibar') ? 11.9 : 8.90;
      $scope.delivery.mode = 'Colissimo';
    } else if (num === 3) {
      $scope.delivery.cost = 0;
      $scope.delivery.mode = 'Vinify';
    } else if (num === 4) {
      $scope.delivery.cost = ($scope.client.order_type === 'Vinibar') ? 11.9 : 8.90;
      $scope.delivery.mode = 'express_1';
    } else if (num === 5) {
      $scope.delivery.cost = ($scope.client.order_type === 'Vinibar') ? 12.9 : 9.90;
      $scope.delivery.mode = 'express_2';
    }
    Order.update($scope.client.order.uuid, $scope.delivery.cost, $scope.delivery.mode,
      function (data) {
        $scope.client.order = data;
        console.log($scope.client.order.final_price);
        console.log(Math.round($scope.client.order.final_price * 100) / 100);
        $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100) / 100;
        $rootScope.loading = false;
      }, function (data) {
        console.log('error @ createOrder');
        $rootScope.loading = false;
      });
  };


  // Stripe.setPublishableKey((settings.test) ? 'pk_test_sK21onMmCuKNuoY7pbml8z3Q' : 'pk_live_gNv4cCe8tsZpettPUsdQj25F');
  $scope.submit = function (status, response) {
    var direction = ($scope.client.order_type === 'Vinibar') ? 'remerciement_6' : 'remerciement_3';
    if (response.error) {
      toaster.pop('error', 'Une erreur est survenue', 'Merci de vérifier vos coordonnées bancaires');
    } else {
      $rootScope.loading = true;
      var data = {
        id: response.id,
        order_uuid: $scope.client.order.uuid
      };
      if ($scope.client.order.delivery_mode === 'Point Relais' && !$scope.shop) {
        $rootScope.loading = false;
        $scope.selected = { shop: false };
        toaster.pop('info', 'Aucun Point Relais sélectionné', 'Merci de choisir un Point Relais');
      } else {
        $scope.client.chargeOrder(response.id, $scope.client.order.uuid, $scope.client.order_type, settings.test)
          .success(function (data, status, headers, config) {
            currentClient.order = data;
            $rootScope.loading = false;
            if ($scope.client.order.delivery_mode === 'Point Relais') {
              $scope.client.pickMrShop($scope.shop, $scope.client.order.uuid,
                function () {},
                function () {
                  $scope.client.pickMrEmail($scope.client.order.uuid);
                  console.log('error');
                }
              );
            }
            $state.go(direction);
            Mixpanel.track('Sucessful payment');
          })
          .error(function (data, status, headers, config) {
            $rootScope.loading = false;
            toaster.pop('error', 'Une erreur est survenue', 'Vous n\'avez pas été facturés. Merci de réessayer');
            Mixpanel.track('Server failed to proceed payment');
          });
      }
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

  $scope.toParis = function (zipcode) {
    return zipcode.toString().substring(0, 2) === '75';
  };

  $scope.beforeNoon = function () {
    var hours = $scope.date.getUTCHours();
    return ((hours + 1 - 12) < 0) ? 'aujourd\'hui' : 'demain';
  };

});