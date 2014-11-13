angular.module( 'vinibar.gift.choose', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'gift.choose', {
    url: '/type',
    controller: 'giftChooseCtrl',
    templateUrl: 'gift/choose.tpl.html',
    data:{ pageTitle: 'Cadeau' }
  });
})
.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'giftChooseCtrl', function giftChooseCtrl( $scope, $http, $location, currentClient, $rootScope, API_ENDPOINT, $state ) {

});
