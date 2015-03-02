/**
 * Resource module of the application
 *
 * This module of the cosmomanager wraps the $resource in a service for the api.
 */
(function (app) {

  'use strict';

  app.factory('ModelResource', function ($resource, $q, _, settings) {

    return function (model, config) {

      var options = {
        id_name: 'uuid',
        extra_actions: null
      };

      angular.extend(options, config);

      var actions = {
        schema: {
          method: 'GET',
          url: settings.apiEndPoint + '/' + model + '/:' + options.id_name + '/schema'
        },
        action: {
          method: 'PUT'
        },
        update: {
          method: 'PUT'
        },
        remove: {
          method: 'DELETE'
        },
        clear: {
          method: 'POST',
          params: {
            listController: "clear-all"
          }
        },
        search: {
          method: 'GET',
          params: {
            listController: "search"
          },
          isArray: true
        },
        filter: {
          method: 'GET',
          isArray: true
        }
      };

      if (options.extra_actions) {
        actions = angular.extend(actions, options.extra_actions);
      }

      var parameters = {
        format: 'json',
        listController: '@listController',
        doController: '@doController'
      };
      parameters[options.id_name] = "@" + options.id_name;

      /**
       * The first argument to the $resource call builds the actual URL that will be called.
       *  - settings.apiEndPoint + '/' is self-explanatory. Contains the endpoint as exposed by the current settings
       *  - model is the name of the resource as passed to ModelResource on instantiation
       *  - :{options.id_name} is either the id, or the uuid field of the instance, as appropriate
       *  - :listController represents a specific route part on a list of objects (not an instance)
       *  - :doController represents a specific route part on an instance
       *
       * :params are replaced by whatever is passed to the request parameters when calling the actual method.
       */
      var resource = $resource(settings.apiEndPoint + '/' + model +
        '/:' + options.id_name + '/:listController/:doController', parameters, actions);

      // We need to expose this so that consumers of different resources can be more aware of their structure.
      resource.meta = {
        id_name: options.id_name,
        url_scheme: settings.apiEndPoint + '/' + model
      };

      // For lighter use when there's nothing to do but throw.
      resource.getOrThrow = function (resourceMatcher, data, success) {

        // This seems like the best way to avoid code duplication. Let Resource handle argument detection.
        return this.get.apply(this, arguments).$promise.then(null, function (error) {
          throw new Error(error);
        });

      };

      resource.prototype.saveOrUpdate = function (success, failure) {
        return $q(function (resolve, reject) {

          if (this.uuid !== void (0)) {
            this.$update(success, failure).then(resolve, reject);
          } else {
            this.$save(success, failure).then(resolve, reject);
          }

        }.bind(this));
      };

      resource.prototype.reload = function (success, failure) {
        return $q(function (resolve, reject) {

          if (this.uuid === void (0)) {
            var error = 'Cannot reload: resource has no uuid';
            if (failure) { failure(error); }
            return reject(error);
          }
          // this is an instance, hence no $promise
          this.$get().then(
            function (response) {
              if (success) { success(response); }
              resolve(response);
            },
            function (error) {
              if (error) { failure(error); }
              reject(error);
            });

        }.bind(this));
      };

      return resource;
    };
  });

}(angular.module('vinibar.modelresource', [
  'ngResource',
  'lodash',
  'settings'
  ])));
