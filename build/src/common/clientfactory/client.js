
angular.module('clientFactory', [])
	.constant('API_ENDPOINT','http://127.0.0.1:8000/api')

	//  The Client Factory is used to instantiate a new client
	.factory('Client', ['$http' , '$state', 'API_ENDPOINT',  function ($http, $state, API_ENDPOINT) {

			// Survey constructor
			var Survey = function() {

				this.quest_1 = { //Coffee
					answ: 0  // 1,1,Coffee - Black  // 1,2,Coffee - Sugar  // 1,3,Coffee - Cream // 1,4,Coffee - No
				};
				this.quest_2 = { // Drink
					answ: 0 // 2,1,Drink - Grapefruit // 2,2,Drink - Apple // 2,3,Drink - Exotic
				};
				this.quest_3 = { // Cuisine
					answ_1: false, // 3,1,Cuisine - French
					answ_2: false, // 3,2,Cuisine - Italian
					answ_3: false, // 3,3,Cuisine - Asian
					answ_4: false, // 3,4,Cuisine - American
					answ_5: false // 3,5,Cuisine - Vegetarian
				};
				this.quest_4 = { // Starter
					answ_1: false, // 4,1,Starter - Oister
					answ_2: false, // 4,2,Starter - Toast
					answ_3: false, // 4,3,Starter - Foie
					answ_4: false // 4,4,Starter - No
				};
				this.quest_5 = { // Desert
					answ_1: false, // 5,1,Dessert - Millefeuille
					answ_2: false, // 5,2,Dessert - Ganache
					answ_3: false, // 5,3,Dessert - Carpaccio
					answ_4: false // 5,4,Dessert - No
				};
				this.quest_6 = { // Balance
					answ_1: 4, // Red
					answ_2: 4, // White
					answ_3: 4 // Rose
				};
				this.quest_7 = { // Region
					answ: null
				};
				this.quest_8 = { // Comment
					answ: null
				};
				this.quest_9 = { // Price
					answ: null //2,1,Price - 5-10€ // 2,2,Price - 10-15€ // 2,3,Price - 15-20€ // 2,4,Price - 20 & +
				};

			};

			// Profile constructor
			var Profile = function() {

			};

			// Userinfos constructor
			var Userinfos = function() {
				this.same_billing = true;
				this.billing_address = {};
				this.delivery_address = {};
				this.billing_address.company = "";
				this.billing_address.other_info = "";
				this.delivery_address.company = "";
				this.delivery_address.other_info = "";
				this.delivery_address.country = "";
				this.billing_address.country = "";
				this.delivery_mode = null;
			};


			// instantiate our initial object
			var Client = function() {
					this.uuid = "",
					this.first_name = null,
					this.last_name = null,
					this.email = null;
					this.password = null;
					this.profile = new Profile();
					this.survey = new Survey();
					this.userinfos = new Userinfos();
					this.order_type = null;
					this.referral = null;
					this.coupon = null;
					this.order = {};
			};

			Client.prototype.createUser = function() {

				var self = this;
				var data = {};
				data.survey = this.survey;
				data.email = this.email;
				data.password = this.password;
				data.first_name = this.first_name;
				data.last_name = this.last_name;
				var request = $http({
														url: API_ENDPOINT + '/users/createuser/',
														method: 'POST',
														data: data,
														headers: {
															'Content-Type': 'application/json; charset=UTF-8'
														}
													});

					return request
								.success(function(data, status, headers, config){
									self.uuid = data.uuid;
								});
			};

			Client.prototype.addUserInfo = function() {

				if(this.userinfos.same_billing)
					{ this.userinfos.billing_address = this.userinfos.delivery_address; }
				console.log(this);
				var data = this.userinfos;
				console.log(data);
				data.delivery_address.first_name =data.first_name;
				data.delivery_address.last_name =data.last_name;
				data.delivery_address.user = this.uuid;
				data.billing_address.user = this.uuid;

				var request = $http({
															url: API_ENDPOINT + '/users/adduserinfo/',
															method: 'POST',
															data: data,
															headers: {
																'Content-Type': 'application/json; charset=UTF-8'
															}
														});

						return request;
			};

			return Client;

	}])

	// the currentClient Factory gives the current Client we're working with
	.factory('currentClient', [function () {
		return {
			currentClient: null,
			reset: function(){
				this.currentClient = null;
			}
		};
	}]);