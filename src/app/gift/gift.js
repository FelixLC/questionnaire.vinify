angular.module('vinibar.gift', [
  'ui.router',
  'clientFactory',
  'vinibar.gift.vinibar',
  'vinibar.gift.gift_card',
  'ui.bootstrap',
  'settings'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('gift', {
      url: '/cadeau',
      abstract: true,
      views: {
        main: {
          templateUrl: 'gift/gift.tpl.html'
        }
      }
    })
    .state('gift.choose', {
      url: '/type?test',
      templateUrl: 'gift/choose.tpl.html',
      controller: function ($stateParams, settings) {
        if ($stateParams.test) {
          settings.test = true;
        }
      },
      data: { pageTitle: 'Cadeau' }
    });
})

.controller('giftPayCtrl', function giftPayCtrl ($scope, $http, $state, Gift, params, toaster, settings, $modal) {

  Stripe.setPublishableKey((settings.test) ? 'pk_test_sK21onMmCuKNuoY7pbml8z3Q' : 'pk_live_gNv4cCe8tsZpettPUsdQj25F');
  $scope.gift = $scope.$parent.gift;
  $scope.test = settings.test;

  $scope.submit = function (status, response) {
    $scope.load = { spin: true };
    if (response.error) {
      $scope.load = { spin: false };
      toaster.pop('infos', 'Erreur', 'Merci de vérifier vos coordonnées bancaires.');
    } else {
      $scope.gift.chargeGiftOrder(response.id, $scope.gift.receiver.gift_uuid, settings.test, $scope.gift.order.billing, $scope.gift.order.billing_address)
        .success(function (data, status, headers, config) {
          if ($scope.gift.order.delivery_mode === 'Point Relais') {
            $http({
              url: settings.apiEndPoint + '/orders/pickmremail/',
              method: "POST",
              data: { order_id: $scope.gift.order.uuid },
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              }
            });
          }
          $scope.load = { spin: false };
          $state.go('remerciement_mobile');
          // mixpanel.track('Sucessful payment');
        })
        .error(function (data, status, headers, config) {
          $scope.load = { spin: false };
          toaster.pop('error', 'Une erreur est survenue', 'Vous n\'avez pas été facturé. Merci de réessayer');
          // mixpanel.track('Server failed to proceed payment');
        });
    }
  };

  $scope.open = function (size) {
    $scope.address = {};
    var modalInstance = $modal.open({
      templateUrl: 'gift/address.tpl.html',
      controller: 'ModalInstanceCtrl',
      size: size
    });

    modalInstance.result.then(function (address) {
      $scope.gift.order.billing = true;
      $scope.gift.order.billing_address = address;
      console.log($scope.gift.order.billing_address);
    }, function () {

    });
  };

})
.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close($scope.address);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
