angular.module('vinibar.order', [
  'ui.router',
  'ui.bootstrap',
  'ngAutocomplete',
  'mondialrelay',
  'toaster',
  'receiverService',
  'Mixpanel',
  'orderService'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('order', {
      url: '/order',
      views: {
        main: {
          controller: 'orderCtrl',
          templateUrl: 'order/order.tpl.html'
        }
      },
      data: { pageTitle: 'Vinify' }
    })
    .state('order.userinfos', {
      url: '/infos',
      templateUrl: 'order/parts/order.userinfos.tpl.html'
    })
    // .state('order.paiement', {
    //   url: '/paiement',
    //   templateUrl: 'order/parts/order.paiement.tpl.html'
    // })
    .state('order.delivery', {
      url: '/delivery',
      templateUrl: 'order/parts/order.delivery.tpl.html'
    })
    .state('order.confirmation', {
      url: '/confirmation',
      templateUrl: 'order/parts/order.confirmation.tpl.html'
    });
})

.controller('orderCtrl', function orderCtrl (Mixpanel, Receive, $scope, $location, currentClient, $state, $rootScope, toaster, Order) {
  var init = function () {
    $scope.isState = function (state) { return $state.is(state);};
    $scope.client = currentClient.currentClient;
    $scope.isGift = currentClient.isGift;
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

    $scope.$on('$stateChangeSuccess', function () {
      $scope.state = $state.current.name;
    });

  };
  init();


  var couponCheckerFail = function (response) {
    if (response === 'This code is not valid') {
      toaster.pop('info', 'Oops, votre code d\'accès semble erroné !',
                                          ' Veuillez réessayer ou contacter charlotte@vinify.co');
    } else if (response === 'This coupon has been redeemed') {
      toaster.pop('info', 'Malheureusement, Ce code est expiré !');
    } else if (response === 'Referrals may not be used on Discovery orders') {
      toaster.pop('info', 'Malheureusement',
                                            'Vous ne pouvez pas utiliser un code parrainnage avec l\'offre découverte');
    } else if (response === 'Gift Coupon not allowed') {
      toaster.pop('info', 'Pour activer votre cadeau', 'rendez vous sur Cadeau / Recevoir dans la barre de navigation de la page d\'acceuil');
    }
  };

  var couponCheckerSuccess = function (response) {
    if (response.coupon_type === 'Referral' && $scope.client.order_type === 'Vinibar') {
      toaster.pop('success', 'Coupon validé !', 'Vous économisez 10€ !');
    } else if (response.coupon_type === 'Referral' && $scope.client.order_type != 'Vinibar') {
      toaster.pop('info', 'Vous ne pouvez pas utiliser un code parrainnage', 'avec l\'offre découverte. ' +
                                            'Vous pouvez cependant acquérir un Vinibar à 59€ !');
      $scope.coupon.coupon = "";
    } else if (response.coupon_type === 'Percentage') {
      toaster.pop('success', 'Coupon validé !', 'Vous économisez ' + response.value * 100 + ' % !');
    } else if (response.coupon_type === 'Monetary') {
      toaster.pop('success', 'Coupon validé !', 'Vous économisez ' + response.value + ' € !');
    }
  };

  $scope.blur = function () {
    if ($scope.coupon.coupon) {
      Order.testCoupon($scope.coupon,
        // coupon validated
        function (response) {
          couponCheckerSuccess(response);
          $scope.coupon.isValid = true;
          $scope.coupon.isChecked = true;
        },
        // false coupon
        function (response) {
          couponCheckerFail(response);
          $scope.coupon.isValid = false;
          $scope.coupon.isChecked = true;
          $scope.coupon.coupon = "";
        });
    }
  };

//  ADD SCOPE INFO TO FACTORY THEN TRIGGER ORDER IF SUCCESS
  $scope.addUserInfo = function (form) {

    if (form.$invalid) { // form is NOT valid
      $rootScope.loading = false;
      $scope.submitted = true;
      toaster.pop('info', 'Oops', 'un ou plusieurs champs sont incomplets ou erronés.');
    } else { // form is valid
      $rootScope.loading = true;
      $scope.client.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
      currentClient.currentClient = $scope.client;
      $scope.client.addUserInfo(
        /****************
        * user info added
        *****************/
        function (response) {

          if (currentClient.isGift) {
            Mixpanel.track('UserInfo Added', { referrer: 'gift' });
            $rootScope.loading = false;
            $state.go('congratulation_receive');

            Receive.receive();
          } else {
            Mixpanel.track('UserInfo Added');

            Order.create($scope.client.order_type, $scope.client.order_uuid, $scope.coupon.coupon,
              function (data) { // order created
                $scope.client.order = data;
                $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100) / 100;
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
                  $state.go('pay_mobile');
                  $rootScope.loading = false;
                }
              },
              function (data) { // order failed
                $rootScope.loading = false;
                toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                couponCheckerFail(response); // handles toaster in case of errors
              });
          }
        },
        /*********************
        * user info NOT added
        *********************/
        function (response) {
          $rootScope.loading = false;
          toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
        });
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
        // get last space
        if (lastspace !== -1) {
          input = input.substr(0, lastspace);
        }
      } else {
        while (input.charAt(input.length - 1) == ' ') {
          input = input.substr(0, input.length  - 1);
        }
      }
      return input;
    }
    return input;
  };
});