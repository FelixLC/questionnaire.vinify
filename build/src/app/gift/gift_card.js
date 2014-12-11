angular.module('vinibar.gift_card', [
  'Resources'
])

.config(["$stateProvider", function config ($stateProvider) {
  $stateProvider
    .state('gift_card', {
      url: '/carte_cadeau?code',
      views: {
        main: {
          controller: 'giftCardCtrl',
          templateUrl: 'gift/gift_card.tpl.html'
        }
      },
      data: { pageTitle: 'Cadeau' }
    });
}])
.controller('giftCardCtrl', ["$scope", "currentGiftCard", "$stateParams", function ($scope, currentGiftCard, $stateParams) {
  $scope.code = (currentGiftCard.code) ?  currentGiftCard.code : $stateParams.code;
  $scope.message = currentGiftCard.message;
  $scope.first_name = currentGiftCard.first_name;
}]);
