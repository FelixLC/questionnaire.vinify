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
          Card: 5,
          Print: 0,
          Email: 0
        }
      };
    return service;
  }
})();