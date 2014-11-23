angular.module('mondialrelay', [
	'ui.router',
	'ui.bootstrap',
	'toaster'
])

.config(function config ($stateProvider) {
	$stateProvider
		.state('mondialrelay', {
			url: '/mondialrelay/:orderid/:zipcode',
			views: {
				"main": {
					controller: 'mondialrelayCtrl',
					templateUrl: 'mrelay/mrelay.tpl.html'
				}
			},
			data: { pageTitle: 'Mondial Relay' }
		});
})

.constant('API_ENDPOINT', 'http://127.0.0.1:8000/api')
.controller('mondialrelayCtrl', function mondialrelayCtrl ($scope, $stateParams, $http, $state, API_ENDPOINT, toaster, $timeout) {

	var order_id = $stateParams.orderid;
	var zipcode = $stateParams.zipcode;
	var shop = "";

	$scope.jQueryselect = $("#Retour_Widget").val();

	// /!\ JQUERY /!\ TRIGGER MONDIAL RELAY
	$("#Zone_Widget").MR_ParcelShopPicker({
		PostCode: zipcode,
		Target: "#Retour_Widget",  // selecteur jquery ou renvoyer l'ID du relais selectionné
		OnParcelShopSelected: function (Data) {
			shop = Data;
			shop.concat_ID = Data.Pays + '-' + Data.ID; // Build shop ID with the callback function
		},
		Brand: "EC004507",  // votre code client
		Country: "FR"  /* pays*/
	});

	$scope.sendMR = function ()  {

			// LET'S CHECK IF THE USER CLICKED ON SOME SHOP
			if(shop) {
				var data = {
					'shop_id': shop.concat_ID,
					'order_id': order_id
				};

				var request = $http({
												url: API_ENDPOINT + '/orders/pickmrshop/',
												method: 'POST',
												data: data,
												headers: {
													'Content-Type': 'application/json; charset=UTF-8'
												}
				})
				.success(function (data, status, headers, config) {
					toaster.pop('success', 'Votre point de réservation a été enregistré', 'A bientôt');
					$timeout(function () { $window.location.href = 'http://facebook.com/vinify.co';}, 40000);
				})
				.error(function (data, status, headers, config) {
					toaster.pop('error', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
				});

				return request;
			}

			else {alert('Merci de sélectionner un magasin');}
	};

	$scope.changeDelivery = function ()  {

			var data = {
				'order_id': order_id
			};

			var request = $http({
											url: API_ENDPOINT + 'orders/changedeliverymode/',
											method: 'POST',
											data: data,
											headers: {
												'Content-Type': 'application/json; charset=UTF-8'
											}
			})
			.success(function (data, status, headers, config) {
				$state.go('paiement.login');
			})
			.error(function (data, status, headers, config) {
				alert('Une erreur est survenue, merci de réessayer');
			});

			return request;
	};



});