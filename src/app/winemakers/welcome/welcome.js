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

  app.controller('welcomeWinemakerCtrl', function ($scope, DomainResource) {

  });

})(angular.module('vinibar.winemaker.welcome', [
  'vinibar.resources.domain'
]));
