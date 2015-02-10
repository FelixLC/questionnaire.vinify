angular.module('vinibar.remerciement', [
  'ui.router',
  'ui.bootstrap',
  'clientFactory',
  'ngAutocomplete'
])

.config(function config ($stateProvider, $sceDelegateProvider) {
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
      url: '/remerciement/cadeau?print',
      views: {
        main: {
          controller: 'remerciementSixCtrl',
          templateUrl: 'remerciement/remerciement.gift.tpl.html'
        }
      },
      data: { pageTitle: 'remerciement' }
    })
    .state('remerciement_fail', {
      url: '/remerciement/questionnaire',
      views: {
        main: {
          controller: 'remerciementSixCtrl',
          templateUrl: 'remerciement/remerciement.fail.tpl.html'
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
          controller: 'remerciementSixCtrl',
          templateUrl: 'remerciement/remerciement.6.tpl.html'
        }
      },
      data: { pageTitle: 'remerciement' }
    });
  $sceDelegateProvider.resourceUrlWhitelist([ 'self',  'https://lb.affilae.com/**' ]);
})

.controller('remerciementCtrl', function remerciementCtrl ($scope, currentClient) {
  console.log(currentClient);
  $scope.url = function () {
    var amount =  Math.round(((currentClient.order.final_price - currentClient.order.delivery_cost) / 1.2) * 100) / 100;
    return "https://lb.affilae.com/?key=546b74af23b944e0498b4c0a-546b6ea723b944df498b4e23&id=" +
                  currentClient.order.uuid + "&amount=" + amount + "&payment=online";
  };
})
.controller('remerciementSixCtrl', function remerciementSixCtrl ($scope, currentClient, $stateParams) {
  $scope.isPrint = $stateParams.print;
  console.log($scope.isPrint === "false");
  $scope.url = function () {
    var amount =  Math.round(((currentClient.order.final_price - currentClient.order.delivery_cost) / 1.2) * 100) / 100;
    return "https://lb.affilae.com/?key=546b6fc823b944df498b4e25-546b6ea723b944df498b4e23&id=" +
                   currentClient.order.uuid + "&amount=" + amount + "&payment=online";
  };
});