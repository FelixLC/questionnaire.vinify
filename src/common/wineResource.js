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

    function get (slug) {
      return $http.get('http://127.0.0.1:8000/restapi' + '/public/wines/?slug=' + slug);
      // return $http.get(settings.restApiEndPoint + '/public/wines/?slug=' + slug);
    }
  }
})();