angular.module( 'vinibar.questionnaire', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngAutocomplete'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'questionnaire', {
      url: '/questionnaire',
      views: {
        "main": {
          controller: 'questionnaireCtrl',
          templateUrl: 'questionnaire/questionnaire.tpl.html'
        }
      },
      resolve: {
          promiseObj:  function($http, $templateCache){
            // $http returns a promise for the url data
            return $http.get('assets/fruits.jpg', {cache:$templateCache});

         }
      },
      data:{ pageTitle: 'questionnaire' }
    })
    .state( 'questionnaire.coffee', {
      url: '/coffee',
      templateUrl: 'questionnaire/parts/questionnaire.coffee.tpl.html'
    })
    .state( 'questionnaire.balance', {
      url: '/balance',
      templateUrl: 'questionnaire/parts/questionnaire.balance.tpl.html'
    })
    .state( 'questionnaire.comments', {
      url: '/comments',
      templateUrl: 'questionnaire/parts/questionnaire.comments.tpl.html'
    })
    .state( 'questionnaire.discoverycomments', {
      url: '/discovery_comments',
      templateUrl: 'questionnaire/parts/questionnaire.discovery.comments.tpl.html'
    })
    .state( 'questionnaire.cuisine', {
      url: '/cuisine',
      templateUrl: 'questionnaire/parts/questionnaire.cuisine.tpl.html'
    })
    .state( 'questionnaire.desert', {
      url: '/desert',
      templateUrl: 'questionnaire/parts/questionnaire.desert.tpl.html'
    })
    .state( 'questionnaire.juice', {
      url: '/juice',
      templateUrl: 'questionnaire/parts/questionnaire.juice.tpl.html'
    })
    .state( 'questionnaire.profile', {
      url: '/profile',
      templateUrl: 'questionnaire/parts/questionnaire.profile.tpl.html'
    })
    .state( 'questionnaire.starter', {
      url: '/starter',
      templateUrl: 'questionnaire/parts/questionnaire.starter.tpl.html'
    });
})


.controller( 'questionnaireCtrl', function questionnaireCtrl( $scope, $http, $location, Client , currentClient, $state, $rootScope, $modal, $log, $timeout) {
        // modal

        $scope.open = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            size: size,
            keyboard: false,
            backdrop: 'static'
          });

          modalInstance.result.then(function (email) {
            $scope.newuser.email = email;
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
        };


      // Please note that $modalInstance represents a modal window (instance) dependency.
      // It is not the same as the $modal service used above.

      var ModalInstanceCtrl = function ($scope, $modalInstance) {

        $scope.selectedEmail = {
          email: null
        };

        $scope.ok = function () {
          if($scope.selectedEmail.email) {
              mixpanel.track('Questionnaire Démarré', {email: $scope.selectedEmail.email});
              $modalInstance.close($scope.selectedEmail.email);
          }
        };

        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      };
      //! modal

      // opening the modal when loading
      $scope.open('lg');

  mixpanel.track('Questionnaire Ouvert');
  $scope.form_print = function (form) {
    $scope.output = form;
  };

  $scope.validateBalanceAnswer = function() {

    //  CHECK IF ALL BALANCE ARE NOT SET TO 4 (DEFAULT VALUE)
    if ( $scope.newuser.survey.balance.red == 4 ||  $scope.newuser.survey.balance.white === 4 ||  $scope.newuser.survey.balance.rose === 4) {
      $scope.answerAll = true;
          }

    else {
      $scope.answerAll = false;
      $state.go('questionnaire.comments');
    }

  };

  $scope.maximum = 1; //progressbar
  $scope.progress = function(){
    if($state.is('questionnaire.coffee'))
      {return 1/6;}
    if($state.is('questionnaire.juice'))
      {return 2/6;}
    if($state.is('questionnaire.cuisine'))
      {return 3/6;}
    if($state.is('questionnaire.starter'))
      {return 4/6;}
    if($state.is('questionnaire.balance'))
      {return 5/6;}
    if($state.is('questionnaire.profile'))
      {return 6/6;}
  }; //progressbar

  $scope.regions = [
    'Je ne sais pas',
    'Alsace',
    'Provence - Corse',
    'Sud-Ouest',
    'Beaujolais',
    'Vallée du Rhône',
    'Bordeaux',
    'Vallée de la Loire',
    'Bourgogne',
    'Languedoc',
    'Graves',
    'Champagne',
    'Savoie'
  ];

  // $scope.trackLink = function(n) {
  //   $scope.newuser.survey.balance.red = 2;
  //   mixpanel.track('clicked on your face');
  // };

  $scope.newuser = new Client();
  var juice_bckg = new Image ();
    juice_bckg.src = "assets/fruits.jpg";
  var cuisine_bckg = new Image ();
    cuisine_bckg.src = "assets/spices.jpg";
  var starter_bckg = new Image ();
    starter_bckg.src = "assets/millefeuille.jpg";
  var balance_bckg = new Image ();
      balance_bckg.src = "assets/vineyard.jpg";
  var comments_bckg = new Image ();
      comments_bckg.src = "assets/vinibar3.jpg";



  $scope.createUser = function(name, user, tastes) {
    // IF FORM IS VALID
    if (name.$valid && user.$valid && tastes.$valid) {
        $rootScope.loading = true;
        $scope.showFormEmailError = false;
        $scope.showFormErrors = false;
        currentClient.currentClient = $scope.newuser;
        currentClient.currentClient.userinfos.first_name = $scope.newuser.first_name;
        currentClient.currentClient.userinfos.last_name = $scope.newuser.last_name;

        $scope.newuser.createUser()
                          .success(function(data, status, headers, config) {

                                $state.go('order.userinfos');
                                // $state.go('remerciement');
                                $rootScope.loading = false;
                            })

                          .error(function(data, status, headers, config) {
                                $rootScope.loading = false;
                                $scope.invalidLogin = true;
                                console.log('error @ createOrder');
                            });
        mixpanel.register($scope.newuser);
        mixpanel.track('User Created');

    }

    // IF EMAIL IS NOT VALID
    else if (user.email.$invalid) {
      $scope.showFormEmailError = true;
    }

  // OTHER NOT VALID INPUTS
    else {
      $scope.showFormEmailError = false;
      $scope.showFormErrors = true;
    }
  };

  // $scope.createDiscoveryUser = function() {

  //   $scope.newuser.password = 'cabernet82';
  //   var request = $http({
  //                         url: '/creatediscoveryuser/',
  //                         method: 'POST',
  //                         data: $scope.newuser,
  //                         headers: {
  //                           'Content-Type': 'application/json; charset=UTF-8'
  //                         }
  //                       })

  //                       .success(function(data, status, headers, config) {
  //                             User.currentUser = data;
  //                             $state.go('remerciement');
  //                         })

  //                       .error(function(data, status, headers, config) {
  //                             $state.go('remerciement');
  //                         });

  //       return request;
  // };

  $scope.questionnaire = {};
  $scope.rate = 3;
  $scope.max = 3;

});