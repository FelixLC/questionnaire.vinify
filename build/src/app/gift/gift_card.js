angular.module('vinibar.gift_card', [
  'Resources'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('gift_card', {
      url: '/carte_cadeau',
      views: {
        main: {
          controller: 'giftCardCtrl',
          templateUrl: 'gift/gift_card.tpl.html'
        }
      },
      data: { pageTitle: 'Cadeau' }
    });
})
.controller('giftCardCtrl', function ($scope, currentGiftCard) {
  $scope.code = currentGiftCard.code;
  $scope.message = currentGiftCard.message;
  $scope.first_name = currentGiftCard.first_name;
});
