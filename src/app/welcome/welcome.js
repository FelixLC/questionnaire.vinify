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
  var coffee_bckg = new Image ();
    coffee_bckg.src = "assets/coffee-grains.jpg";
  var juice_bckg = new Image ();
    juice_bckg.src = "assets/fruits.jpg";
  var cuisine_bckg = new Image ();
    cuisine_bckg.src = "assets/spices.jpg";
  var starter_bckg = new Image ();
    starter_bckg.src = "assets/millefeuille.jpg";
  var balance_bckg = new Image ();
      balance_bckg.src = "assets/vineyard.jpg";
  var winemap_bckg = new Image ();
      winemap_bckg.src = "assets/winery.jpg";
  currentClient.isMobile = ($stateParams.r === 'mobile') ?  true : false;
  currentClient.isGift = ($stateParams.r === 'gift') ?  true : false;
  currentClient.initial_referrer = ($stateParams.r) ? $stateParams.r : $window.document.referrer;
  console.log(currentClient);
});
