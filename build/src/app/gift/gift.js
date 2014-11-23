angular.module('vinibar.gift', [
  'ui.router',
  'clientFactory',
  'vinibar.gift.vinibar',
  'vinibar.gift.gift_card',
  'ui.bootstrap'
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
.constant('API_ENDPOINT', 'http://127.0.0.1:8000/api')
.controller('giftPayCtrl', function giftPayCtrl ($scope, Gift, params, toaster, API_ENDPOINT) {
   // Stripe.setPublishableKey('pk_live_gNv4cCe8tsZpettPUsdQj25F');
 console.log($scope.$parent.gift.receiver.gift_uuid);
  $scope.submit = function (status, response) {

      if (response.error) {
        toaster.pop('infos', 'Erreur', 'Merci de vérifier vos coordonnées bancaires.');
      } else {
        $rootScope.loading = true;
        Gift.chargeGiftOrder(response.id, $scope.$parent.gift.receiver.gift_uuid)
        .success(function (data, status, headers, config) {
          if ($scope.$parent.gift.order.delivery_mode === 'Point Relais') {
            $http({
              url: API_ENDPOINT + '/orders/pickmremail/',
              method: "POST",
              data: { 'order_id': $scope.$parent.gift.order.uuid },
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              }
            });
          }
          $state.go('remerciement_mobile');
          mixpanel.track('Sucessful payment');
        })
        .error(function (data, status, headers, config) {
          toaster.pop('error', 'Une erreur est survenue', 'Vous n\'avez pas été facturés. Merci de réessayer');
          mixpanel.track('Server failed to proceed payment');
        });
      }

  };
});
