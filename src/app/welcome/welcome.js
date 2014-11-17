angular.module( 'vinibar.welcome', [
  'ui.router',
  'ui.bootstrap',
  'ngAutocomplete',
  'mondialRelay',
  'clientFactory',
  'toaster'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'welcome', {
      url: '/welcome?r',
      views: {
        "main": {
          controller: 'welcomeCtrl',
          templateUrl: 'welcome/welcome.tpl.html'
        }
      },
      data:{ pageTitle: 'Démarrer l\'aventure' }
    });
})
.constant('API_ENDPOINT','http://127.0.0.1:8000/api')
.controller( 'welcomeCtrl', function welcomeCtrl( $scope, $http, $location, currentClient, $state, $filter, $rootScope, API_ENDPOINT, toaster, $stateParams ) {
  console.log($stateParams);
  currentClient.isMobile = ($stateParams.r === 'mobile') ?  true : false;
  console.log(currentClient);
});
