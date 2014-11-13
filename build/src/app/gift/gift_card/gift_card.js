angular.module( 'vinibar.gift.gift_card', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'gift.gift_card', {
      url: '/carte_cadeau',
      abstract: true,
      template: '<ui-view/>'
    })
    .state( 'gift.gift_card.details', {
      url: '/formule',
      controller: 'giftCardCtrl',
      templateUrl: 'gift/gift_card/details.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.gift_card.infos', {
      url: '/infos',
      controller: 'giftCardCtrl',
      templateUrl: 'gift/gift_card/infos.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.gift_card.pay', {
      url: '/paiement',
      controller: 'giftCardCtrl',
      templateUrl: 'gift/gift_card/pay.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    });
})
.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'giftCardCtrl', function giftCardCtrl( $scope, $state ) {

});
