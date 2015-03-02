(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('wine_list', {
      url: '/liste-vins',
      views: {
        main: {
          controller: 'wineListCtrl',
          templateUrl: 'winemakers/wine_list/wine_list.tpl.html'
        }
      },
      data: { pageTitle: 'Mes Vins' }
    });
  });

  app.controller('wineListCtrl', function ($scope) {

  });

})(angular.module('vinibar.winemaker.wine_list', [

]));
