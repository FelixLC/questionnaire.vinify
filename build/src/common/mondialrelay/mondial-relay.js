(function () {
  'use strict';

  angular
      .module('mRelay', [ 'myModule' ])
      .factory('mRelay', mRelay);

  /* @ngInject */
  function mRelay (soap) {
    var service = {
        func: func
    };
    return service;

    // //////////////

    function func () {
    }
  }
  mRelay.$inject = ["soap"];
})();