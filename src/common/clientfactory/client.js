
angular.module('clientFactory', [])
	.constant('API_ENDPOINT','http://powerful-cliffs-5344.herokuapp.com/api')

	//  The Client Factory is used to instantiate a new client
	.factory('Client', ['$http' , '$state', 'API_ENDPOINT',  function ($http, $state, API_ENDPOINT) {

			// Survey constructor
			var Survey = function() {
// 1,1,Coffee - Black
// 1,2,Coffee - Sugar
// 1,3,Coffee - Cream
// 1,4,Coffee - No
// 2,1,Drink - Grapefruit
// 2,2,Drink - Apple
// 2,3,Drink - Exotic
// 3,1,Cuisine - French
// 3,2,Cuisine - Italian
// 3,3,Cuisine - Asian
// 3,4,Cuisine - American
// 3,5,Cuisine - Vegetarian
// 4,1,Starter - Oister
// 4,2,Starter - Toast
// 4,3,Starter - Foie
// 4,4,Starter - No
// 5,1,Dessert - Millefeuille
// 5,2,Dessert - Ganache
// 5,3,Dessert - Carpaccio
// 5,4,Dessert - No
				this.quest_1 = {
					answ: 0
				};
				this.quest_2 = {
					answ: 0
				};
				this.quest_3 = {
					answ_1: false,
					answ_2: false,
					answ_3: false,
					answ_4: false,
					answ_5: false
				};
				this.quest_4 = {
					answ_1: false,
					answ_2: false,
					answ_3: false,
					answ_4: false
				};
				this.quest_5 = {
					answ_1: false,
					answ_2: false,
					answ_3: false,
					answ_4: false
				};
				this.quest_6 = {
					answ_1: 4,
					answ_2: 4,
					answ_3: 4
				};
				this.quest_7 = {
					answ: null
				};
				this.quest_8 = {
					answ: null
				};
				this.quest_9 = {
					answ: null
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

					return request;
			};

			Client.prototype.addUserInfo = function() {

				if(this.userinfos.same_billing)
					{ this.userinfos.delivery_address = this.userinfos.billing_address; }

				var data = this.userinfos;
				var self = this;

				var request = $http({
															url: '/adduserinfo/',
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