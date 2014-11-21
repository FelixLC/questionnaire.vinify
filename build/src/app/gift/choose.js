angular.module( 'vinibar.gift.choose', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap'
])

.constant('API_ENDPOINT','https://api.vinify.co/api')
.controller( 'giftChooseCtrl', ["$scope", "$http", "$location", "currentClient", "$rootScope", "API_ENDPOINT", "$state", function giftChooseCtrl( $scope, $http, $location, currentClient, $rootScope, API_ENDPOINT, $state ) {
  $scope.state = {
    main : 'overview',
    hover: null
  };
}]);
