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

.controller('welcomeCtrl', function welcomeCtrl ($scope, currentClient, $state, toaster, $stateParams, $window) {
  console.log($stateParams);
  currentClient.isMobile = ($stateParams.r === 'mobile') ?  true : false;
  currentClient.isGift = ($stateParams.r === 'gift') ?  true : false;
  currentClient.initial_referrer = ($stateParams.r) ? $stateParams.r : $window.document.referrer;
  console.log(currentClient);
});
