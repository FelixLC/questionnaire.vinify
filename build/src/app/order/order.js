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
      data:{ pageTitle: 'Vinify' }
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
.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'orderCtrl', function orderCtrl( $scope, $http, $location, currentClient, $state, $filter, $rootScope, API_ENDPOINT, toaster ) {
  console.log(API_ENDPOINT);
  $scope.isState= function(state){ return $state.is(state);};
  $scope.client = currentClient.currentClient;
  $scope.coupon = {
    coupon: "",
    isValid: false,
    isChecked: false
  };
  $scope.b = {};
  $scope.delivery = {
    mode: 'Colissimo',
    cost: 11.90
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.state = $state.current.name;
    console.log($scope.state );
  });

  $scope.blur = function() {
    if($scope.coupon.coupon){
      $scope.coupon.coupon = ($scope.coupon.coupon.toUpperCase() === 'MERCIALFRED') ? $scope.coupon.coupon.toUpperCase(): $scope.coupon.coupon;
      $http.post(API_ENDPOINT +'/orders/testcoupon/', $scope.coupon)
        .success(function(data, status, headers, config) {
          $scope.coupon.isValid = true;
          toaster.pop('success', 'Bravo !', ' Votre coupon est validé');
          $scope.coupon.isChecked = true;
        })
        .error(function(data, status, headers, config) {
          if (data === 'This code is not valid')
            { toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

          else if (data === 'This coupon has been redeemed')
            {toaster.pop('info', 'Malheureusement, Ce code est expiré !');}
          $scope.coupon.isChecked = true;
        });
    }

  };

  $scope.updatedBirthday = $scope.b.birthdate + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;

//  ADD SCOPE INFO TO FACTORY THEN TRIGGER ORDER IF SUCCESS
  $scope.addUserInfo = function(form) {

    if (form.$valid) {// IF THE FORM IS VALID
      console.log('form.valid');
      if($scope.coupon.coupon){
        $scope.coupon.coupon = ($scope.coupon.coupon.toUpperCase() === 'MERCIALFRED') ? $scope.coupon.coupon.toUpperCase(): $scope.coupon.coupon;
        $http.post(API_ENDPOINT +'/orders/testcoupon/', $scope.coupon)
          .success(function(data, status, headers, config) {
            $scope.coupon.isValid = true;
            toaster.pop('success', 'Bravo !', ' Votre coupon est validé');
            $scope.coupon.isChecked = true;
            // if(!$scope.coupon.coupon || ($scope.coupon.coupon && $scope.coupon.isValid) ) {      //IF THERE IS NO COUPON OR A VALID COUPON
                    console.log('$scope.coupon.coupon || $scope.coupon.coupon && !$scope.coupon.isValid');
              $rootScope.loading = true;
              console.log($scope.client);
              $scope.client.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
              currentClient.currentClient = $scope.client;
              // mixpanel.track('UserInfo Added');
              console.log($scope.client);
              $scope.client.addUserInfo()
                                  .success(function(data, status, headers, config) {//USER INFOS ADDED
                                     $http({
                                        url: API_ENDPOINT +'/orders/vinibarorder/',
                                        method: 'POST',
                                        data: {'coupon' : $scope.coupon.coupon},
                                        headers: {
                                          'Content-Type': 'application/json; charset=UTF-8'
                                        }
                                      })
                                      .success(function(data, status, headers, config) {//ORDERCREATED
                                          $scope.client.order = data;
                                          console.log($scope.client.order.final_price);
                                          console.log(Math.round($scope.client.order.final_price * 100)/100);
                                          $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100)/100;
                                          currentClient.currentClient = $scope.client;
                                          if ($scope.client.order.coupon)  {
                                            if ($scope.client.order.coupon.coupon_type === 'Gift') {
                                              $rootScope.loading = false;
                                              $location.path('/remerciement_order');
                                            } else {
                                              $state.go('pay_mobile');
                                              $rootScope.loading = false;
                                            }
                                          } else {
                                              console.log('success @ addUserInfo');
                                              $state.go('pay_mobile');
                                              $rootScope.loading = false;
                                              // $scope.createOrder();
                                          }
                                        })
                                      .error(function(data, status, headers, config) {//ORDER FAILED
                                          $rootScope.loading = false;
                                         toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                                          // IF THE COUPON IS NOT VALID WE TELL THE USER DEPENDING ON THE ERROR
                                          if (data === 'This code is not valid')
                                            { toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

                                          else if (data === 'This coupon has been redeemed')
                                            {toaster.pop('info', 'Malheureusement, Tous les vinibar ont été vendus !', ' Pas de panique, nous reviendrons vers vous dès qu\'ils seront de nouveaux disponibles.');}
                                        });
                                  })
                                  .error(function(data, status, headers, config) {//USERINFOS FAILED
                                        $rootScope.loading = false;
                                        toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                                  });
          })
          .error(function(data, status, headers, config) {
            if (data === 'This code is not valid')
              { toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

            else if (data === 'This coupon has been redeemed')
              {toaster.pop('info', 'Malheureusement, Ce code est expiré !');}
            $scope.coupon.isChecked = true;
          });
      } else {//THERE IS NO COUPON
              $rootScope.loading = true;
              console.log($scope.client);
              $scope.client.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
              currentClient.currentClient = $scope.client;
              // // mixpanel.track('UserInfo Added');
              console.log($scope.client);
              $scope.client.addUserInfo()
                                  .success(function(data, status, headers, config) {//USER INFOS ADDED
                                     $http({
                                        url: API_ENDPOINT +'/orders/vinibarorder/',
                                        method: 'POST',
                                        data: {'coupon' : $scope.coupon.coupon},
                                        headers: {
                                          'Content-Type': 'application/json; charset=UTF-8'
                                        }
                                      })
                                      .success(function(data, status, headers, config) {//ORDERCREATED
                                          $scope.client.order = data;
                                          console.log($scope.client.order.final_price);
                                           console.log(Math.round($scope.client.order.final_price * 100)/100);
                                          $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100)/100;
                                          currentClient.currentClient = $scope.client;
                                          if ($scope.client.order.coupon)  {
                                            if ($scope.client.order.coupon.coupon_type === 'Gift') {
                                              $rootScope.loading = false;
                                              $location.path('/remerciement_order');
                                            } else {
                                              $state.go('pay_mobile');
                                              $rootScope.loading = false;
                                            }
                                          } else {
                                              console.log('success @ addUserInfo');
                                              $state.go('pay_mobile');
                                              $rootScope.loading = false;
                                              // $scope.createOrder();
                                          }
                                        })
                                      .error(function(data, status, headers, config) {//ORDER FAILED
                                          $rootScope.loading = false;
                                         toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                                          // IF THE COUPON IS NOT VALID WE TELL THE USER DEPENDING ON THE ERROR
                                          if (data === 'This code is not valid')
                                            { toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

                                          else if (data === 'This coupon has been redeemed')
                                            {toaster.pop('info', 'Malheureusement, Tous les vinibar ont été vendus !', ' Pas de panique, nous reviendrons vers vous dès qu\'ils seront de nouveaux disponibles.');}
                                        });
                                  })
                                  .error(function(data, status, headers, config) {//USERINFOS FAILED
                                        $rootScope.loading = false;
                                        toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                                  });
      }
      // } else if ($scope.coupon.coupon && !$scope.coupon.isValid && $scope.coupon.isValid) { // IF THERE IS A COUPON BUT NOT VALID
      //   // COUPON ERROR
      //    toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');
      // } else {
      //   console.log('dead end');
      // }
    } else {//THE FORM IS NOT VALID
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
    $rootScope.loading = true;
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
                        url: API_ENDPOINT + '/orders/pickmremail/',
                        method: "POST",
                        data: { 'order_id': $scope.client.order.uuid },
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8'
                        }
                      });
                    }
                    $location.path('/remerciement_order');
                    // mixpanel.track('Sucessful payment');
                  })
                  .error(function(data, status, headers, config) {
                    toaster.pop('info', 'Oops, Il y a eu une erreur avec votre commande', ' Veuillez réessayer ou contacter charlotte@vinify.co');
                    // mixpanel.track('Server Failed to proceed payment');

                  });
      }
    });
    handler.open({
      name: "Vinify",
      description: "Vinibar",
      currency: "EUR",
      panelLabel: "Payer",
      opened: closeLoading(),
      closed: closeLoading(),
      amount: Math.round($scope.client.order.final_price * 100),
      email: $scope.client.order.user.email
    });
  };

  $scope.updateOrder = function(num) {
    if (num === 1) {  $scope.delivery.cost = 8.9;
                      $scope.delivery.mode = 'Point Relais';}

    if (num === 2) {  $scope.delivery.cost = 11.9;
                      $scope.delivery.mode = 'Colissimo'; }

    if (num === 3) {  $scope.delivery.cost = 0;
                      $scope.delivery.mode = 'Vinify'; }
    $scope.order_data = {
      'order_uuid': $scope.client.order.uuid,
      'delivery_cost': $scope.delivery.cost,
      'delivery_mode': $scope.delivery.mode
    };
    $rootScope.loading = true;
    $http({
            url: API_ENDPOINT + '/orders/updateorder/',
            method: 'POST',
            data: $scope.order_data,
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }
          })
          .success(function(data, status, headers, config) {
                $scope.client.order = data;
                console.log($scope.client.order.final_price);
                console.log(Math.round($scope.client.order.final_price * 100)/100);
                $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100)/100;
                $rootScope.loading = false;
            })
          .error(function(data, status, headers, config) {
                console.log('error @ createOrder');
                $rootScope.loading = false;
            });
  };
  var closeLoading = function() {
                                  $rootScope.loading= false;
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