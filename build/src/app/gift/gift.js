angular.module('vinibar.gift', [
  'ui.router',
  'clientFactory',
  'vinibar.gift.vinibar',
  'ui.bootstrap',
  'Resources',
  'Mixpanel',
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
      controller: 'chooseGiftCtrl',
      data: { pageTitle: 'Cadeau' }
    })
    .state('gift.pay', {
      url: '/paiement',
      templateUrl: 'gift/pay.tpl.html',
      controller: 'giftPayCtrl',
      data: { pageTitle: 'Cadeau' }
    });
})
.controller('chooseGiftCtrl', function ($stateParams, settings, Mixpanel, $rootScope, $scope, $state) {
  if ($stateParams.test) {
    settings.test = true;
  }
  Mixpanel.track('viewed cadeau/type');
  $scope.goTo = function (state) {
    Mixpanel.track('Selected: ' + state);
    $state.go(state);
  };
})

.controller('giftPayCtrl', function giftPayCtrl (Mixpanel, $scope, $http, $state, currentGift, params, toaster, settings, $modal) {

  Stripe.setPublishableKey((settings.test) ? 'pk_test_sK21onMmCuKNuoY7pbml8z3Q' : 'pk_live_gNv4cCe8tsZpettPUsdQj25F');
  $scope.gift = currentGift.current;
  console.log($scope.gift);
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
            $http.post(settings.apiEndPoint + '/orders/pickmremail/', { order_id: data.order });
          }
          $scope.load = { spin: false };
          $state.go('remerciement_mobile');
          Mixpanel.track('Sucessful payment');
        })
        .error(function (data, status, headers, config) {
          $scope.load = { spin: false };
          toaster.pop('error', 'Une erreur est survenue', 'Vous n\'avez pas été facturé. Merci de réessayer');
          Mixpanel.track('Server failed to proceed payment');
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
      toaster.pop('success', 'Votre adresse a été ajoutée', 'Vous recevrez la facture par mail');
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
