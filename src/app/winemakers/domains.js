(function () {
  'use strict';

  angular
      .module('vinibar.winemakers.domains', [ 'vinibar.resources.domain', 'Mixpanel' ])
      .factory('domains', domains);

  /* @ngInject */
  function domains (DomainResource, Mixpanel) {
    var api = {
        domains: [],
        setDomains: setDomains,
        getDomains: getDomains
    };

    // //////////////

    function setDomains (domainList) {
      angular.forEach(domain, function (domain, index) {
        api.domains.push(new DomainResource(domain));
      });
      return api.domains;
    }

    function getDomains (index) {
      if (api.domains[index]) {
        return api.domains[index];
      } else {
        Mixpanel.track('Domain Index out of bounds');
      }
    }

    return api;
  }
})();