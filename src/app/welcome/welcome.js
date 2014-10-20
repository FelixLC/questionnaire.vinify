angular.module( 'vinibar.welcome', [
  'ui.router',
  'placeholders',
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
.constant('API_ENDPOINT','https://api.vinify.co/api')
.controller( 'welcomeCtrl', function welcomeCtrl( $scope, $http, $location, currentClient, $state, $filter, $rootScope, API_ENDPOINT, toaster, $stateParams ) {
  console.log($stateParams);
  currentClient.isMobile = ($stateParams.r === 'mobile') ?  true : false;
  console.log(currentClient);
});
