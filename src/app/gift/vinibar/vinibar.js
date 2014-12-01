angular.module('vinibar.gift.vinibar', [
  'ui.router',
  'clientFactory',
  'ui.bootstrap',
  'Resources',
  'params',
  'settings',
  'toaster',
  'Mixpanel'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('gift.vinibar', {
      url: '/vinibar?test',
      abstract: true,
      template: '<ui-view/>'
    })
    .state('gift.vinibar.details', {
      url: '/formule',
      controller: 'giftVinibarCtrl',
      templateUrl: 'gift/vinibar/details.tpl.html',
      data: { pageTitle: 'Cadeau' }
    })
    .state('gift.vinibar.infos', {
      url: '/infos',
      controller: 'giftInfosVinibarCtrl',
      templateUrl: 'gift/vinibar/infos.tpl.html',
      data: { pageTitle: 'Cadeau' }
    })
    .state('gift.vinibar.quiz', {
      url: '/quiz',
      controller: 'giftQuizVinibarCtrl',
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

.controller('giftVinibarCtrl', function giftVinibarCtrl (Mixpanel, $scope, $rootScope, $state, Gift, currentGift, $stateParams, params, settings, toaster, $window) {

  var init = function () {
    $scope.costs = params;

    $scope.details = {
      total: "",
      product: 69,
      credits: true
    };

    $scope.vinibar = {
      refill: 59.80
    };
    if ($stateParams.test) {
      settings.test = true;
    }

    $scope.$watch('gift.order.delivery_mode', function (newObj, OldObj) {
      $scope.gift.order.delivery_cost = ($scope.gift.order.gift_type === 'Vinibar') ? params.vinibar[$scope.gift.order.delivery_mode] : params.card[$scope.gift.order.gift_type];
    });
    $scope.$watch('gift.order.gift_type', function (newObj, OldObj) {
      $scope.gift.order.delivery_cost = ($scope.gift.order.gift_type === 'Vinibar') ? params.vinibar[$scope.gift.order.delivery_mode] : params.card[$scope.gift.order.gift_type];
    });
    $scope.$watch('details.credits', function (newVal, OldVal) {
      $scope.gift.order.credits = (newVal) ? 60 : 0;
    });
  };

  $scope.initVB = function () {
    if ($scope.gift) {
      if ($scope.gift.order.gift_type != 'Vinibar') {
        $scope.gift = new Gift('Vinibar');
        $scope.gift.order.delivery_mode = 'Point Relais';
      }
    } else {
        $scope.gift = new Gift('Vinibar');
        $scope.gift.order.delivery_mode = 'Point Relais';
    }
  };

  $scope.initCard = function () {
    if ($scope.gift.order.gift_type === 'Vinibar') {
      $scope.gift = new Gift('Email');
      console.log($scope.gift);

      $scope.sendDate = {};
      var date = new Date();

      $scope.sendDate = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      };
    }
  };

  $scope.initVB();
  init();

  $scope.goTo = function (state) {
    if ($scope.gift.order.gift_type === 'Email') {
      $scope.gift.order.send_date = ($scope.sendDate.day && $scope.sendDate.month && $scope.sendDate.year) ?
                        $scope.sendDate.year + "-" + $scope.sendDate.month + "-" + $scope.sendDate.day : "";
    }
    currentGift.current = $scope.gift;
    Mixpanel.track('Selected gift_card options', {
      credits: $scope.gift.order.credits,
      gift_type: $scope.gift.order.gift_type
    });
    $state.go(state);
  };
})
.controller('giftInfosVinibarCtrl', function giftInfosVinibarCtrl (Mixpanel, $scope, $rootScope, $state, Gift, currentGift, $stateParams, params, settings, toaster, $window) {
  $scope.gift = currentGift.current;
  $scope.is = {
    client: true
  };

  $scope.submit = function (form) {
    form.submitted = true;
    $scope.gift.giver.initial_referrer = $window.document.referrer;
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
                console.log($scope.gift);
                $scope.load = false;
                if ($scope.gift.order.gift_type === 'Vinibar') {
                  currentGift.current = $scope.gift;
                  $state.go('gift.vinibar.quiz');
                } else {
                  currentGift.current = $scope.gift;
                  console.log(currentGift.current);
                  $state.go('gift.pay');
                }
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
                Mixpanel.track('Client created a ' + $scope.gift.order.gift_type + ' gift order');
                $scope.gift.receiver.receiver_email = $scope.gift.order.receiver_email;
                $scope.gift.receiver.gift_uuid = response.data.uuid;
                console.log($scope.gift);
                $scope.load = false;
                if ($scope.gift.order.gift_type === 'Vinibar') {
                  currentGift.current = $scope.gift;
                  $state.go('gift.vinibar.quiz');
                } else {
                  currentGift.current = $scope.gift;
                  console.log(currentGift.current);
                  $state.go('gift.pay');
                }

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
})
.controller('giftQuizVinibarCtrl', function giftQuizVinibarCtrl (Mixpanel, $scope, $state, currentGift) {
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
  $scope.gift = currentGift.current;
  $scope.sendSurvey = function () {
    $scope.gift.sendSurvey().then(function (response) {
      Mixpanel.track('Filled gift survey');
      currentGift.current = $scope.gift;
      console.log(currentGift);
      $state.go('gift.pay');
    });
  };
});