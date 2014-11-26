(function () {
  'use strict';

  angular
        .module('params', [])
        .factory('params', params);

    /* @ngInject */
  function params () {
    var service = {
        vinibar: {
          "Point Relais": 8.90,
          Colissimo: 11.90,
          Vinify: 0
        },
        refill: {
          "Point Relais": 4.90,
          Colissimo: 8.90,
          Vinify: 0
        },
        card: {
          Card: 16.90,
          Print: 11.90,
          Email: 11.90
        }
      };
    return service;
  }
})();