angular.module( 'vinibar.paiement', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'stripe',
  'ngAutocomplete'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'paiement', {
      url: '/paiement',
      views: {
        "main": {
          controller: 'paiementCtrl',
          templateUrl: 'paiement/paiement.tpl.html'
        }
      },
      data:{ pageTitle: 'paiement' }
    })
    .state( 'paiement.login', {
      url: '/login',
      templateUrl: 'paiement/parts/paiement.login.tpl.html'
    })
    .state( 'paiement.confirmation', {
      url: '/confirmation',
      templateUrl: 'paiement/parts/paiement.confirmation.tpl.html'
    });
})

.controller( 'paiementCtrl', function paiementCtrl( $scope, $http, $state) {

  $scope.login = function(email, password) {

    // var unfinishedOrder = $http({
    //                               url: '/unfinishedorder/',
    //                               method: "GET"
    //                       }).success(function(data, status, headers, config) {
    //                           $scope.currentUser = data;
    //                           $state.go('paiement.confirmation');
    //                       }).error(function(data, status, headers, config) {
    //                          alert('Vous n\'avez pas de commande en cours');
    //                       });

      var request = $http({
                            url: '/login/',
                            method: "POST",
                            data: 'username=' + email + '&password=' + password,
                            headers: {
                                     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            }
                    }).success(function(data, status, headers, config) {
                          $scope.currentClient = {};
                          $http({
                                  url: '/unfinishedorder/',
                                  method: "GET"
                                })
                                .success(function(data, status, headers, config) {
                                    $scope.currentClient.order = data;
                                    $state.go('paiement.confirmation');
                                })
                                .error(function(data, status, headers, config) {
                                   alert('Vous n\'avez pas de commande en cours');
                                });
                      })
                    .error(function(data, status, headers, config) {
                        alert(data);
                      });

  };

});