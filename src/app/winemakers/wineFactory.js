(function () {
  'use strict';

  angular
      .module('vinibar.wines.factory', [ 'vinibar.winemakers', 'Mixpanel', 'toaster', 'settings' ])
      .factory('WineFactory', WineFactory);

  /* @ngInject */
  function WineFactory (Mixpanel, toaster, $http, $q, settings, currentWinemaster) {
    var api = {
        winemaker: null,
        region: '',
        appellation: '',
        winemaker_name: '',
        saveOrUpdate: saveOrUpdate,
        getOrCreate: getOrCreate,
        remove: remove
    };

    // //////////////

    function saveOrUpdate (wine, success, failure) {

      // preprocessing
      wine.svi_profile.body_light = (wine.svi_profile.body === 'light');
      wine.svi_profile.body_medium = (wine.svi_profile.body === 'medium');
      wine.svi_profile.body_strong = (wine.svi_profile.body === 'strong');

      wine.svi_profile.texture_light = (wine.svi_profile.texture === 'light');
      wine.svi_profile.texture_medium = (wine.svi_profile.texture === 'medium');
      wine.svi_profile.texture_strong = (wine.svi_profile.texture === 'strong');

      wine.svi_profile.nature_light = (wine.svi_profile.nature === 'light');
      wine.svi_profile.nature_medium = (wine.svi_profile.nature === 'medium');
      wine.svi_profile.nature_strong = (wine.svi_profile.nature === 'strong');

      if (wine.uuid) {
        return $http.put(settings.apiEndPoint + '/wines/svi/wine/', {
              email: currentWinemaster.email,
              wine: wine
            })
            .success(function (data, status, headers, config) {
              if (success && angular.isFunction(success)) {
                success(data);
              }
            })
            .error(function (error) {
              Mixpanel.track('Failed to update wine :' + currentWinemaster.email);
              if (failure && angular.isFunction(failure)) {
                failure(error);
              }
            });
      } else {
        return $http.post(settings.apiEndPoint + '/wines/svi/wine/', {
              email: currentWinemaster.email,
              wine: wine
            })
            .success(function (data, status, headers, config) {
              if (success && angular.isFunction(success)) {
                success(data);
              }
            })
            .error(function (error) {
              Mixpanel.track('Failed to save wine :' + currentWinemaster.email);
              if (failure && angular.isFunction(failure)) {
                failure(error);
              }
            });
      }
    }

    function getOrCreate (uuid) {
      if (uuid) {
        return $http.get(settings.restApiEndPoint + '/svi/wines/' + uuid + '/')
          .success(function (data, status, headers, config) {
            return data;
          })
          .error(function (error) {
            return $q.when({ data: {
              winemaker: api.winemaker,
              svi_profile: {
                body_light: '',
                body_medium: '',
                body_strong: '',
                texture_light: '',
                texture_medium: '',
                texture_strong: '',
                nature_light: '',
                nature_medium: '',
                nature_strong: '',
                sweet: '',
                fruity: '',
                woody: '',
                spicy: '',
                buttery: '',
                mineral: '',
                floral: '',
                vegetal: '',
                animal: ''
              },
              display_name: '',
              region: '',
              appellation: '',
              color: '',
              vintage: '',
              variety: '',
              country: ''
            }});
          });
      } else {
        return $q.when({ data: {
          winemaker: api.winemaker,
          svi_profile: {
            body_light: '',
            body_medium: '',
            body_strong: '',
            texture_light: '',
            texture_medium: '',
            texture_strong: '',
            nature_light: '',
            nature_medium: '',
            nature_strong: '',
            sweet: '',
            fruity: '',
            woody: '',
            spicy: '',
            buttery: '',
            mineral: '',
            floral: '',
            vegetal: '',
            animal: ''
          },
          display_name: '',
          region: '',
          appellation: '',
          color: '',
          vintage: '',
          variety: '',
          country: ''
        }});
      }
    }

    function remove (wine, success, failure) {
      return $http.post(settings.apiEndPoint + '/wines/svi/delete/wine/', {
            email: currentWinemaster.email,
            uuid: wine.uuid
          })
          .success(function (data, status, headers, config) {
            if (success && angular.isFunction(success)) {
              success(data);
            }
          })
          .error(function (error) {
            Mixpanel.track('Failed to remove wine :' + currentWinemaster.email);
            if (failure && angular.isFunction(failure)) {
              failure(error);
            }
          });
    }

    return api;
  }
})();