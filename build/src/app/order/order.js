angular.module('vinibar.order', [
  'ui.router',
  'ui.bootstrap',
  'ngAutocomplete',
  'mondialRelay',
  'toaster',
  'receiverService',
  'Mixpanel',
  'orderService'
])

.config(["$stateProvider", function config ($stateProvider) {
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
    .state('order.paiement', {
      url: '/paiement',
      templateUrl: 'order/parts/order.paiement.tpl.html'
    })
    .state('order.delivery', {
      url: '/delivery',
      templateUrl: 'order/parts/order.delivery.tpl.html'
    })
    .state('order.confirmation', {
      url: '/confirmation',
      templateUrl: 'order/parts/order.confirmation.tpl.html'
    });
}])

.controller('orderCtrl', ["Mixpanel", "Receive", "$scope", "$location", "currentClient", "$state", "$rootScope", "toaster", "Order", function orderCtrl (Mixpanel, Receive, $scope, $location, currentClient, $state, $rootScope, toaster, Order) {
  var init = function () {
    $scope.isState= function (state) { return $state.is(state);};
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
      toaster.pop('info', 'Oops, votre code d\'accès semble erroné !', ' Veuillez réessayer ou contacter charlotte@vinify.co');
    } else if (response === 'This coupon has been redeemed') {
      toaster.pop('info', 'Malheureusement, Ce code est expiré !');
    } else if (response === 'Referrals may not be used on Discovery orders') {
       toaster.pop('info', 'Malheureusement', 'Vous ne pouvez pas utiliser un code parrainnage avec l\'offre découverte');
    }
  };

  $scope.blur = function () {
    if ($scope.coupon.coupon) {
      Order.testCoupon($scope.coupon,
        // coupon validated
        function (response) {
          $scope.coupon.isValid = true;
          if (response.coupon_type === 'Referral' && $scope.client.order_type === 'Vinibar') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez 10€ !');
          } else if (response.coupon_type === 'Referral' && $scope.client.order_type != 'Vinibar') {
            toaster.pop('info', 'Vous ne pouvez pas utiliser un code parrainnage', 'avec l\'offre découverte. Vous pouvez cependant acquérir un Vinibar à 59€ !');
            $scope.coupon.coupon = "";
          } else if (response.coupon_type === 'Percentage') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez ' + response.value + ' % !');
          } else if (response.coupon_type === 'Monetary') {
            toaster.pop('success', 'Coupon validé !', 'Vous économisez ' + response.value + ' € !');
          }
          $scope.coupon.isChecked = true;
        // false coupon
        }, function (response) {
          couponCheckerFail(response);
          $scope.coupon.isChecked = true;
          $scope.coupon.coupon = "";
        });
    }
  };

//  ADD SCOPE INFO TO FACTORY THEN TRIGGER ORDER IF SUCCESS
  $scope.addUserInfo = function (form) {

    if (form.$invalid) { // form is valid
      $rootScope.loading = false;
      toaster.pop('info', 'Oops', 'un ou plusieurs champs sont incomplets ou erronés.');
    } else { // form is NOT valid
      $rootScope.loading = true;
      $scope.client.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
      currentClient.currentClient = $scope.client;
      $scope.client.addUserInfo(function (response) {
        /****************
        * user info added
        *****************/
          if (currentClient.isGift) {
            Mixpanel.track('UserInfo Added', {
              referrer: 'gift'
            });
            Receive.receive();
            $state.go('congratulation');
          } else {
            Mixpanel.track('UserInfo Added');
            Order.create($scope.client.order_type, $scope.client.order_uuid, $scope.coupon.coupon,
              function (data) { // order created
                $scope.client.order = data;
                console.log(data);
                console.log($scope.client.order.final_price);
                console.log(Math.round($scope.client.order.final_price * 100) / 100);
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
                  console.log('success @ addUserInfo');
                  $state.go('pay_mobile');
                  $rootScope.loading = false;
                }
              }, function (data) { // order failed
                $rootScope.loading = false;
                toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
                couponCheckerFail(response); // handles toaster in case of errors
              });
          }
        }, function (response) {
        /*********************
        * user info NOT added
        *********************/
          $rootScope.loading = false;
          toaster.pop('info', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
        });
    }

  };

}])

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