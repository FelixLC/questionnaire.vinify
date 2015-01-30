angular.module('vinibar.welcome', [
  'ui.router',
  'ui.bootstrap',
  'ngAutocomplete',
  'mondialrelay',
  'clientFactory',
  'toaster'
])

.config(["$stateProvider", function config ($stateProvider) {
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
}])

.controller('welcomeCtrl', ["$scope", "currentClient", "$state", "toaster", "$stateParams", "$window", function welcomeCtrl ($scope, currentClient, $state, toaster, $stateParams, $window) {

  var coffeeBckg = new Image ();
  coffeeBckg.src = "assets/coffee-grains.jpg";
  var juiceBckg = new Image ();
  juiceBckg.src = "assets/fruits.jpg";
  var cuisineBckg = new Image ();
  cuisineBckg.src = "assets/spices.jpg";
  var starterBckg = new Image ();
  starterBckg.src = "assets/millefeuille.jpg";
  var balanceBckg = new Image ();
  balanceBckg.src = "assets/vineyard.jpg";
  var winemapBckg = new Image ();
  winemapBckg.src = "assets/winery.jpg";

  currentClient.isMobile = ($stateParams.r === 'mobile') ?  true : false;
  // currentClient.isGift = ($stateParams.r === 'gift') ?  true : false;
  $scope.is = { gift: currentClient.isGift };
  currentClient.initial_referrer = ($stateParams.r) ? $stateParams.r : $window.document.referrer;

}]);
