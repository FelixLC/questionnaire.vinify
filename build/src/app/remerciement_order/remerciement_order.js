angular.module( 'vinibar.remerciement_order', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngAutocomplete'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'remerciement_order', {
    url: '/remerciement_order',
    views: {
      "main": {
        controller: 'remerciement_orderCtrl',
        templateUrl: 'remerciement_order/remerciement_order.tpl.html'
      }
    },
    data:{ pageTitle: 'remerciement_order' }
  });
})

.controller( 'remerciement_orderCtrl', function remerciement_orderCtrl( $timeout, $window, $scope, $http, $location, User ) {
  $scope.user = {};
});