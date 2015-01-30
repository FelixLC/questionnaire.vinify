(function () {
  'use strict';

  angular.module('vinibar.receive', [
    'ui.router',
    'ui.bootstrap',
    'clientFactory',
    'Mixpanel',
    'settings',
    'receiverService',
    'toaster'
  ])
  .config(["$stateProvider", function config ($stateProvider) {
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
      .state('update', {
        url: '/informations',
        views: {
          main: {
            templateUrl: 'receive/update.tpl.html',
            controller: 'updateCtrl'
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
  }])
  .controller('receiveCtrl', ["Mixpanel", "Receive", "$scope", "$state", "toaster", "currentClient", function receiveCtrl (Mixpanel, Receive, $scope, $state, toaster, currentClient) {

    $scope.update = function (firstName, lastName, email, password) {
      if (firstName && lastName && email && password) {
        Receive.updateReceiver(firstName, lastName, email, password).then(
          function (response) {
            Mixpanel.track("activated gift", { type: 'activation' });
            $state.go('congratulation', { r: 'gift' });
          },
          function (error) {
            toaster.pop('error', 'Oops !', "Il y a eu une erreur. Merci de réessayer");
          });
      }
    };

    $scope.sendTo = function (code) {
      if (code) {
        Receive.activate(code)
          .then(function (response) {
            if (response.data.coupon.coupon_type === 'Gift') {
              Mixpanel.track("activated gift", { type: 'gift' });
              currentClient.isGift = true;
              $state.go('welcome', { r: 'gift' });
            } else {
              currentClient.receiver = response.data.receiver;
              $state.go('update');
            }
          }, function (response) {
            if (response.data === 'Coupon does not exist') {
              toaster.pop('error', 'Oops !', "Le coupon n'existe pas");
            } else if ('Gift has already been activated') {
              toaster.pop('error', 'Oops !', "Le cadeau déja été activé");
            } else if ('Gift Coupon has already been redeemed') {
              toaster.pop('error', 'Oops !', "Le coupon a déjà été utilisé");
            } else {
              toaster.pop('error', 'Oops !', "Le coupon n'existe pas ou a déjà été utilisé");
            }
          });
      } else {
        toaster.pop('error', 'Merci de rentrer un coupon');
      }
    };
  }])

  .controller('updateCtrl', ["Mixpanel", "Receive", "$scope", "$state", "toaster", "currentClient", function updateCtrl (Mixpanel, Receive, $scope, $state, toaster, currentClient) {
    $scope.first_name = (currentClient.receiver) ? currentClient.receiver.first_name : "";
    $scope.last_name = (currentClient.receiver) ? currentClient.receiver.last_name : "";
    $scope.email = (currentClient.receiver) ? currentClient.receiver.email : "";

    $scope.update = function (firstName, lastName, email, password) {
      if (firstName && lastName && email && password) {
        Receive.updateReceiver(firstName, lastName, email, password).then(
          function (response) {
            Mixpanel.track("activated gift", { type: 'activation' });
            $state.go('congratulation_receive', { r: 'gift' });
          },
          function (error) {
            toaster.pop('error', 'Oops !', "Il y a eu une erreur. Merci de réessayer");
          });
      } else {
        toaster.pop('error', 'Oops !', "Merci de remplir tous les champs");
      }
    };
  }]);
})();