(function () {
  'use strict';

  angular
      .module('split', [])
      .factory('split', split);

  /* @ngInject */
  function split () {
    return {
       0: {
          rose: 1,
          white: 3,
          red: 2
       },
       17: {
          rose: 1,
          white: 1,
          red: 4
       },
       19: {
          rose: 1,
          white: 4,
          red: 1
       },
       23: {
          rose: 2,
          white: 2,
          red: 2
       },
       34: {
          rose: 0,
          white: 0,
          red: 6
       },
       36: {
          rose: 0,
          white: 3,
          red: 3
       },
       38: {
          rose: 0,
          white: 6,
          red: 0
       },
       40: {
          rose: 2,
          white: 0,
          red: 4
       },
       42: {
          rose: 3,
          white: 3,
          red: 0
       },
       46: {
          rose: 4,
          white: 1,
          red: 1
       },
       53: {
          rose: 0,
          white: 2,
          red: 4
       },
       55: {
          rose: 0,
          white: 4,
          red: 2
       },
       57: {
          rose: 2,
          white: 0,
          red: 4
       },
       59: {
          rose: 2,
          white: 2,
          red: 2
       },
       61: {
          rose: 2,
          white: 4,
          red: 0
       },
       63: {
          rose: 4,
          white: 0,
          red: 2
       },
       65: {
          rose: 4,
          white: 2,
          red: 0
       },
       72: {
          rose: 0,
          white: 3,
          red: 3
       },
       76: {
          rose: 1,
          white: 2,
          red: 3
       },
       78: {
          rose: 1,
          white: 4,
          red: 1
       },
       80: {
          rose: 3,
          white: 0,
          red: 3
       },
       82: {
          rose: 3,
          white: 1,
          red: 2
       },
       84: {
          rose: 3,
          white: 3,
          red: 0
       },
       95: {
          rose: 1,
          white: 2,
          red: 3
       },
       99: {
          rose: 2,
          white: 1,
          red: 3
       },
       101: {
          rose: 2,
          white: 3,
          red: 1
       },
       118: {
          rose: 2,
          white: 2,
          red: 2
       }
    };
  }
})();