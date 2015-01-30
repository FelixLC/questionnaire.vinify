angular.module('vinibar.remerciement_order', [
  'ui.router',
  'ui.bootstrap',
  'ngAutocomplete'
])

.config(["$stateProvider", function config ($stateProvider) {
  $stateProvider.state('remerciement_order', {
    url: '/remerciement_order',
    views: {
      main: {
        controller: 'remerciement_orderCtrl',
        templateUrl: 'remerciement_order/remerciement_order.tpl.html'
      }
    },
    data: { pageTitle: 'remerciement_order' }
  });
}])

.controller('remerciement_orderCtrl', ["$timeout", "$window", "$scope", "$http", "$location", "User", function remerciement_orderCtrl ($timeout, $window, $scope, $http, $location, User) {
  $scope.user = {};
}]);