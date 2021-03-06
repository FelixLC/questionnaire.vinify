angular.module('vinibar.paiement', [
  'ui.router',
  'ui.bootstrap',
  'stripe',
  'angularPayments',
  'Mixpanel',
  'ngAutocomplete',
  'toaster',
  'settings'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('paiement', {
      url: '/paiement',
      views: {
        main: {
          controller: 'paiementCtrl',
          templateUrl: 'paiement/paiement.tpl.html'
        }
      },
      data: { pageTitle: 'Paiement' }
    })
    .state('paiement.login', {
      url: '/login',
      templateUrl: 'paiement/parts/paiement.login.tpl.html'
    })
    .state('paiement.confirmation', {
      url: '/confirmation',
      templateUrl: 'paiement/parts/paiement.confirmation.tpl.html'
    });
})

.controller('paiementCtrl', function paiementCtrl (Mixpanel, $scope, $http, $state, settings, toaster, $window, $rootScope, $location, currentClient, Client, Recommender) {
  $scope.delivery = {
    mode: 'Colissimo',
    cost: 11.90
  };
  $scope.deliveryMethod = function (num) {

    if (num === 1) {  $scope.delivery.cost = 8.90;
                      $scope.delivery.mode = 'Point Relais';}

    if (num === 2) {  $scope.delivery.cost = 11.90;
                      $scope.delivery.mode = 'Colissimo'; }

    if (num === 3) {  $scope.delivery.cost = 0;
                      $scope.delivery.mode = 'Vinify'; }
  };
  var closeLoading = function () {
                                  $rootScope.loading= false;
  };
  $scope.login = function (email, password) {
    delete $window.sessionStorage.token;
    $http.post(settings.apiEndPoint + '/users/login/', { username: email, password: password })
        .success(function (data, status, headers, config) {
          $window.sessionStorage.token = data.token;
          $scope.client = new Client();
          $scope.client.uuid = data.uuid;
          $scope.client.email = data.email;
          $scope.client.first_name = data.first_name;
          $scope.client.last_name = data.last_name;
          currentClient.currentClient = $scope.client;
          currentClient.currentClient.userinfos.first_name = $scope.client.first_name;
          currentClient.currentClient.userinfos.last_name = $scope.client.last_name;
          if (data.status >= 2) {
            $http.get(settings.apiEndPoint + '/orders/unfinishedorder/')
                  .success(function (data, status, headers, config) {
                    // user has bottles. Let's show them who's the boss
                    $scope.client.order = data;
                    $scope.client.order_type = data.order_type;
                    $scope.client.userinfos.delivery_address = data.delivery_address;
                    $scope.client.userinfos.billing_address = data.billing_address;
                    currentClient.currentClient = $scope.client;
                    Recommender.calcPreview($scope.client.uuid).then(function (response) {
                      $state.go('preview');
                    },
                    function (response) {
                      toaster.pop('info', 'Une erreur est survenue', 'Merci de réessayer.');
                    });

                  })
                  .error(function (data, status, headers, config) {
                    Recommender.calcPreview($scope.client.uuid).then(function (response) {
                      $state.go('preview');
                    },
                    function (response) {
                      toaster.pop('info', 'Une erreur est survenue', 'Merci de réessayer.');
                    });

                  });
          } else if (data.status < 2) {
            $state.go('questionnaire.coffee');
          } else {
            toaster.pop('info', 'Vous n\'avez pas de commande de Vinibar en cours');
          }
        })
          .error(function (data, status, headers, config) {
            toaster.pop('info', 'Erreur', 'Combinaison Email / Mot de passe érronée');
          });

  };
//  SEND ORDER REQUEST TO SERVER. IF SUCCESS UPDATE SCOPE WITH ORDER DATA AND TRANSITION TO CONFIRMATION
  $scope.createOrder = function () {
    $rootScope.loading = true;
    var handler = StripeCheckout.configure({
      // key: "pk_test_sK21onMmCuKNuoY7pbml8z3Q",
      key: "pk_live_gNv4cCe8tsZpettPUsdQj25F",
      image: "assets/LogoVinifyMini2.png",
      token: function (token, args) {
        var data_order = token;
        data_order.order_uuid = $scope.client.order.uuid;
        data_order.delivery_cost = $scope.delivery_cost;
        data_order.delivery_mode = $scope.delivery_mode;

        var urlPOST = '/orders/chargevinibar/';

        if ($scope.client.order.order_type === "Refill")
          {urlPOST = '/orders/chargerefill/';}

        $http({
                          url: settings.apiEndPoint + urlPOST,
                          method: "POST",
                          data: data_order
                  })
                  .success(function (data, status, headers, config) {
                    if ($scope.client.order.delivery_mode === 'Point Relais') {
                      $http({
                        url: settings.apiEndPoint + '/orders/pickmremail/',
                        method: "POST",
                        data: { 'order_id': $scope.client.order.uuid },
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8'
                        }
                      });
                    }
                    $location.path('/remerciement_order');
                    Mixpanel.track('Sucessful payment');
                  })
                  .error(function (data, status, headers, config) {
                    toaster.pop('info', 'Oops, Il y a eu une erreur avec votre commande', ' Veuillez réessayer ou contacter charlotte@vinify.co');
                    Mixpanel.track('Server Failed to proceed payment');

                  });
      }
    });

    $scope.order_data = {
      'order_uuid': $scope.client.order.uuid,
      'delivery_cost': $scope.delivery.cost,
      'delivery_mode': $scope.delivery.mode
    };


    var request = $http({
                          url: settings.apiEndPoint + '/orders/updateorder/',
                          method: 'POST',
                          data: $scope.order_data,
                          headers: {
                            'Content-Type': 'application/json; charset=UTF-8'
                          }
                        })

                        .success(function (data, status, headers, config) {
                              $scope.order = data;
                              console.log($scope.order.final_price * 100);
                              console.log($scope.order.final_price);
                              console.log(Math.round($scope.order.final_price * 100));
                              handler.open({
                                name: "Vinify",
                                description: "Vinibar",
                                currency: "EUR",
                                panelLabel: "Payer",
                                opened: closeLoading(),
                                closed: closeLoading(),
                                amount: Math.round($scope.order.final_price * 100),
                                email: $scope.order.user.email
                              });
                          })

                        .error(function (data, status, headers, config) {
                              console.log('error @ createOrder');
                              $rootScope.loading = false;
                          });

        return request;
  };

});