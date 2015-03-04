(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemakers.wine_list', {
      url: '/liste-vins/:uuid',
      controller: 'wineListCtrl',
      templateUrl: 'winemakers/wine_list/wine_list.tpl.html',
      resolve: {
        winemaker: function (WinemakerResource, $stateParams) {
          return WinemakerResource.get({ uuid: $stateParams.uuid });
        }
      },
      data: { pageTitle: 'Mes Vins', navTitle: 'Mes Vins' }
    });
  });

  app.controller('wineListCtrl', function ($scope, $state, $stateParams, winemaker, WineFactory, currentWinemaster, WinemakerResource) {
    $scope.winemaker = winemaker;

    $scope.modifyWinemaker = function (winemaker) {
      $state.go('winemakers.winemaker_form', { uuid: winemaker.uuid });
    };

    $scope.modifyWine = function (wine) {
      WineFactory.winemaker = winemaker.uuid;
      $state.go('winemakers.wine_form', { uuid: wine.uuid });
    };

    $scope.addWine = function () {
      WineFactory.winemaker = winemaker.uuid;
      WineFactory.region = winemaker.region;
      WineFactory.appellation = winemaker.appellation;
      WineFactory.winemaker_name = winemaker.winemaker_name;
      $state.go('winemakers.wine_form');
    };

    $scope.deleteWine = function (wine) {
      WineFactory.remove(wine,
        function (success) {
          WinemakerResource.get({ uuid: $stateParams.uuid },
            function (response) {
              $scope.winemaker = response;
            },
            function (error) {

            });
        },
        function (error) {

        });
    };

    $scope.validate = function () {
      $state.go('winemakers.winemaker_thanks');
    };
  });

})(angular.module('vinibar.winemaker.wine_list', [
  'vinibar.resources.winemaker',
  'vinibar.wines.factory',
  'ui.router'
]));
