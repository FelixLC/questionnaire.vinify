angular.module( 'vinibar.gift.vinibar', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap',
  'Resources',
  'params',
  'toaster'
])

.config(["$stateProvider", function config( $stateProvider ) {
  $stateProvider
    .state( 'gift.vinibar', {
      url: '/vinibar',
      abstract: true,
      controller: 'giftVinibarCtrl',
      template: '<ui-view/>'
    })
    .state( 'gift.vinibar.details', {
      url: '/formule',
      templateUrl: 'gift/vinibar/details.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.vinibar.infos', {
      url: '/infos',
      templateUrl: 'gift/vinibar/infos.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.vinibar.quiz', {
      url: '/quiz',
      templateUrl: 'gift/vinibar/quiz.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    })
    .state( 'gift.vinibar.pay', {
      url: '/paiement',
      templateUrl: 'gift/vinibar/pay.tpl.html',
      data:{ pageTitle: 'Cadeau' }
    });
}])
.constant('API_ENDPOINT','https://api.vinify.co/api')
.controller( 'giftVinibarCtrl', ["$scope", "$http", "API_ENDPOINT", "$state", "Gift", "params", "toaster", "$window", function giftVinibarCtrl( $scope, $http, API_ENDPOINT, $state, Gift, params, toaster, $window ) {
  var init = function(){
    $scope.gift = new Gift('Vinibar');
    $scope.gift.order.delivery_mode = 'Point Relais';

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
      $scope.gift.order.credits = (newVal) ? 60 : 0;
    });

    var updateCosts = function() {
      $scope.details.total = 69 + params.vinibar[$scope.gift.order.delivery_mode];
    };
  };

  init();

  $scope.toSurvey = function(form){
    form.submitted = true;
    // if the form is valid
    if( form.$valid ) {
      // if it's a new prospect
      if($scope.gift.giver.first_name) {
        $scope.load = true;
        $scope.gift.createGiver().then(function(response){
              toaster.pop('success', 'Bravo !', ' Votre compte a été créé');
              $window.sessionStorage.token = response.data.token;
              $scope.logged = true;

              $scope.gift.createGiftOrder().then(function(response){
                $scope.gift.receiver.receiver_email = $scope.gift.order.receiver_email;
                $scope.gift.receiver.gift_uuid = response.data.uuid;
                $scope.gift.order.delivery_cost = params.vinibar[$scope.gift.order.delivery_mode];
                $scope.load = false;
                $state.go('gift.vinibar.quiz');
              });
        });
      // if it's a client
      } else if($scope.gift.client.username) {
        $scope.load = true;
        $scope.gift.logGiver().then(function(response){
            toaster.pop('success', 'Bravo !', ' Vous êtes bien loggué');
            $window.sessionStorage.token = response.data.token;
            $scope.gift.giver.first_name =response.data.first_name;
            $scope.gift.giver.last_name =response.data.last_name;
            $scope.logged = true;

            $scope.gift.createGiftOrder().then(function(response){
              $scope.gift.receiver.receiver_email = $scope.gift.order.receiver_email;
              $scope.gift.receiver.gift_uuid = response.data.uuid;
              $scope.gift.order.delivery_cost = params.vinibar[$scope.gift.order.delivery_mode];
              $scope.load = false;
              $state.go('gift.vinibar.quiz');
            });
        });
      // if there is no login credentials
      } else {
        toaster.pop('infos', 'Oops !', 'Merci de vous connecter ou de créer un compte');
      }
    // if the form is not valid
    } else {
      toaster.pop('infos', 'Oops !', ' Vous avez oublié des champs');
    }
  };

  $scope.sendSurvey = function() {
    $scope.gift.sendSurvey().then(function(response){
      $state.go('gift.vinibar.pay');
    });
  };

}]);
