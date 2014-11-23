angular.module('vinibar.welcome', [
  'ui.router',
  'ui.bootstrap',
  'ngAutocomplete',
  'mondialRelay',
  'clientFactory',
  'toaster'
])

.config(function config ($stateProvider) {
  $stateProvider
    .state('welcome', {
      url: '/demarrer?r',
      views: {
        main: {
          controller: 'welcomeCtrl',
          templateUrl: 'welcome/welcome.tpl.html'
        }
      },
      data: { pageTitle: 'Démarrer l\'aventure' }
    });
})

.controller('welcomeCtrl', function welcomeCtrl ($scope, currentClient, $state, toaster, $stateParams) {
  console.log($stateParams);
  currentClient.isMobile = ($stateParams.r === 'mobile') ?  true : false;
  console.log(currentClient);
});
