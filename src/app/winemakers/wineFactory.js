(function () {
  'use strict';

  angular
      .module('vinibar.wines.factory', [ 'vinibar.winemakers', 'Mixpanel', 'toaster', 'settings' ])
      .factory('WineFactory', WineFactory);

  /* @ngInject */
  function WineFactory (Mixpanel, toaster, $http, $q, settings, currentWinemaster) {
    var api = {
        winemaker: null,
        saveOrUpdate: saveOrUpdate,
        getOrCreate: getOrCreate
    };

    // //////////////

    function saveOrUpdate (wine, success, failure) {
      return $http.post(settings.apiEndPoint + '/api/wines/svi/wine/', {
            email: currentWinemaster.email,
            wine: wine
          })
          .success(function (data, status, headers, config) {
            if (success && angular.isFunction(success)) {
              success(data);
            }
          })
          .error(function (error) {
            Mixpanel.track('Failed to save wine :' + WineFactory.email);
            if (failure && angular.isFunction(failure)) {
              failure(error);
            }
          });
    }

    function getOrCreate (uuid) {
      if (uuid) {
        return $http.get(settings.apiEndPoint + '/restapi/public/wines/' + uuid + '/')
          .success(function (data, status, headers, config) {
            return data;
          })
          .error(function (error) {
            return $q.when({ winemaker: api.winemaker });
          });
      } else {
        return $q.when({ winemaker: api.winemaker });
      }
    }

    return api;
  }
})();