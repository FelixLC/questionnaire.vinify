angular.module( 'vinibar.questionnaire', [
	'ui.router',
	'placeholders',
	'ui.bootstrap',
	'ngAutocomplete',
	'toaster'
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
		.state( 'questionnaire.cuisine', {
			url: '/cuisine',
			templateUrl: 'questionnaire/parts/questionnaire.cuisine.tpl.html'
		})
		.state( 'questionnaire.winemap', {
			url: '/winemap',
			templateUrl: 'questionnaire/parts/questionnaire.winemap.tpl.html'
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
.constant('API_ENDPOINT','https://powerful-cliffs-5344.herokuapp.com/api')
.controller( 'questionnaireCtrl', function questionnaireCtrl( $scope, $http, $location, Client , currentClient, $state, $rootScope, $modal, $log, $timeout, API_ENDPOINT, toaster) {

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

	$scope.region= {selected : null, hover: null};
	$scope.enter= function(region) {
			$scope.region.hover = region;
	};

	$scope.leave= function(region) {
			$scope.region.hover = null;
	};

	$scope.select= function(region) {
		$scope.newuser.survey.quest_7.answ = region;
	};


	// Please note that $modalInstance represents a modal window (instance) dependency.
	// It is not the same as the $modal service used above.

	var ModalInstanceCtrl = function ($scope, $modalInstance, $http) {

		$scope.selectedEmail = {
			email: null
		};

		$scope.ok = function () {
			if($scope.selectedEmail.email) {
					// mixpanel.track('Questionnaire Démarré', {email: $scope.selectedEmail.email});
					$http.post(API_ENDPOINT + '/users/createprospect/', {email: $scope.selectedEmail.email});
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
		if ( $scope.newuser.survey.quest_6.answ_1 === 4 ||  $scope.newuser.survey.quest_6.answ_2 === 4 ||  $scope.newuser.survey.quest_6.answ_3 === 4) {
			toaster.pop('info', 'Merci de choisir une préférence pour chaque type de vin', ' puis valider avec la flèche');
			console.log('error');
		} else if ( $scope.newuser.survey.quest_6.answ_1 === 0 &&  $scope.newuser.survey.quest_6.answ_2 === 0 &&  $scope.newuser.survey.quest_6.answ_3 === 0) {
			toaster.pop('info', 'Vous ne voulez pas de vins dans votre Vinibar ?');
		} else {
			$state.go('questionnaire.winemap');
		}

	};

	$scope.validateCuisineAnswer = function() {

		//  CHECK IF ALL cuisines ARE NOT SET TO false (DEFAULT VALUE)
		if ( $scope.newuser.survey.quest_3.answ_1 === false &&  $scope.newuser.survey.quest_3.answ_2 === false &&  $scope.newuser.survey.quest_3.answ_3 === false &&  $scope.newuser.survey.quest_3.answ_4 === false &&  $scope.newuser.survey.quest_3.answ_5 === false) {
			toaster.pop('info', 'Merci de choisir au moins une cuisine', ' puis valider avec la flèche');
		} else {
			$scope.answerOne = false;
			$state.go('questionnaire.starter');
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
	var winemap_bckg = new Image ();
			winemap_bckg.src = "assets/winery.jpg";



	$scope.createUser = function(name, user, tastes) {
		console.log(name);
		console.log(user);
		console.log(tastes);
		// IF FORM IS VALID
		if (name.$valid && user.$valid) {
				$rootScope.loading = true;
				$scope.showFormEmailError = false;
				$scope.showFormErrors = false;
				currentClient.currentClient = $scope.newuser;
				currentClient.currentClient.userinfos.first_name = $scope.newuser.first_name;
				currentClient.currentClient.userinfos.last_name = $scope.newuser.last_name;

				$scope.newuser.createUser().success(function(data, status, headers, config) {

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
			toaster.pop('info', 'Oops, votre adresse email ne semble pas valide');
		}

	// OTHER NOT VALID INPUTS
		else {
			var strings =[];
			if (name.first_name.$invalid) { strings.push('Prénom');}
			if (name.last_name.$invalid) { strings.push('Nom');}
			if (user.password.$invalid) { strings.push('Mot de passe');}
			if (user.email.$invalid) { strings.push('Email');}
			toaster.pop('info', 'Le(s) champ(s) suivant(s) sont requis :', strings.toString(" "));
		}
	};

});