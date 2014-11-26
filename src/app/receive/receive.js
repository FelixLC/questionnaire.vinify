(function () {
  'use strict';

  angular.module('vinibar.receive', [
    'ui.router',
    'ui.bootstrap',
    'Mixpanel',
    'settings',
    'receiverService',
    'toaster'
  ])
  .controller('ReceiveCtrl', ReceiveCtrl)
  .config(function config ($stateProvider) {
    $stateProvider
      .state('receive', {
        url: '/recevoir',
        controller: 'ReceiveCtrl',
        views: {
          main: {
            templateUrl: 'receive/receive.tpl.html'
          }
        },
        data: { pageTitle: 'Cadeau' }
      });
  });

  function ReceiveCtrl ($stateParams, settings, Mixpanel, Receive, $rootScope, $scope, $state, toaster) {
    $scope.activate = function (code) {
      Receive.activate(code)
        .success(function (response) {
          if (response.data.coupon_type === 'Gift') {
            Mixpanel.track("activated gift", { type: 'gift' });
            $state.go('welcome', {r: 'gift'});
          } else {
            Mixpanel.track("activated gift", { type: 'activation' });
            $state.go('gift.congratulation', {r: 'gift'});
          }
        })
        .error(function (response) {
          toaster.pop('error', 'Oops !', "Le coupon n'existe pas ou a déjà été utilisé");
        });
    };
  }
})();