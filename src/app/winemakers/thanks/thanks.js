(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemakers.winemaker_thanks', {
      url: '/merci',
      controller: 'thanksWinemakerCtrl',
      templateUrl: 'winemakers/thanks/thanks.tpl.html',
      data: { pageTitle: 'Salon des Vignerons Indépendants', navTitle: 'Merci' }
    });
  });

  app.controller('thanksWinemakerCtrl', function ($scope) {

  });

})(angular.module('vinibar.winemaker.thanks', [
  'ui.router'
]));
