angular.module('vinibar.questionnaire', [
  'ui.router',
  'ui.bootstrap',
  'Resources',
  'ngAutocomplete',
  'settings',
  'Mixpanel',
  'receiverService',
  'toaster',
  'split'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('questionnaire', {
      url: '/questionnaire',
      views: {
        main: {
          controller: 'questionnaireCtrl',
          templateUrl: 'questionnaire/questionnaire.tpl.html'
        }
      },
      resolve: {
          promiseObj:  function ($http, $templateCache) {
            // $http returns a promise for the url data
            return $http.get('assets/fruits.jpg', { cache: $templateCache });

          }
      },
      data: { pageTitle: 'Questionnaire' }
    })
    .state('questionnaire.coffee', {
      url: '/coffee?r',
      templateUrl: 'questionnaire/parts/questionnaire.coffee.tpl.html'
    })
    .state('questionnaire.balance', {
      url: '/balance',
      templateUrl: 'questionnaire/parts/questionnaire.balance.tpl.html'
    })
    .state('questionnaire.comments', {
      url: '/comments',
      templateUrl: 'questionnaire/parts/questionnaire.comments.tpl.html'
    })
    .state('questionnaire.cuisine', {
      url: '/cuisine',
      templateUrl: 'questionnaire/parts/questionnaire.cuisine.tpl.html'
    })
    .state('questionnaire.winemap', {
      url: '/winemap',
      templateUrl: 'questionnaire/parts/questionnaire.winemap.tpl.html'
    })
    .state('questionnaire.juice', {
      url: '/juice',
      templateUrl: 'questionnaire/parts/questionnaire.juice.tpl.html'
    })
    .state('questionnaire.profile', {
      url: '/profile',
      templateUrl: 'questionnaire/parts/questionnaire.profile.tpl.html'
    })
    .state('questionnaire.starter', {
      url: '/starter',
      templateUrl: 'questionnaire/parts/questionnaire.starter.tpl.html'
    });
})

