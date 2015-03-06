(function (app) {
  'use strict';

  app.config(function ($stateProvider) {

    $stateProvider.state('winemakers.wine_form', {
      url: '/vin/:uuid',
      controller: 'wineFormCtrl',
      templateUrl: 'winemakers/wine_form/wine_form.tpl.html',
      resolve: {
        wine: function (WineFactory, $stateParams) {
          return WineFactory.getOrCreate($stateParams.uuid);
        }
      },
      data: { pageTitle: 'Mon Vin', navTitle: 'Mon Vin'  }
    });
  });

  app.controller('wineFormCtrl',
    function ($scope,
                        WineFactory,
                        $state,
                        $stateParams,
                        wine,
                        Mixpanel,
                        $sce,
                        WineCharacteristicsFactory) {

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

    $scope.wine = wine.data;

    $scope.wine.region =  $scope.wine.region || WineFactory.region;
    $scope.wine.appellation = $scope.wine.appellation || WineFactory.appellation;
    $scope.winemaker_name = WineFactory.winemaker_name;

    $scope.wine.svi_profile.body = ($scope.wine.svi_profile.body_light) ? 'light' :
                                                        ($scope.wine.svi_profile.body_medium) ? 'medium' : 'strong';

    $scope.wine.svi_profile.texture = ($scope.wine.svi_profile.texture_light) ? 'light' :
                                                        ($scope.wine.svi_profile.texture_medium) ? 'medium' : 'strong';

    $scope.wine.svi_profile.nature = ($scope.wine.svi_profile.nature_light) ? 'light' :
                                                        ($scope.wine.svi_profile.nature_medium) ? 'medium' : 'strong';

    $scope.varieties = WineCharacteristicsFactory.varieties;

    $scope.validateWine = function (_wine_) {
      WineFactory.saveOrUpdate(_wine_,
        function (response) {
          $state.go('winemakers.wine_list', { uuid: $scope.wine.winemaker });
        },
        function () {
          Mixpanel.track('Error trying to save wine');
        });
    };
  });

})(angular.module('vinibar.winemaker.wine_form', [
  'vinibar.wines.factory',
  'vinibar.winemaker.characteristics',
  'ui.router',
  'MassAutoComplete',
  'Mixpanel'
]));