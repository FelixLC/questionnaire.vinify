(function () {
  'use strict';

  angular
      .module('vinibar.winemakers', [
        'vinibar.winemaker.winemaker_list',
        'vinibar.winemaker.winemaker_form',
        'vinibar.winemaker.thanks',
        'vinibar.winemaker.welcome',
        'vinibar.winemaker.wine_form',
        'vinibar.winemaker.wine_list',
        'vinibar.winemaker.wine_list'
      ])
      .factory('currentWinemaster', currentWinemaster);

  /* @ngInject */
  function currentWinemaster () {
    return {
      ermail: null
    };
  }
})();