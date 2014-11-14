angular.module( 'vinibar.gift.gift_card', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap',
  'Resources',
  'params',
  'toaster'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'gift.gift_card', {
      url: '/carte_cadeau',
      controller: 'giftCardCtrl',
      abstract: true,
      template: '<ui-view/>'
    })
    .state( 'gift.gift_card.details', {
      url: '/formule',
      templateUrl: 'gift/gift_card/details.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.gift_card.infos', {
      url: '/infos',
      templateUrl: 'gift/gift_card/infos.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.gift_card.pay', {
      url: '/paiement',
      templateUrl: 'gift/gift_card/pay.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    });
})
.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'giftCardCtrl', function giftCardCtrl( $scope, $http, API_ENDPOINT, $state, Gift, params, toaster, $window ) {
  var init = function(){
    $scope.gift = new Gift('Card');

    $scope.costs = params;

    $scope.details = {
      total: "",
      product: 69,
      credits: true
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
    $scope.$watch('gift.order.delivery_mode', function(newObj, OldObj){
      updateCosts();
    });
    $scope.$watch('details.credits', function(newVal, OldVal){
      $scope.gift.order.credits = (newVal) ? $scope.gift.order.credits : 60;
    });

    var updateCosts = function() {
      $scope.details.total = 69 + params.vinibar[$scope.gift.order.delivery_mode];
    };
  };

  init();

  $scope.toSurvey = function(form){
    form.submitted = true;
    if($scope.gift.giver.first_name) {
      $scope.gift.createGiver().then(function(response){
            toaster.pop('success', 'Bravo !', ' Votre compte a été créé');
            $window.sessionStorage.token = response.data.token;
            $scope.logged = true;
            $scope.gift.createGiftOrder().then(function(response){
              $scope.gift.receiver.receiver_email = $scope.gift.order.receiver_email;
              console.log(response.data.receiver_email);
              console.log(response.data.uuid);
              $scope.gift.receiver.gift_uuid = response.data.uuid;
                    $state.go('gift.vinibar.quiz');
            });
      });

    } else if($scope.gift.client.username) {
      $scope.gift.logGiver().then(function(response){
          toaster.pop('success', 'Bravo !', ' Vous êtes bien loggué');
          $window.sessionStorage.token = response.data.token;
          $scope.gift.giver.first_name =response.data.first_name;
          $scope.gift.giver.last_name =response.data.last_name;
          $scope.logged = true;
          $scope.gift.createGiftOrder().then(function(response){
          console.log(response.data.receiver_email);
          console.log(response.data.uuid);
            $scope.gift.receiver.receiver_email = $scope.gift.order.receiver_email;
            $scope.gift.receiver.gift_uuid = response.data.uuid;
                    $state.go('gift.vinibar.quiz');
          });
      });
    }

  };
  $scope.sendSurvey = function() {
    $scope.gift.sendSurvey().then(function(response){
      $state.go('gift.vinibar.pay');
    });
  };
});
