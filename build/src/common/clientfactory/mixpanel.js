/*
* this module only calls mixpanel events in the production environment
*/

(function () {
  'use strict';

  angular
        .module('Mixpanel', [ 'settings', 'angulartics.google.analytics', 'angulartics.mixpanel' ])
        .config(function ($analyticsProvider) {
          // turn off automatic tracking
          $analyticsProvider.virtualPageviews(false);
        })
        .factory('Mixpanel', Mixpanel);

    /* @ngInject */
  function Mixpanel (settings, $analytics) {
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
        $analytics.eventTrack(message, params);
        // mixpanel.track(message, params);
      }
    }

    function identify (id) {
      if (settings.test) {
        console.log('Mixpanel:Identify:' + id);
      } else {
        $analytics.setUsername(id);
        // mixpanel.identify(id);
      }
    }

    function alias (id) {
      if (settings.test) {
        console.log('Mixpanel:Alias:' + id);
      } else {
        // mixpanel.alias(id);
        $analytics.setAlias(id);
      }
    }

    function set (params) {
      if (settings.test) {
        console.log('Mixpanel:People:Set');
        console.log(params);
      } else {
        $analytics.setUserProperties(params);
        // mixpanel.people.set(params);
      }
    }
  }
})();