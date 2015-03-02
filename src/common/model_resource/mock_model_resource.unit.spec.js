/**
 * Resource module of the application
 *
 * This module of the cosmomanager wraps the $resource in a service for the api.
 */
(function (app) {

  'use strict';

  app.factory('MockModelResource', function (_, $templateCache, $q) {

    return function (resourceName, config) {

      var mockData,
          mockSchema;

      var options = {
        id_name: 'uuid',
        extra_actions: null
      };

      angular.extend(options, config);

      // This is useful for clearer throwing and reporting
      function pretty (resourceName) {
        return resourceName.charAt(0).toUpperCase() + resourceName.slice(1) + 'MockResource';
      }

      /**
       * Read fixtures & schemas from tests/fixtures. ng-karma-html2js put them in templateCache for us
       * This should be done at instanciation to catch eventual mistakes or formatting problems right when they occur.
       */
      function assign (path) {
        var mockJSONString, mockJSONParsed;

        // If there's nothing corresponding in templateCache, mockDataString will be undefined.
        mockJSONString = $templateCache.get(resourceName + path);

        /**
         * If mockJSONString is undefined, this means we do not have a fixture/schema to parse. Hence we'll leave
         * mockJSONParsed undefined.
         * Here's the expected behavior in that case :
         * - if the undefined fixture / schema is never requested, do nothing, and do not warn.
         * - if the undefined fixture / schema is requested, throw then (when you check and notice it does not exist)
         */
        if (mockJSONString) {
          try {
            // TemplateCache returns a string so we must try and parse it
            mockJSONParsed = JSON.parse(mockJSONString);
          } catch (e) {
            // If JSON is invalid just throw, test must NOT pass
            throw new Error(pretty(resourceName) + ' - ' + e.message);
          }
        }

        return mockJSONParsed;
      }

      // Assign the fixtures and schemas to their variables. Will be left undefined if there's no file.
      mockData   = assign('/fixtures');
      mockSchema = assign('/schema');

      var mockResource = function () {};

      mockResource.options = options;

      mockResource.query = function (success, failure) {

        if (!mockData) {
          throw new Error(pretty(resourceName) +
            ' fixture is undefined. Please check tests/fixtures/' + resourceName + '.');
        }

        // Return the promise
        return $q(function (resolve, reject) {
          // If a callback was provided, call it now
          if (success && _.isFunction(success)) {
            success(mockData);
          }
          // Resolve the promise
          resolve(mockData);

        });
      };

      mockResource.get = function (constraints, success, failure) {
        var result;

        // If there's no fixture, throw now (see function assign above)
        if (!mockData) {
          throw new Error(pretty(resourceName) +
            ' fixture is undefined. Please check tests/fixtures/' + resourceName + '.');
        }

        // Return the promise
        return $q(function (resolve, reject) {
          var failMessage;

          // Simulate the GET routing
          result = _.where(mockData, constraints);

          // If we do not have a single match, we don't know what to return, so fail
          if (result.length !== 1) {

            // Build the fail message for more info on the error side
            failMessage = (result.length === 0) ?
              pretty(resourceName) + '.get : no ' + resourceName + ' matches the supplied {params}.' :
              pretty(resourceName) + '.get : there are several matches for your {params}.';

            // If there's a failure callback, call that
            if (failure && _.isFunction(failure)) {
              failure(failMessage);
            }
            // Reject the promise & stop right here
            return reject(failMessage);
          }

          // Now handle success. If we had a success callback, call it
          if (success && _.isFunction(success)) {
            success(result[0]);
          }
          // And resolve the promise
          resolve(result[0]);

        });
      };

      mockResource.prototype.saveOrUpdate = function (success, failure) {
        var result,
            mock = {};

        // For the sake of testing, just add an id to the object we got and send it back
        // This seems like a reasonable minimal response...
        mock[options.id_name] = '5z3e63et8qh9';
        result = _.assign(this, mock);

        // Return the promise
        return $q(function (resolve, reject) {

          // If a callback was provided, call it now
          if (success && _.isFunction(success)) {
            success(result);
          }
          // Resolve the promise
          resolve(result);

        });
      };

      mockResource.prototype.reload = function (success, failure) {
        // TODO
      };

      return mockResource;
    };

  });

}(angular.module("vinibar.mockmodelresource", [
  'lodash'
])));