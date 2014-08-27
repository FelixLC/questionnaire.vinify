
angular.module('clientFactory', [])

  //  The Client Factory is used to instantiate a new client
  .factory('Client', ['$http' , '$state', function ($http, $state) {

      // Survey constructor
      var Survey = function() {

        this.cuisine = {};
          this.cuisine.fr = false;
          this.cuisine.it = false;
          this.cuisine.as = false;
          this.cuisine.usa = false;
          this.cuisine.veg = false;

        this.starter = {};
          this.starter.huitres = false;
          this.starter.tapenade = false;
          this.starter.foie_gras = false;

        this.desert = {};
          this.desert.millefeuille = false;
          this.desert.chocolatcannelle = false;
          this.desert.fruitsorbet = false;

        this.balance = {};
          this.balance.red = 4;
          this.balance.white = 4;
          this.balance.rose = 4;

        this.juice = "";
        this.coffee = "";
        this.comments = "";
        this.region = "";

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
                            url: '/createuser/',
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