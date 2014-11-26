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
        track: track,
        identify: identify,
        alias: alias,
        people: {
          set: set
        }
      };
    return service;

    function track (message, params) {
      if (settings.test) {
        console.log('Mixpanel:' + message);
        if (params) {
          console.log(params);
        }
      } else {
        mixpanel.track(message, params);
      }
    }

    function identify (id) {
      if (settings.test) {
        console.log('Mixpanel:Identify:' + id);
      } else {
        mixpanel.identify(id);
      }
    }

    function alias (id) {
      if (settings.test) {
        console.log('Mixpanel:Alias:' + id);
      } else {
        mixpanel.alias(id);
      }
    }

    function set (params) {
      if (settings.test) {
        console.log('Mixpanel:People:Set');
        console.log(params);
      } else {
        mixpanel.people.set(params);
      }
    }
  }
})();