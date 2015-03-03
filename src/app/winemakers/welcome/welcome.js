(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('welcome_winemaker', {
      url: '/vignerons-bienvenue',
      views: {
        main: {
          controller: 'welcomeWinemakerCtrl',
          templateUrl: 'winemakers/welcome/welcome.tpl.html'
        }
      },
      data: { pageTitle: 'Salon des Vignerons Indépendants' }
    });
  });

  app.controller('welcomeWinemakerCtrl', function ($scope, $state, WinemakerResource, Mixpanel, WinemakerFactory) {

    $scope.query = function (email) {

      WinemakerResource.query({ email: email },
        function (domainList) {
          if (domainList.length) {
            WinemakerFactory.email = email;
            Mixpanel.identify(email);
            WinemakerFactory.setWinemakers(domainList);
            $state.go('winemaker_list');
          } else {
            WinemakerFactory.email = email;
            Mixpanel.alias(email);
            $state.go('winemaker_form');
          }
        },
        function (error) {
          WinemakerFactory.email = email;
          $state.go('winemaker_form');
          Mixpanel.alias(email);
        });
    };
  });

})(angular.module('vinibar.winemaker.welcome', [
  'vinibar.resources.winemaker',
  'vinibar.winemakers.factory',
  'ui.router',
  'Mixpanel'
]));
