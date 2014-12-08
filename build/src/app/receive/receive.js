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
  .config(function config ($stateProvider) {
    $stateProvider
      .state('receive', {
        url: '/recevoir',
        views: {
          main: {
            templateUrl: 'receive/receive.tpl.html',
            controller: 'receiveCtrl'
          }
        },
        data: { pageTitle: 'Cadeau' }
      })
      .state('congratulation_receive', {
        url: '/bravo',
        views: {
          main: {
            templateUrl: 'receive/congratulation.tpl.html'
          }
        },
        data: { pageTitle: 'Cadeau' }
      });
  })
  .controller('receiveCtrl', function receiveCtrl ($stateParams, settings, Mixpanel, Receive, $rootScope, $scope, $state, toaster) {

    $scope.sendTo = function (code) {
      console.log('send');
      Receive.activate(code)
        .then(function (response) {
          if (response.data.coupon_type === 'Gift') {
            Mixpanel.track("activated gift", { type: 'gift' });
            $state.go('welcome', { r: 'gift' });
          } else {
            Mixpanel.track("activated gift", { type: 'activation' });
            $state.go('congratulation', { r: 'gift' });
          }
        }, function (response) {
          toaster.pop('error', 'Oops !', "Le coupon n'existe pas ou a déjà été utilisé");
        });
    };
  });
})();