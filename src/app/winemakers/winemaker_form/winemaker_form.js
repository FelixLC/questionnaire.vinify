(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemakers.winemaker_form', {
      url: '/domaine/:uuid',
      controller: 'wineMakerFormCtrl',
      templateUrl: 'winemakers/winemaker_form/winemaker_form.tpl.html',
      resolve: {
        winemaker: function (WinemakerFactory, $stateParams) {
          return WinemakerFactory.getOrCreate($stateParams.uuid);
        }
      },
      data: { pageTitle: 'Mon Domaine', navTitle: 'Mon Domaine' }
    });
  });

  app.controller('wineMakerFormCtrl',
    function ($scope,
                        $state,
                        $stateParams,
                        Mixpanel,
                        WinemakerFactory,
                        toaster,
                        WineFactory,
                        winemaker,
                        $sce,
                        WineCharacteristicsFactory) {

    $scope.winemaker = winemaker.data;
    $scope.regions = WineCharacteristicsFactory.regions;

    var appellations = WineCharacteristicsFactory.appellations;

    var appellationSearch = new Fuse(appellations, {
      shouldSort: true,
      includeScore: true,
      caseSensitive: false,
      id: false,
      threshold: 0.4
    });

    function appellationSuggest (term) {
      if (!term) {
        return [];
      }

      return appellationSearch
        .search(term)
        .slice(0, 10)
        .map(function (i) {
          var val = appellations[i.item];
          return { label: val, value: val };
        });
    }

    $scope.ac_fuse_options = {
      suggest: appellationSuggest
    };

    var winemakers = WineCharacteristicsFactory.winemakers;

    var winemakerSearch = new Fuse(winemakers, {
      shouldSort: true,
      includeScore: true,
      caseSensitive: false,
      id: false,
      threshold: 0.4
    });

    function winemakerSuggest (term) {
      if (!term) {
        return [];
      }

      return winemakerSearch
        .search(term)
        .slice(0, 10)
        .map(function (i) {
          var val = winemakers[i.item];
          return { label: val, value: val };
        });
    }

    $scope.winemakerSearch = {
      suggest: winemakerSuggest
    };

    $scope.goToWineForm = function (winemaker) {
      WinemakerFactory.saveOrUpdate(winemaker,
        function (_winemaker) {
          WineFactory.region = winemaker.region;
          WineFactory.appellation = winemaker.appellation;
          WineFactory.winemaker_name = winemaker.winemaker_name;
          WineFactory.winemaker = _winemaker.uuid;
          $state.go('winemakers.wine_form');
        },
        function (error) {
          Mixpanel.track('Error trying to save winemaker : ' + $stateParams.email);
        });
    };

    $scope.validateWinemaker = function (winemaker, winemakerForm) {
      if (winemakerForm.winemaker_name.$invalid || winemakerForm.region.$invalid) {
        toaster.pop('info', 'Merci de remplir le nom et la région de votre domaine');
      } else {
        WinemakerFactory.saveOrUpdate(winemaker,
          function (_winemaker) {
            $state.go('winemakers.wine_list', { uuid: _winemaker.uuid });
          },
          function (error) {
            Mixpanel.track('Error trying to save winemaker : ' + $stateParams.email);
          });
      }
    };

  });

})(angular.module('vinibar.winemaker.winemaker_form', [
  'vinibar.winemakers.factory',
  'vinibar.wines.factory',
  'vinibar.winemaker.characteristics',
  'ui.router',
  'toaster',
  'ngSanitize',
  'MassAutoComplete',
  'Mixpanel'
]));