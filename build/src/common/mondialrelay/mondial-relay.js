angular.module('mondialRelay', [])
  .directive('mondialRelay', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        angular.element(document).ready(function () {
          $('#Retour_Widget').MR_ParcelShopPicker({
                  Target: "#Retour_Widget",  // selecteur jquery ou renvoyer l'ID du relais selectionné
                  Brand: "BDTEST  ",  // votre code client
                  Country: "FR"  /* pays*/
          });
        });
      }
    };

  });