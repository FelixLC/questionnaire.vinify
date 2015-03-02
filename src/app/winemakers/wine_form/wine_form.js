(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('wine_form', {
      url: '/ajouter-vin',
      views: {
        main: {
          controller: 'wineFormCtrl',
          templateUrl: 'winemakers/wine_form/wine_form.tpl.html'
        }
      },
      data: { pageTitle: 'Mes Vins' }
    });
  });

  app.controller('wineFormCtrl', function ($scope) {

  });

})(angular.module('vinibar.winemaker.wine_form', [
  'ui.router'
]));
