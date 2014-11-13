angular.module( 'vinibar.gift.vinibar', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap',
  'Resources',
  'params',
  'toaster'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'gift.vinibar', {
      url: '/vinibar',
      abstract: true,
      template: '<ui-view/>'
    })
    .state( 'gift.vinibar.details', {
      url: '/formule',
      controller: 'giftVinibarCtrl',
      templateUrl: 'gift/vinibar/details.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.vinibar.infos', {
      url: '/infos',
      controller: 'giftVinibarCtrl',
      templateUrl: 'gift/vinibar/infos.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.vinibar.quiz', {
      url: '/quiz',
      controller: 'giftVinibarCtrl',
      templateUrl: 'gift/vinibar/quiz.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.vinibar.pay', {
      url: '/paiement',
      controller: 'giftVinibarCtrl',
      templateUrl: 'gift/vinibar/pay.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    });
})
.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'giftVinibarCtrl', function giftVinibarCtrl( $scope, $http, $location, currentClient, $rootScope, API_ENDPOINT, $state, Gift, params, toaster ) {
  var init = function(){
    $scope.gift = new Gift('Vinibar');
    $scope.costs = params;

    $scope.details = {
      total: "",
      product: 69,
      credits: {
        price_level: 39.90,
        number: 2
      }
    };

    $scope.regions = [
      'Loire',
      'Languedoc Roussillon',
      'Champagne',
      'Bourgogne',
      'Provence',
      'Rhône',
      'Alsace',
      'Bordeaux'
    ];

    $scope.vinibar = {
      refill: 59.80
    };

    $scope.$watchCollection('details.credits', function(newObj, OldObj){
      updateCosts();
    });
    $scope.$watch('gift.order.delivery_mode', function(newObj, OldObj){
      updateCosts();
    });

    var updateCosts = function() {
      $scope.details.total = 69 + params.vinibar[$scope.gift.order.delivery_mode] + //vinibar + delivery
                                                  $scope.details.credits.price_level * $scope.details.credits.number + //refills
                                                  $scope.details.credits.number * params.refill[$scope.gift.order.delivery_mode]; //refill delivery

      $scope.gift.order.credits = $scope.details.credits.price_level * $scope.details.credits.number;
    };
  };

  init();

  $scope.logGiver = function(){
    $scope.gift.logGiver().then(function(response){
          toaster.pop('success', 'Bravo !', ' Vous êtes bien loggué');
          $scope.gift.giver.first_name =response.data.first_name;
          $scope.gift.giver.last_name =response.data.last_name;
          $scope.logged = true;
    });

    $scope.gift.createGiftOrder();
  };

  $scope.createGiver = function(){
    $scope.gift.createGiver().then(function(response){
          toaster.pop('success', 'Bravo !', ' Votre compte a été créé');
          $scope.logged = true;
    });
    $scope.gift.createGiftOrder();
  };

});
