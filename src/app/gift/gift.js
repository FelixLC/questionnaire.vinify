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
      url: '/type',
      templateUrl: 'gift/choose.tpl.html',
      data: { pageTitle: 'Cadeau' }
    });
})

.controller('giftPayCtrl', function giftPayCtrl ($scope, $state, Gift, params, toaster, settings, $modal) {
   // Stripe.setPublishableKey('pk_live_gNv4cCe8tsZpettPUsdQj25F');
  Stripe.setPublishableKey('pk_test_sK21onMmCuKNuoY7pbml8z3Q');
  $scope.gift = $scope.$parent.gift;

  $scope.submit = function (status, response) {
    if (response.error) {
      toaster.pop('infos', 'Erreur', 'Merci de vérifier vos coordonnées bancaires.');
    } else {
      $scope.gift.chargeGiftOrder(response.id, $scope.gift.receiver.gift_uuid)
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
        $state.go('remerciement_mobile');
        // mixpanel.track('Sucessful payment');
      })
      .error(function (data, status, headers, config) {
        toaster.pop('error', 'Une erreur est survenue', 'Vous n\'avez pas été facturés. Merci de réessayer');
        // mixpanel.track('Server failed to proceed payment');
      });
    }
  };

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'app/gift/adress.tpl.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        adress: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});
