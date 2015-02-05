angular.module('vinibar.gift_card', [
  'Resources'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('gift_card', {
      url: '/carte_cadeau?code&credits',
      views: {
        main: {
          controller: 'giftCardCtrl',
          templateUrl: 'gift/gift_card.tpl.html'
        }
      },
      data: { pageTitle: 'Cadeau' }
    });
})
.controller('giftCardCtrl', function ($scope, currentGiftCard, $stateParams) {
  $scope.code = (currentGiftCard.code) ?  currentGiftCard.code : $stateParams.code;
  $scope.credits = (currentGiftCard.credits) ?  currentGiftCard.credits : $stateParams.credits;
  $scope.message = currentGiftCard.message;
  $scope.first_name = currentGiftCard.first_name;
});
