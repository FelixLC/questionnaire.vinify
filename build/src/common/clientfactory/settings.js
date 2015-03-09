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
      test: false,
      // apiEndPoint: 'http://127.0.0.1:8000/api',
      // restApiEndPoint: 'http://127.0.0.1:8000/restapi',
      apiEndPoint: 'https://api.vinify.co/api',
      restApiEndPoint: 'https://api.vinify.co/restapi',
      // restApiEndPoint: 'https://backoffice.vinify.co/restapi',
      // apiEndPoint: 'https://backoffice.vinify.co/api',
      // backendEndPoint: 'https://backoffice.vinify.co/api'
      backendEndPoint: 'https://api.vinify.co/api'
      // backendEndPoint: 'http://127.0.0.1:8000/api'
    };
    return service;
  }
})();