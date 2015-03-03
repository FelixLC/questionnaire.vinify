(function () {
  'use strict';

  angular
      .module('vinibar.winemakers.factory', [ 'vinibar.winemakers', 'Mixpanel', 'toaster', 'settings' ])
      .factory('WinemakerFactory', WinemakerFactory);

  /* @ngInject */
  function WinemakerFactory (Mixpanel, toaster, $http, $q, settings, currentWinemaster) {
    var api = {
        saveOrUpdate: saveOrUpdate,
        getOrCreate: getOrCreate
    };

    // //////////////

    function saveOrUpdate (winemaker, success, failure) {
      return $http.post(settings.apiEndPoint + '/api/wines/svi/winemaker/', {
            email: currentWinemaster.email,
            winemaker: winemaker
          })
          .success(function (data, status, headers, config) {
            if (success && angular.isFunction(success)) {
              success(data);
            }
          })
          .error(function (error) {
            Mixpanel.track('Failed to save winemaker :' + currentWinemaster.email);
            if (failure && angular.isFunction(failure)) {
              failure(error);
            }
          });
    }

    function getOrCreate (uuid) {
      if (uuid) {
        return $http.get(settings.apiEndPoint + '/restapi/public/winemakers/' + uuid + '/')
          .success(function (data, status, headers, config) {
            return data;
          })
          .error(function (error) {
            return $q.when({});
          });
      } else {
        return $q.when({});
      }
    }

    return api;
  }
})();