.controller('questionnaireCtrl', function questionnaireCtrl ($document,
                                                                                      Mixpanel,
                                                                                      Recommender,
                                                                                      Receive,
                                                                                      $scope,
                                                                                      $http,
                                                                                      $location,
                                                                                      Client,
                                                                                      currentClient,
                                                                                      $state,
                                                                                      $rootScope,
                                                                                      $modal,
                                                                                      $log,
                                                                                      $timeout,
                                                                                      toaster,
                                                                                      $window,
                                                                                      $stateParams,
                                                                                      settings,
                                                                                      split) {

  $scope.is = { contest: currentClient.isContest };

  console.log(currentClient);
  currentClient.initial_referrer = ($stateParams.r) ? $stateParams.r : $window.document.referrer;

  $window.onbeforeunload = function () {
    if (!settings.test) {
      return "Attention, si vous rafraichissez la page, vous perderez vos données!";
    }
  };

  $scope.region = { selected: null, hover: null };
  $scope.enter = function (region) {
    $scope.region.hover = region;
  };

  $scope.leave = function (region) {
    $scope.region.hover = null;
  };

  $scope.select = function (region) {
    $scope.newuser.survey.quest_7.answ = ($scope.newuser.survey.quest_7.answ === region) ?
                                                        "" : $scope.newuser.survey.quest_7.answ = region;
  };

  $scope.unSelect = function () {
    $scope.newuser.survey.quest_7.answ = "";
  };


  // Please note that $modalInstance represents a modal window (instance) dependency.
  // It is not the same as the $modal service used above.

  var ModalInstanceCtrl = function ($scope, $modalInstance, $http) {

    $scope.selectedEmail = {
      email: null
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selectedEmail.email);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };

  Mixpanel.track('Questionnaire Ouvert');
  $scope.form_print = function (form) {
    $scope.output = form;
  };

  $scope.validateBalanceAnswer = function () {

    // CHECK IF ALL BALANCE ARE NOT SET TO 4 (DEFAULT VALUE)
    if ($scope.newuser.survey.quest_6.answ_1 === 4 ||
          $scope.newuser.survey.quest_6.answ_2 === 4 ||
          $scope.newuser.survey.quest_6.answ_3 === 4) {
      toaster.pop('info', 'Merci de choisir une préférence pour chaque type de vin', ' puis valider avec la flèche');
      console.log('error');
    } else if ($scope.newuser.survey.quest_6.answ_1 === 0 &&
                      $scope.newuser.survey.quest_6.answ_2 === 0 &&
                      $scope.newuser.survey.quest_6.answ_3 === 0) {
      toaster.pop('info', 'Vous ne voulez pas de vins dans votre Vinibar ?');
    } else {
      $state.go('questionnaire.winemap');
    }
  };

  $scope.validateCuisineAnswer = function () {

    // CHECK IF ALL cuisines ARE NOT SET TO false (DEFAULT VALUE)
    if ($scope.newuser.survey.quest_3.answ_1 === false &&
          $scope.newuser.survey.quest_3.answ_2 === false &&
          $scope.newuser.survey.quest_3.answ_3 === false &&
          $scope.newuser.survey.quest_3.answ_4 === false &&
          $scope.newuser.survey.quest_3.answ_5 === false) {
      toaster.pop('info', 'Merci de choisir au moins une cuisine', ' puis valider avec la flèche');
    } else {
      $scope.answerOne = false;
      $state.go('questionnaire.starter');
    }

  };

  $scope.regions = [
    'Je n\'en ai pas',
    'Bourgogne',
    'Vallée de la Loire',
    'Alsace',
    'Vallée du Rhône',
    'Bordeaux'
  ];

  $scope.newuser = new Client();
  $scope.newuser.first_name = (currentClient.isGift && Receive.coupon.user.first_name) ?
                                                            Receive.coupon.user.first_name : "";
  $scope.newuser.last_name  = (currentClient.isGift && Receive.coupon.user.last_name) ?
                                                            Receive.coupon.user.last_name : "";
  $scope.newuser.email = (currentClient.isGift && Receive.coupon.user.email) ?
                                                  Receive.coupon.user.email :  "";
  $scope.newuser.coupon = $stateParams.p ? $stateParams.p : "";

  var validateAnswers = function (success) {
    if ($scope.newuser.survey.quest_1.answ === 0) {
      toaster.pop('info', 'Oops !', 'Merci de choisir une préférence pour le café');
    } else if ($scope.newuser.survey.quest_2.answ === 0) {
      toaster.pop('info', 'Oops !', 'Merci de choisir une préférence pour les jus');
    } else if (!$scope.newuser.survey.quest_3.answ_1 &&
          !$scope.newuser.survey.quest_3.answ_2 &&
          !$scope.newuser.survey.quest_3.answ_3 &&
          !$scope.newuser.survey.quest_3.answ_4 &&
          !$scope.newuser.survey.quest_3.answ_5) {
      toaster.pop('info', 'Oops !', 'Merci de choisir au moins une cuisine');
    } else if ($scope.newuser.survey.quest_6.answ_1 === 4 ||
      $scope.newuser.survey.quest_6.answ_2 === 4 ||
      $scope.newuser.survey.quest_6.answ_3 === 4) {
      toaster.pop('info', 'Oops !', 'Merci de choisir une préférence pour chaque type de vin');
    } else {
      success();
    }
  };

  $scope.predictive = {
    split: function (arr, color) {
      var hash = (arr.answ_1 * 17 + arr.answ_2 * 19 + arr.answ_3 * 23);
      return split[hash][color];
    },
    plural: function (num) {
      return (num > 1) ? 's' : '';
    }
  };

  $scope.createUser = function (name, user, tastes) {
    validateAnswers(function () {
      // IF FORM IS VALID
      if (name.$valid && user.$valid) {
        delete $window.sessionStorage.token;
        $rootScope.loading = true;
        $scope.showFormEmailError = false;

        $scope.showFormErrors = false;
        var referrer = currentClient.initial_referrer;
        currentClient.currentClient = $scope.newuser;
        currentClient.currentClient.userinfos.first_name = $scope.newuser.first_name;
        currentClient.currentClient.userinfos.last_name = $scope.newuser.last_name;
        var couponUuid = (currentClient.isGift && Receive.coupon.uuid) ? Receive.coupon.uuid : false;

        // creates user, or receiver, if couponUuid != false
        $scope.newuser.createUser(referrer, couponUuid)
          .success(function (data, status, headers, config) {
            $window.sessionStorage.token = data.token;
            Mixpanel.alias(data.uuid);
            Mixpanel.people.set({
              "First Name": data.first_name,
              "Email ": data.email,
              "Last Name": data.last_name
            });
            Mixpanel.track('User Created', { referrer: (currentClient.isGift) ? 'Gift' : $document.referrer });
            if (currentClient.isGift) {// if we have a gift activation
              $state.go('order.userinfos');
              $rootScope.loading = false;
            } else if ($scope.is.contest) {// if we don't have a gift activation
              $state.go('contest_congratulation');
              $rootScope.loading = false;
            } else {// new prospect
              Recommender.calcPreview(data.uuid)
                .then(function (response) {
                  $state.go('preview');
                  $rootScope.loading = false;
                },
                function (response) {
                  $rootScope.loading = false;
                  $state.go('remerciement_fail');
                  // toaster.pop('info', 'Oops, il y a eu une erreur de connexion');
                });
            }
          })
          .error(function (data, status, headers, config) {
            $rootScope.loading = false;
            toaster.pop('info', 'Oops, cet email est déjà associé à un compte');
            console.log('error @ createOrder');
          });
      // IF EMAIL IS NOT VALID
      } else if (user.email.$invalid) {
        toaster.pop('info', 'Oops, votre adresse email ne semble pas valide');

      // OTHER NOT VALID INPUTS
      } else {
        var strings  = [];
        if (name.first_name.$invalid) { strings.push('Prénom'); }
        if (name.last_name.$invalid) { strings.push('Nom'); }
        if (user.password.$invalid) { strings.push('Mot de passe'); }
        if (user.email.$invalid) { strings.push('Email');}
        toaster.pop('info', 'Le(s) champ(s) suivant(s) sont requis :', strings.toString(" "));
      }
    });
  };

});