(function () {
  'use strict';

  angular
      .module('mRelay', [ 'angularSoap', 'md5' ])
      .factory('mRelay', mRelay);

  /* @ngInject */
  function mRelay ($soap, md5) {
    var service = {
        pointRelaisRecherche: pointRelaisRecherche
    };
    return service;

    // //////////////

    function pointRelaisRecherche (zipcode) {
      var privateK = "UvJxT93M";
      var string = '';
      console.log(zipcode);
      var data = {
        Enseigne: "EC005788",
        Pays: "FR",
        NumPointRelais: "",
        Ville: "",
        CP: zipcode,
        Latitude: "",
        Longitude: "",
        Taille: "",
        Poids: "",
        Action: "",
        DelaiEnvoi: "0",
        RayonRecherche: "20",
        TypeActivite: "",
        NACE: ""
      };

      angular.forEach(data, function (value, key) {
        string += value;
      });

      string += privateK;

      data.Security = md5.createHash(string).toUpperCase();

      return $soap.get('http://api.mondialrelay.com/webservice.asmx', "WSI3_PointRelais_Recherche", data);
    }
  }
})();