angular.module( 'vinibar.remerciement_mobile', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngAutocomplete'
])

.config(["$stateProvider", function config( $stateProvider ) {
  $stateProvider.state( 'remerciement_mobile', {
    url: '/remerciement_mobile',
    views: {
      "main": {
        controller: 'remerciement_mobileCtrl',
        templateUrl: 'remerciement_mobile/remerciement_mobile.tpl.html'
      }
    },
    data:{ pageTitle: 'remerciement_mobile' }
  });
}])

.controller( 'remerciement_mobileCtrl', ["$timeout", "$window", "$scope", "$http", "$location", "User", function remerciement_mobileCtrl( $timeout, $window, $scope, $http, $location, User ) {
  $scope.user = {};
}]);