angular.module('vinibar.remerciement', [
  'ui.router',
  'ui.bootstrap',
  'clientFactory',
  'ngAutocomplete'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('remerciement', {
      url: '/remerciement',
      views: {
        main: {
          controller: 'remerciementCtrl',
          templateUrl: 'remerciement/remerciement.tpl.html'
        }
      },
      data: { pageTitle: 'remerciement' }
    })
    .state('remerciement_gift', {
      url: '/remerciement/cadeau',
      views: {
        main: {
          controller: 'remerciementCtrl',
          templateUrl: 'remerciement/remerciement.3.tpl.html'
        }
      },
      data: { pageTitle: 'remerciement' }
    })
    .state('remerciement_3', {
      url: '/remerciement/3',
      views: {
        main: {
          controller: 'remerciementCtrl',
          templateUrl: 'remerciement/remerciement.3.tpl.html'
        }
      },
      data: { pageTitle: 'remerciement' }
    })
    .state('remerciement_6', {
      url: '/remerciement/6',
      views: {
        main: {
          controller: 'remerciementCtrl',
          templateUrl: 'remerciement/remerciement.6.tpl.html'
        }
      },
      data: { pageTitle: 'remerciement' }
    });
})

.controller('remerciementCtrl', function remerciementCtrl ($scope, currentClient) {
  $scope.order = currentClient.order;
  $scope.amount = Math.round(($scope.order.amount / 1.2) * 100) / 10;
});