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

  app.controller('wineMakerFormCtrl', function ($scope, $state, $stateParams, Mixpanel, WinemakerFactory, WineFactory,  winemaker, $sce, WineCharacteristicsFactory) {

    $scope.winemaker = winemaker.data;

    var states = WineCharacteristicsFactory.appellations;

    var fuzzySearch = new Fuse(states, {
      shouldSort: true,
      includeScore: true,
      caseSensitive: false,
      id: false,
      threshold: 0.4
    });

    function fuzzySuggest (term) {
      if (!term) {
        return [];
      }

      return fuzzySearch
        .search(term)
        .slice(0, 10)
        .map(function (i) {
          var val = states[i.item];
          return { label: val, value: val };
          //   value: val,
          //   label: $sce.trustAsHtml(
          //     '<div class="container-fluid">' +
          //     '  <div class="pull-left">' +
          //          val +
          //     '  </div>' +
          //     // '  <div class="pull-right"> ' +
          //     // '   <span class="badge">' +
          //     //       (Math.round(i.score * 100) / 100) +
          //     // '   </span>' +
          //     // ' </div>' +
          //     '</div>')
          // };
        });
    }

    $scope.ac_fuse_options = {
      suggest: fuzzySuggest
    };

    // function suggestTerms (term) {
    //   var q = term.toLowerCase().trim();
    //   var results = [];

    //   // Find first 10 appellations that start with `term`.
    //   for (var i = 0; i < appellations.length && results.length < 10; i++) {
    //     var region = appellations[i];
    //     if (appellation.toLowerCase().indexOf(q) === 0) {
    //       results.push({ label: appellation, value: appellation });
    //     }
    //   }

    //   return results;
    // }

    // $scope.autocomplete_options = {
    //   suggest: suggestTerms
    // };

    // $scope.dirty = {};

    // var states = [ 'Alabama', 'Alaska', 'California',  'Dakota' ];

    // function suggest_state (term) {
    //   var q = term.toLowerCase().trim();
    //   var results = [];

    //   // Find first 10 states that start with `term`.
    //   for (var i = 0; i < states.length && results.length < 10; i++) {
    //     var state = states[i];
    //     if (state.toLowerCase().indexOf(q) === 0) {
    //       results.push({ label: state, value: state });
    //     }
    //   }

    //   return results;
    // }

    // $scope.ac_fuse_options = {
    //   suggest: suggest_state
    // };

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

    $scope.validateWinemaker = function (winemaker) {
      WinemakerFactory.saveOrUpdate(winemaker,
        function (_winemaker) {
          $state.go('winemakers.winemaker_list');
        },
        function (error) {
          Mixpanel.track('Error trying to save winemaker : ' + $stateParams.email);
        });
    };

  });

})(angular.module('vinibar.winemaker.winemaker_form', [
  'vinibar.winemakers.factory',
  'vinibar.wines.factory',
  'vinibar.winemaker.characteristics',
  'ui.router',
  'ngSanitize',
  'MassAutoComplete',
  'Mixpanel'
]));
