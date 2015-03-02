(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('thanks', {
      url: '/merci',
      views: {
        main: {
          controller: 'thanksWinemakerCtrl',
          templateUrl: 'winemakers/thanks/thanks.tpl.html'
        }
      },
      data: { pageTitle: 'Salon des Vignerons Indépendants' }
    });
  });

  app.controller('thanksWinemakerCtrl', function ($scope) {

  });

})(angular.module('vinibar.winemaker.thanks', [

]));
