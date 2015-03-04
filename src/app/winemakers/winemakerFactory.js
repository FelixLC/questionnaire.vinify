(function () {
  'use strict';

  angular
      .module('vinibar.winemakers.factory', [ 'vinibar.winemakers', 'Mixpanel', 'toaster', 'settings' ])
      .factory('WinemakerFactory', WinemakerFactory);

  /* @ngInject */
  function WinemakerFactory (Mixpanel, toaster, $http, $q, settings, currentWinemaster) {
    var api = {
        saveOrUpdate: saveOrUpdate,
        getOrCreate: getOrCreate,
        remove: remove
    };

    // //////////////

    function saveOrUpdate (winemaker, success, failure) {
      if (winemaker.uuid) {
        return $http.put(settings.apiEndPoint + '/wines/svi/winemaker/', {
              email: currentWinemaster.email,
              winemaker: winemaker
            })
            .success(function (data, status, headers, config) {
              if (success && angular.isFunction(success)) {
                success(data);
              }
            })
            .error(function (error) {
              Mixpanel.track('Failed to update winemaker :' + currentWinemaster.email);
              if (failure && angular.isFunction(failure)) {
                failure(error);
              }
            });
      } else {
        return $http.post(settings.apiEndPoint + '/wines/svi/winemaker/', {
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
    }

    function getOrCreate (uuid) {
      if (uuid) {
        return $http.get(settings.restApiEndPoint + '/svi/winemakers/' + uuid + '/')
          .success(function (data, status, headers, config) {
            return data;
          })
          .error(function (error) {
            return $q.when({ data: {} });
          });
      } else {
        return $q.when({ data: {} });
      }
    }

    function remove (winemaker, success, failure) {
      return $http.post(settings.apiEndPoint + '/wines/svi/delete/winemaker/', {
            email: currentWinemaster.email,
            uuid: winemaker.uuid
          })
          .success(function (data, status, headers, config) {
            if (success && angular.isFunction(success)) {
              success(data);
            }
          })
          .error(function (error) {
            Mixpanel.track('Failed to remove winemaker :' + currentWinemaster.email);
            if (failure && angular.isFunction(failure)) {
              failure(error);
            }
          });
    }

    return api;
  }
})();