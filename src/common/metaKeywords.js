(function() {
    'use strict';

    angular
        .module('Meta', [])
        .factory('PageTitle', PageTitle)
        .factory('Description', Description);

    /* @ngInject */
    function PageTitle() {
      var title = 'Vinify | des vins de qualité, adaptés à vos goûts, toujours à portée de main';
      return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
      };
    }

    /* @ngInject */
    function Description() {

      var metaDesc = 'Vinify, le caviste qui vous connaît, toujours à portée de main' +
                                                    'Je commande mon vinibar. Je déguste et je note ma sélection.' +
                                                    'Je recharge avec des vins plus proches de mes goûts.' +
                                                    'Avec Vinify, je ne suis plus jamais déçu par une bouteille de vin !' +
                                                    'Sans abonnement et entièrement sur mesure, Vinify s\'adapte totalement à mes goûts et à mon budget.';

      var metaKey  = 'vin, goût, goûts, box, abonnement, cadeau, coffret';

      var metaWebsite = 'https://app.vinify.co';
      var metaImg = 'http://www.vinify.co/img/LogoVinifyMini2.png';

      return {
        reset: reset,
        metaDescription: metaDescription,
        setMetaDescription: setMetaDescription,
        metaKeywords: metaKeywords,
        setMetaKeywords: setMetaKeywords,

        metaUrl: metaUrl,
        setMetaUrl: setMetaUrl,
        metaImage: metaImage,
        setMetaImage: setMetaImage
      };

      function reset() {
        metaDesc = '';
        metaKey  = '';
        metaWebsite = '';
        metaImg  = '';
      }

      function metaDescription() {
        return metaDesc;
      }

      function setMetaDescription(newMetaDescription) {
        metaDesc = newMetaDescription;
      }

      function metaKeywords () {
        return metaKey ;
      }

      function setMetaKeywords(newKeywords) {
        // for (var key in newKeywords) {
        //   if (metaKeywords === '') {
        //     metaKeywords += newKeywords[key].name;
        //   } else {
        //     metaKeywords += ', ' + newKeywords[key].name;
        //   }
        // }
        metaKey = newKeywords;
      }

      function metaImage () {
        return metaImg;
      }

      function setMetaImage (newMetaImage) {
        metaImg = newMetaImage;
      }

      function metaUrl () {
        return metaWebsite;
      }

      function setMetaUrl (newMetaWebsite) {
        metaWebsite = newMetaWebsite;
      }
    }
})();
