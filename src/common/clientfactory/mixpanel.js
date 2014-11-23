/*
* this module only calls mixpanel events in the production environment
*/

(function () {
  'use strict';

  angular
        .module('Mixpanel', [ 'settings' ])
        .factory('Mixpanel', Mixpanel);

    /* @ngInject */
  function Mixpanel (settings) {
    var service = {
        track: function (message) {
          if (settings.prod) {
            return mixpanel.track(message);
          }
        }
      };
    return service;
  }
})();