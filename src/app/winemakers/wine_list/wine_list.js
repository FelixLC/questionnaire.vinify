(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('wine_list', {
      url: '/liste-vins/:uuid',
      views: {
        main: {
          controller: 'wineListCtrl',
          templateUrl: 'winemakers/wine_list/wine_list.tpl.html'
        }
      },
      resolve: {
        winemaker: function (WinemakerResource, $stateParams) {
          return WinemakerResource.get({ uuid: $stateParams.uuid });
        }
      },
      data: { pageTitle: 'Mes Vins' }
    });
  });

  app.controller('wineListCtrl', function ($scope, $state, winemaker, WineFactory) {
    $scope.winemaker = winemaker;

    $scope.modifyWinemaker = function (winemaker) {
      $state.go('winemaker_form', { uuid: winemaker.uuid });
    };

    $scope.modifyWine = function (wine) {
      WineFactory.winemaker = winemaker.uuid;
      $state.go('wine_form', { uuid: wine.uuid });
    };

    $scope.validate = function () {
      $state.go('thanks');
    };
  });

})(angular.module('vinibar.winemaker.wine_list', [
  'vinibar.resources.winemaker',
  'vinibar.wines.factory',
  'ui.router'
]));
