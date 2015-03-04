(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemakers.welcome', {
      url: '/bienvenue',
      controller: 'welcomeWinemakerCtrl',
      templateUrl: 'winemakers/welcome/welcome.tpl.html',
      data: { pageTitle: 'Salon des Vignerons Indépendants', navTitle: 'Bienvenue' }
    });
  });

  app.controller('welcomeWinemakerCtrl', function ($scope, $state, WinemakerResource, Mixpanel, WinemakerFactory, currentWinemaster) {

    $scope.query = function (email) {

      WinemakerResource.query({ email: email },
        function (domainList) {
          if (domainList.length) {
            currentWinemaster.email = email;
            Mixpanel.identify(email);
            $state.go('winemakers.winemaker_list');
          } else {
            currentWinemaster.email = email;
            Mixpanel.alias(email);
            $state.go('winemakers.winemaker_form');
          }
        },
        function (error) {
          currentWinemaster.email = email;
          $state.go('winemakers.winemaker_form');
          Mixpanel.alias(email);
        });
    };
  });

})(angular.module('vinibar.winemaker.welcome', [
  'vinibar.resources.winemaker',
  'vinibar.winemakers.factory',
  'vinibar.winemakers',
  'ui.router',
  'Mixpanel'
]));
