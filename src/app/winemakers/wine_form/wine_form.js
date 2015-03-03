(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('wine_form', {
      url: '/vin/:uuid',
      views: {
        main: {
          controller: 'wineFormCtrl',
          templateUrl: 'winemakers/wine_form/wine_form.tpl.html'
        }
      },
      resolve: {
        wine: function (WineFactory, $stateParams) {
          return WineFactory.getOrCreate($stateParams.uuid);
        }
      },
      data: { pageTitle: 'Mon Vins' }
    });
  });

  app.controller('wineFormCtrl', function ($scope, WineFactory, $state, $stateParams, wine, Mixpanel) {
    $scope.wine = wine;

    $scope.validateWine = function (wine) {
      WineFactory.saveOrUpdate(wine,
        function (wine) {
          $state.go('wine_list', { uuid: wine.winemaker });
        },
        function () {
          Mixpanel.track('Error trying to save wine');
        });
    };
  });

})(angular.module('vinibar.winemaker.wine_form', [
  'vinibar.wines.factory',
  'ui.router',
  'Mixpanel'
]));
