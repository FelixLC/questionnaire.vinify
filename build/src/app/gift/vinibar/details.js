angular.module( 'vinibar.gift.choose', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap'
])

.config(["$stateProvider", function config( $stateProvider ) {
  $stateProvider.state( 'gift.choose', {
    url: '/type',
    controller: 'giftChooseCtrl',
    templateUrl: 'gift/choose.tpl.html',
    data:{ pageTitle: 'Cadeau' }
  });
}])
.constant('API_ENDPOINT','https://api.vinify.co/api')
.controller( 'giftChooseCtrl', ["$scope", "$http", "$location", "currentClient", "$rootScope", "API_ENDPOINT", "$state", function giftChooseCtrl( $scope, $http, $location, currentClient, $rootScope, API_ENDPOINT, $state ) {

}]);
