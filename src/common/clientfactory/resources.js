
angular.module('Resources', [ 'settings' ])

  //  The Recommender is used to get a preview of bottles
  .factory('Recommender', [ '$http', 'settings',  function ($http, settings, $q) {
    var _preview = null;
    var _uuid = null;
    return {
      calcPreview: function (uuid) {
        return $http.post(settings.backendEndPoint + '/backoffice/recommender/preview3/', { user_uuid: uuid })
          .success(function (data, status, headers, config) {
            _preview = data.wines;
            _uuid = data.order_uuid;
          });
      },
      getPreview: function () {
        return _preview;
      },
      setPreview: function (data) {
        _preview = data.wines;
        _uuid = data.order.uuid;
      },
      getUuid: function () {
        return _uuid;
      }
    };
  } ])

  //  The Api manages user/givers creation
  .factory('Gift', [ '$http', 'settings',  function ($http, settings) {
    var Survey = function () {

      this.quest_1 = {  // Coffee
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
        answ: null // 2,1,Price - 5-10€ // 2,2,Price - 10-15€ // 2,3,Price - 15-20€ // 2,4,Price - 20 & +
      };

    };

    var Address = function () {
      this.company = "";
      this.first_name = "";
      this.last_name = "";
      this.phone = "";
      this.street = "";
      this.city = "";
      this.digicode = "";
      this.intercom = "";
      this.zipcode = "";
      this.other_info = "";
      this.country = "France";
    };

    var Gift = function (type) {
      this.giver = {
        email: "",
        first_name: "",
        last_name: "",
        password: ""
      };
      this.client = {
        username: "",
        password: ""
      };
      this.order = {
        gift_type: type,
        coupon: "",
        credits: 40,
        delivery_mode: "",
        delivery_cost: "",
        receiver_email: "",
        receiver_first_name: "",
        receiver_last_name: "",
           // "send_date": "",
        message: "",
        comment: "",
        receiver_address: new Address(),
        send_to_receiver: true,
        send_date: "",
        billing: false
      };

      this.receiver = {
        survey: new Survey(),
        comment: ""
      };
    };

    Gift.prototype.createGiver = function () {
      return $http.post(settings.apiEndPoint + '/users/giver/create/', this.giver);
    };
    Gift.prototype.logGiver = function () {
      return $http.post(settings.apiEndPoint + '/users/login/', this.client);
    };
    Gift.prototype.createGiftOrder = function () {
      return $http.post(settings.apiEndPoint + '/orders/gift/create/', this.order);
    };
    Gift.prototype.testCoupon = function (_coupon, orderType, success, failure) {
      $http.post(settings.apiEndPoint + '/orders/testcoupon/', { coupon: _coupon, order_type: orderType })
          .success(function (data, status, headers, config) {
            return success(data);
          })
          .error(function (data, status, headers, config) {
            return failure(data);
          });
    };
    Gift.prototype.updateGiftOrder = function () {
      return $http.post(settings.apiEndPoint + '/orders/gift/update/', this.orderUpdate);
    };
    Gift.prototype.sendSurvey = function () {
      return $http.post(settings.apiEndPoint + '/orders/receiver/survey/', this.receiver);
    };
    Gift.prototype.chargeGiftOrder = function (_id, _giftUuid, isTest, hasBilling, _billingAddress) {
      return $http.post(settings.apiEndPoint + '/orders/gift/charge/', {
        id: _id,
        gift_uuid: _giftUuid,
        test: isTest,
        billing: hasBilling,
        billing_address: (hasBilling) ? _billingAddress : {}
      });
    };
    return Gift;
  } ])
// the currentGift Factory gives the current Gift we're working with
.factory('currentGift', [ function () {
  return {
    current: null
  };
} ])
// the currentGiftCard Factory provides data for the card to print
.factory('currentGiftCard', [ function () {
  return {
    first_name: "",
    code: "",
    message: ""
  };
} ]);