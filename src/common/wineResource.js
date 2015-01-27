(function () {
  'use strict';

  angular
      .module('wineResource', [ 'settings' ])
      .factory('wineResource', wineResource);

  /* @ngInject */
  function wineResource ($http, settings) {
    var service = {
        get: get
    };
    return service;

    // //////////////

    function get (productCode) {
      return $http.get(settings.restApiEndPoint + '/public/wines/?product_code=' + productCode);
    }
  }
})();