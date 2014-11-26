angular.module('vinibar.gift.vinibar', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap',
  'Resources',
  'params',
  'toaster',
  'Mixpanel'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('gift.vinibar', {
      url: '/vinibar',
      abstract: true,
      controller: 'giftVinibarCtrl',
      template: '<ui-view/>'
    })
    .state('gift.vinibar.details', {
      url: '/formule',
      templateUrl: 'gift/vinibar/details.tpl.html',
      data: { pageTitle: 'Cadeau' }
    })
    .state('gift.vinibar.infos', {
      url: '/infos',
      templateUrl: 'gift/vinibar/infos.tpl.html',
      data: { pageTitle: 'Cadeau' }
    })
    .state('gift.vinibar.quiz', {
      url: '/quiz',
      templateUrl: 'gift/vinibar/quiz.tpl.html',
      data: { pageTitle: 'Cadeau' }
    })
    .state('gift.vinibar.pay', {
      url: '/paiement',
      templateUrl: 'gift/pay.tpl.html',
      controller: 'giftPayCtrl',
      data: { pageTitle: 'Cadeau' }
    });
})

.controller('giftVinibarCtrl', function giftVinibarCtrl (Mixpanel, $scope, $rootScope, $state, Gift, params, toaster, $window) {
  var init = function () {
    $scope.gift = new Gift('Vinibar');
    $scope.gift.order.delivery_mode = 'Point Relais';
    $scope.costs = params;

    $scope.goTo = function (state) {
      Mixpanel.track('Selected gift_card options', {
        credits: $scope.gift.order.credits,
        delivery_mode: $scope.gift.order.delivery_mode
      });
      $state.go(state);
    };

    $scope.is = {
      client: true
    };

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
    $scope.$watch('gift.order.delivery_mode', function (newObj, OldObj) {
      updateCosts();
    });
    $scope.$watch('details.credits', function (newVal, OldVal) {
      $scope.gift.order.credits = (newVal) ? 60 : 0;
    });

    var updateCosts = function () {
      $scope.details.total = 69 + params.vinibar[$scope.gift.order.delivery_mode];
      $scope.gift.order.delivery_cost = params.vinibar[$scope.gift.order.delivery_mode];
    };
  };

  init();

  $scope.toSurvey = function (form) {
    form.submitted = true;

    /*****************
      the form is valid
    *****************/
    if (form.$valid) {
      // if it's a new prospect
      if (!$scope.is.client) {
        console.log('it\'s a new prospect');
        $scope.load = true;

        $scope.gift.createGiver()
          .then(function (response) { // account creation success
            toaster.pop('success', 'Bravo !', ' Votre compte a été créé');
            $window.sessionStorage.token = response.data.token;
            Mixpanel.alias(response.data.uuid);
            Mixpanel.people.set({
              "First Name": response.data.first_name,
              "Email ": response.data.email,
              "Last Name": response.data.last_name
           });

            $scope.gift.createGiftOrder()
              .then(function (response) { // order creation success
                Mixpanel.track('New prospect created a ' + $scope.gift.order.gift_type + 'gift order');
                $scope.gift.receiver.receiver_email = $scope.gift.order.receiver_email;
                $scope.gift.receiver.gift_uuid = response.data.uuid;
                $scope.load = false;
                $state.go('gift.vinibar.quiz');

              }, function (error) { // order creation error
                if (error.data === 'User with this email is already a client') {
                  toaster.pop('info', 'Oops !', 'Cet utilisateur est déjà un de nos clients');
                } else {
                  toaster.pop('info', 'Oops !', 'Il y a eu une erreur de connexion');
                }
              });

          }, function (error) {// account creation error
            toaster.pop('info', 'Oops !', 'Il y a eu une erreur de connexion');
          });

      // if it's a client
      } else if ($scope.is.client) {
        console.log('it\'s a client');
        $scope.load = true;

        $scope.gift.logGiver().then(

          function (response) { // login success
            toaster.pop('success', 'Bravo !', ' Vous êtes bien loggué');
            $window.sessionStorage.token = response.data.token;
            $scope.gift.giver.first_name = response.data.first_name;
            $scope.gift.giver.last_name = response.data.last_name;

            $scope.gift.createGiftOrder()
              .then(function (response) { // order creation success
                Mixpanel.track('Client created a ' + $scope.gift.order.gift_type + 'gift order');
                $scope.gift.receiver.receiver_email = $scope.gift.order.receiver_email;
                $scope.gift.receiver.gift_uuid = response.data.uuid;
                $scope.load = false;
                $state.go('gift.vinibar.quiz');

              }, function (error) { // order creation error
                if (error.data === 'User with this email is already a client') {
                  toaster.pop('info', 'Oops !', 'Cet utilisateur est déjà un de nos clients');
                } else {
                  toaster.pop('info', 'Oops !', 'Il y a eu une erreur de connexion');
                }
              });

          }, function (error) { // login error
            toaster.pop('info', 'Oops !', 'Il y a eu une erreur de connexion');
          });

      } else { // if there are no login credentials
        toaster.pop('infos', 'Oops !', 'Merci de vous connecter ou de créer un compte');
      }

    /********************
      the form is not valid
    *********************/
    } else {
      toaster.pop('infos', 'Oops !', ' Vous avez oublié des champs');
    }
  };

  $scope.sendSurvey = function () {
    $scope.gift.sendSurvey().then(function (response) {
      Mixpanel.track('Filled gift survey');
      $state.go('gift.vinibar.pay');
    });
  };

});
