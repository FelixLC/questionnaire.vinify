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
.controller( 'orderCtrl', function orderCtrl( $scope, $http, $location, currentClient, $state, $filter, $rootScope, API_ENDPOINT, toaster, Order ) {
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
          if (data.coupon_type === 'Referral') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez 10€ !');
          } else if (data.coupon_type === 'Percentage') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez ' + data.value + ' % !');
          } else if (data.coupon_type === 'Monetary') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez ' +data.value + ' € !');
          }
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
                                    Order.create($scope.client.order_typeient.order_type, $scope.coupon.coupon)
                                      .success(function(data, status, headers, config) {//ORDERCREATED
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
                                    Order.create($scope.client.order_type, $scope.coupon.coupon)
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

    } else {//THE FORM IS NOT VALID
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