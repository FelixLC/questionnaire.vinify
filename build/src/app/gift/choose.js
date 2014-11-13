angular.module( 'vinibar.gift.choose', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap'
])

.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'giftChooseCtrl', function giftChooseCtrl( $scope, $http, $location, currentClient, $rootScope, API_ENDPOINT, $state ) {
  $scope.state = {
    main : 'overview',
    hover: null
  };
});
