angular.module( 'vinibar.order', [
	'ui.router',
	'placeholders',
	'ui.bootstrap',
	'ngAutocomplete',
	'mondialRelay',
	'toaster'
])

.config(function config( $stateProvider ) {
	$stateProvider
		.state( 'order', {
			url: '/order',
			views: {
				"main": {
					controller: 'orderCtrl',
					templateUrl: 'order/order.tpl.html'
				}
			},
			data:{ pageTitle: 'order' }
		})
		.state( 'order.userinfos', {
			url: '/infos',
			templateUrl: 'order/parts/order.userinfos.tpl.html'
		})
		.state( 'order.paiement', {
			url: '/paiement',
			templateUrl: 'order/parts/order.paiement.tpl.html'
		})
		.state( 'order.delivery', {
			url: '/delivery',
			templateUrl: 'order/parts/order.delivery.tpl.html'
		})
		.state( 'order.confirmation', {
			url: '/confirmation',
			templateUrl: 'order/parts/order.confirmation.tpl.html'
		});
})
.constant('API_ENDPOINT','https://api.vinify.co/api')
.controller( 'orderCtrl', function orderCtrl( $scope, $http, $location, currentClient, $state, $filter, $rootScope, API_ENDPOINT, toaster ) {

	$scope.client = currentClient.currentClient;
	$scope.coupon = {};
	$scope.b = {};
	$scope.delivery = {
		method: 2,
		cost: 11.90
	};

	$scope.$on('$stateChangeSuccess', function() {
		$scope.state = $state.current.name;
		console.log($scope.state );
	});

	$scope.updatedBirthday = $scope.b.birthdate + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;

	// $scope.$watch('b', function(newValues, oldValues){
	//   console.log("watch");
	//   $scope.updatedBirthday = newValues + "-" + $scope.birthmonth + "-" + $scope.birthday;
	// });

//  ADD SCOPE INFO TO FACTORY THEN TRIGGER ORDER IF SUCCESS
	$scope.addUserInfo = function(form) {

		if (form.$valid) { // THEN, IF THE FORM IS VALID
			// IF WE ARE HERE, A COUPON HAS BEEN ENTERED SO WE ERASE THE ERROR
			$rootScope.loading = true;
			console.log($scope.client);
			// THEN, IF THE COUPON IS VALID
			var request = $http({
									url: API_ENDPOINT +'/orders/vinibarorder/',
									method: 'POST',
									data: {'coupon' : $scope.coupon.coupon},
									headers: {
										'Content-Type': 'application/json; charset=UTF-8'
									}
								})

								.success(function(data, status, headers, config) {
									$scope.client.order = data;
									$scope.client.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
									// IF THE COUPON IS VALID WE LOG CLIENT INFO AND GO TO LAST SCREEN
									currentClient.currentClient = $scope.client;
									mixpanel.track('UserInfo Added');
									console.log($scope.client);
									$scope.client.addUserInfo()
																			.success(function(data, status, headers, config) {
																						console.log('success @ addUserInfo');
																						$state.go('order.paiement');
																						$rootScope.loading = false;
																						// $scope.createOrder();
																				})

																			.error(function(data, status, headers, config) {
																						$rootScope.loading = false;
																						console.log('error @ addUserInfo');
																				});

									})

								.error(function(data, status, headers, config) {
										$rootScope.loading = false;

										// IF THE COUPON IS NOT VALID WE TELL THE USER DEPENDING ON THE ERROR
										if (data === 'This code is not valid')
											{	toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

										else if (data === 'This coupon has been redeemed')
											{toaster.pop('info', 'Malheureusement, Tous les vinibar ont été vendus !', ' Pas de panique, nous reviendrons vers vous dès qu\'ils seront de nouveaux disponibles.');}

									});
				return request;
		}

		else {
			$rootScope.loading = false;
			toaster.pop('info', 'Oops', 'un ou plusieurs champs sont incomplets ou erronés.');
		}

	};

	// TRIGGER MONDIAL RELAY
	$scope.triggerMR = function() {
									$("#Zone_Widget").MR_ParcelShopPicker({
													CSS: 0,
													Target: "#Retour_Widget",  // selecteur jquery ou renvoyer l'ID du relais selectionné
													Brand: "BDTEST  ",  // votre code client
													Country: "FR"  /* pays*/  });

	};

	//  SEND ORDER REQUEST TO SERVER. IF SUCCESS UPDATE SCOPE WITH ORDER DATA AND TRANSITION TO CONFIRMATION
	$scope.createOrder = function() {

		var handler = StripeCheckout.configure({
			// key: "pk_test_sK21onMmCuKNuoY7pbml8z3Q",
			key: "pk_live_gNv4cCe8tsZpettPUsdQj25F",
			image: "assets/LogoVinifyMini2.png",
			token: function(token, args) {
				var data_order = token;
				data_order.order_uuid = $scope.client.order.uuid;
				data_order.delivery_cost = $scope.delivery_cost;
				data_order.delivery_mode = $scope.delivery_mode;

				var urlPOST = '/orders/chargevinibar/';

				if ($scope.client.order.order_type === "Refill")
					{urlPOST = '/orders/chargerefill/';}

				$http({
													url: API_ENDPOINT + urlPOST,
													method: "POST",
													data: data_order
									})
									.success(function(data, status, headers, config) {
										if ($scope.client.order.delivery_mode === 'Point Relais') {
											$http({
												url: apiEndPoint + '/orders/pickmremail/',
												method: "POST",
												data: { 'order_id': $scope.client.order.uuid },
												headers: {
													'Content-Type': 'application/json; charset=UTF-8'
												}
											});
										}
										$location.path('/remerciement_order');
										mixpanel.track('Sucessful payment');
									})
									.error(function(data, status, headers, config) {
										toaster.pop('info', 'Oops, Il y a eu une erreur avec votre commande', ' Veuillez réessayer ou contacter charlotte@vinify.co');
										mixpanel.track('Server Failed to proceed payment');

									});
			}
		});

		$scope.order_data = {
			'order_uuid': $scope.client.order.uuid,
			'delivery_cost': $scope.delivery.cost,
			'delivery_mode': $scope.delivery.mode
		};

		var request = $http({
													url: API_ENDPOINT + '/orders/updateorder/',
													method: 'POST',
													data: $scope.order_data,
													headers: {
														'Content-Type': 'application/json; charset=UTF-8'
													}
												})

												.success(function(data, status, headers, config) {
															$scope.client.order = data;
															console.log($scope.client.order.final_price * 100);
															console.log($scope.client.order.final_price);
															console.log(Math.floor($scope.client.order.final_price * 100));
															handler.open({
																name: "Vinify",
																description: "Vinibar",
																currency: "EUR",
																panelLabel: "Payer",
																amount: Math.floor($scope.client.order.final_price * 100),
																email: $scope.client.order.user.email
															});
															$rootScope.loading = false;

													})

												.error(function(data, status, headers, config) {
															console.log('error @ createOrder');
															$rootScope.loading = false;
													});

				return request;
	};

	// UPDATE DELIVERY METHOD & PRICE

	$scope.deliveryMethod = function(num) {

		if (num === 1) {  $scope.delivery.cost = 8.90;
											$scope.delivery.mode = 'Point Relais';}

		if (num === 2) {  $scope.delivery.cost = 11.90;
											$scope.delivery.mode = 'Colissimo'; }

		if (num === 3) {  $scope.delivery.cost = 0;
											$scope.delivery.mode = 'Vinify'; }
	};



	// FORM VALIDATOR
 $scope.form_commander_validator = function (form) {
	$scope.isFormValid = false;

	return !(form.birthday.$valid && form.first_name.$valid && form.last_name.$valid);
 };


})

.filter('characters', function () {
					return function (input, chars, breakOnWord) {
							if (isNaN(chars)) {return input;}
							if (chars <= 0) {return '';}
							if (input && input.length >= chars) {
									input = input.substring(0, chars);

									if (!breakOnWord) {
											var lastspace = input.lastIndexOf(' ');
											//get last space
											if (lastspace !== -1) {
													input = input.substr(0, lastspace);
											}
									}else{
											while(input.charAt(input.length-1) == ' '){
													input = input.substr(0, input.length -1);
											}
									}
									return input;
							}
							return input;
					};
});