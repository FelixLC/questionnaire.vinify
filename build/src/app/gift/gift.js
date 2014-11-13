angular.module( 'vinibar.gift', [
  'ui.router',
  'clientFactory',
  'vinibar.gift.vinibar',
  'vinibar.gift.gift_card',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'gift', {
      url: '/cadeau',
      abstract: true,
      views: {
        "main": {
          templateUrl: 'gift/gift.tpl.html'
        }
      }
    })
    .state( 'gift.choose', {
      url: '/type',
      templateUrl: 'gift/choose.tpl.html',
      controller: 'giftChooseCtrl',
      data:{ pageTitle: 'Cadeau' }
    });
})

.controller( 'giftChooseCtrl', function giftChooseCtrl( $scope, $state ) {
  $scope.hover = {
    view: 'vinibar'
  };
  $scope.toggle = function(type) {
    $scope.hover.view = type;
  };
});