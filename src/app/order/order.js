angular.module( 'vinibar.order', [
  'ui.router',
  'ui.bootstrap',
  'ngAutocomplete',
  'mondialRelay',
  'toaster',
  'orderService'
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
.controller( 'orderCtrl', function orderCtrl( $scope, $location, currentClient, $state, $rootScope, API_ENDPOINT, toaster, Order ) {
  var init = function(){
    $scope.isState= function(state){ return $state.is(state);};
    $scope.client = currentClient.currentClient;
    $scope.b = {};

    $scope.coupon = {
      coupon: "",
      isValid: false,
      isChecked: false
    };
    $scope.delivery = {
      mode: 'Colissimo',
      cost: 11.90
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.state = $state.current.name;
    });
  };

  init();

  $scope.blur = function() {
    if($scope.coupon.coupon){
      Order.testCoupon($scope.coupon,
        // coupon validated
        function(response){
          $scope.coupon.isValid = true;
          if (response.coupon_type === 'Referral') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez 10€ !');
          } else if (response.coupon_type === 'Percentage') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez ' + response.value + ' % !');
          } else if (response.coupon_type === 'Monetary') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez ' +response.value + ' € !');
          }
          $scope.coupon.isChecked = true;
        // false coupon
        }, function(response){
          if (response === 'This code is not valid')
            { toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

          else if (response === 'This coupon has been redeemed')
            {toaster.pop('info', 'Malheureusement, Ce code est expiré !');}
          $scope.coupon.isChecked = true;
        });
    }
  };

//  ADD SCOPE INFO TO FACTORY THEN TRIGGER ORDER IF SUCCESS
  $scope.addUserInfo = function(form) {
    // FORM IS VALID
    if (form.$valid) {
      console.log('form.valid');
      if($scope.coupon.coupon){
        Order.testCoupon($scope.coupon,
          // COUPON VALIDATED
          function(data, status, headers, config) {
              $scope.coupon.isValid = true;
              $scope.coupon.isChecked = true;
              $rootScope.loading = true;
              $scope.client.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
              currentClient.currentClient = $scope.client;
              $scope.client.addUserInfo()
                                  //USER INFOS ADDED
                                  .success(function(data, status, headers, config) {
                                    Order.create($scope.client.order_type, $scope.client.order_uuid, $scope.coupon.coupon,
                                      // ORDER CREATED
                                      function(data) {
                                          $scope.client.order = data;
                                          console.log($scope.client.order.final_price);
                                          console.log(Math.round($scope.client.order.final_price * 100)/100);
                                          $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100)/100;
                                          currentClient.currentClient = $scope.client;
                                          if ($scope.client.order.coupon)  {
                                            if ($scope.client.order.coupon.coupon_type === 'Gift') {
                                              $rootScope.loading = false;
                                              $location.path('/remerciement_orde, Orderr');
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
                                      //ORDER FAILED
                                      }, function(data) {
                                          $rootScope.loading = false;
                                         toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                                          // IF THE COUPON IS NOT VALID WE TELL THE USER DEPENDING ON THE ERROR
                                          if (data === 'This code is not valid')
                                            { toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

                                          else if (data === 'This coupon has been redeemed')
                                            {toaster.pop('info', 'Malheureusement, Tous les vinibar ont été vendus !', ' Pas de panique, nous reviendrons vers vous dès qu\'ils seront de nouveaux disponibles.');}
                                        });
                                  })
                                  //USERINFOS FAILED
                                  .error(function(data, status, headers, config) {
                                        $rootScope.loading = false;
                                        toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                                  });

          // COUPON FALSE
          }, function(data, status, headers, config) {
            if (data === 'This code is not valid')
              { toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

            else if (data === 'This coupon has been redeemed')
              {toaster.pop('info', 'Malheureusement, Ce code est expiré !');}
            $scope.coupon.isChecked = true;
          });
      //THERE IS NO COUPON
      } else {
              $rootScope.loading = true;
              $scope.client.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
              currentClient.currentClient = $scope.client;
              // // mixpanel.track('UserInfo Added');
              console.log($scope.client);
              $scope.client.addUserInfo()
                                  //USER INFOS ADDED
                                  .success(function(data, status, headers, config) {
                                    Order.create($scope.client.order_type, $scope.client.order_uuid, $scope.coupon.coupon,
                                      // ORDER CREATED
                                      function(data) {
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
                                      //ORDER FAILED
                                      }, function(data) {
                                          $rootScope.loading = false;
                                         toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                                          // IF THE COUPON IS NOT VALID WE TELL THE USER DEPENDING ON THE ERROR
                                          if (data === 'This code is not valid')
                                            { toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');}

                                          else if (data === 'This coupon has been redeemed')
                                            {toaster.pop('info', 'Malheureusement, Tous les vinibar ont été vendus !', ' Pas de panique, nous reviendrons vers vous dès qu\'ils seront de nouveaux disponibles.');}
                                        });
                                  })
                                  // USER INFOS FAILED
                                  .error(function(data, status, headers, config) {
                                        $rootScope.loading = false;
                                        toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                                  });
      }
    // THE FORM IS NOT VALID
    } else {
      $rootScope.loading = false;
      toaster.pop('info', 'Oops', 'un ou plusieurs champs sont incomplets ou erronés.');
    }

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