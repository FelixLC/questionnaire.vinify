/*
* this module tells us if we are in dev or prod environment
*/

(function () {
  'use strict';

  angular
        .module('settings', [])
        .factory('settings', settings);

    /* @ngInject */
  function settings () {
    var service = {
      production: true,
      test: true,
      apiEndPoint: 'http://127.0.0.1:8000/api'
      // apiEndPoint: 'https://api.vinify.co/api'
      // apiEndPoint: 'https://backoffice.vinify.co/api'
    };
    return service;
  }
})();