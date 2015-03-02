(function (app) {
  'use strict';

  app.factory('_', function ($window) {

    if ($window._ === undefined) {
      throw new Error('lodash is not bound to window');
    }

    return $window._;

  });

})(angular.module('lodash', []));
