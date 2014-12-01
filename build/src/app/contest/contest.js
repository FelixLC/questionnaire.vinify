(function () {
  'use strict';

  angular.module('vinibar.contest', [
    'ui.router',
    'ui.bootstrap',
    'Mixpanel',
    'clientFactory',
    'settings',
    'toaster'
  ])
  .config(function config ($stateProvider) {
    $stateProvider
      .state('contest', {
        url: '/concours',
        views: {
          main: {
            templateUrl: 'contest/contest.tpl.html',
            controller: 'contestCtrl'
          }
        },
        data: { pageTitle: 'Concours' }
      })
      .state('contest_congratulation', {
        url: '/bravo',
        views: {
          main: {
            templateUrl: 'contest/congratulation.tpl.html'
          }
        },
        data: { pageTitle: 'Concours' }
      });
  })
  .controller('contestCtrl', function contestCtrl ($stateParams, settings, Mixpanel, currentClient, $scope, $state, toaster) {

    $scope.sendTo = function (code) {
      currentClient.isContest = true;
      Mixpanel.track("contest entry", { contest: code });
      $state.go('welcome', { r: code });
    };
  });
})();