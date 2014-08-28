angular.module( 'vinibar.order', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngAutocomplete',
  'mondialRelay'
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

.controller( 'orderCtrl', function orderCtrl( $scope, $http, $location, currentClient, $state, $filter, $rootScope ) {

  $scope.currentClient = currentClient.currentClient;
  $scope.formInvalid = false;
  $scope.coupon = {};
  $scope.b = {};

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

      // FIRST, WE CHECK IF THE USER HAS A COUPON
      if (!($scope.coupon.coupon)) {
        console.log('$scope.coupon === null');
        $scope.couponError = 'Vinify est encore en Beta privée. Vous devez avoir un code d\'accès. Plus d\'infos à charlotte@vinify.co';
      }

      // THEN, IF THE FORM IS VALID
      else
          if (form.$valid && $scope.currentClient.userinfos.delivery_mode) {
              // IF WE ARE HERE, A COUPON HAS BEEN ENTERED SO WE ERASE THE ERROR
              $scope.couponError = false;
              console.log('form.$valid && $scope.currentClient.userinfos.delivery_mode');
              $scope.formInvalid = false;
              $rootScope.loading = true;

              // THEN, IF THE COUPON IS VALID
              var request = $http({
                                  url: '/testcoupon/',
                                  method: 'POST',
                                  data: $scope.coupon,
                                  headers: {
                                    'Content-Type': 'application/json; charset=UTF-8'
                                  }
                                })

                                .success(function(data, status, headers, config) {

                                    $scope.currentClient.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
                                    // IF THE COUPON IS VALID WE LOG CLIENT INFO AND CREATE SERVER ORDER
                                    currentClient.currentClient = $scope.currentClient;
                                    mixpanel.track('UserInfo Added');
                                    $scope.currentClient.addUserInfo()
                                                        .success(function(data, status, headers, config) {
                                                              console.log('success @ addUserInfo');
                                                              $scope.createOrder();
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
                                      {$scope.couponError = 'Oops, votre code d\'accès semble erroné ! Veuillez réessayer ou contacter charlotte@vinify.co' ;}

                                    else if (data === 'This coupon has been redeemed')
                                      {$scope.couponError = 'Malheureusement, Tous les vinibar ont été vendus ! Pas de panique, nous reviendrons vers vous dès qu\'ils seront de nouveaux disponibles.' ;}

                                  });
              return request;
          }

          else {
              $rootScope.loading = false;
              $scope.couponError = false;
              console.log('else');
              $scope.formInvalid = true;
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

    $scope.order_data = {
      'coupon': $scope.coupon.coupon,
      'delivery_cost': $scope.delivery_cost,
      'delivery_mode': $scope.delivery_mode
    };

    var request = $http({
                          url: '/vinibarorder/',
                          method: 'POST',
                          data: $scope.order_data,
                          headers: {
                            'Content-Type': 'application/json; charset=UTF-8'
                          }
                        })

                        .success(function(data, status, headers, config) {
                              console.log('success @ createOrder');
                              $scope.currentClient.order = data;
                              $state.go('order.confirmation');
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
    $scope.currentClient.userinfos.delivery_mode = num;
    $scope.delivery_mode = num;

    if (num === 1) {  $scope.delivery_cost = 15;
                      $scope.delivery_mode = 'Relais Colis';}

    if (num === 2) {  $scope.delivery_cost = 17;
                      $scope.delivery_mode = 'Colissimo'; }

    if (num === 3) {  $scope.delivery_cost = 21;
                      $scope.delivery_mode = 'A la carte'; }
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