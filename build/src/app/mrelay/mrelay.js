angular.module('mondialrelay', [
  'ui.router',
  'ui.bootstrap',
  'toaster',
  'settings',
  // 'myModule',
  'md5'
])

.config(["$stateProvider", function config ($stateProvider) {
  $stateProvider
    .state('mondialrelay', {
      url: '/mondialrelay/:orderid/:zipcode',
      views: {
        main: {
          controller: 'mondialrelayCtrl',
          templateUrl: 'mrelay/mrelay.tpl.html'
        }
      },
      data: { pageTitle: 'Mondial Relay' }
    });
}])


.controller('mondialrelayCtrl', ["$scope", "$stateParams", "$http", "$state", "settings", "toaster", "$timeout", "md5", function mondialrelayCtrl ($scope, $stateParams, $http, $state, settings, toaster, $timeout, md5) {

   var order_id = $stateParams.orderid;
   var zipcode = $stateParams.zipcode;
   var shop = "";

   $scope.jQueryselect = $("#Retour_Widget").val();

   //  /!\ JQUERY /!\ TRIGGER MONDIAL RELAY
   $("#Zone_Widget").MR_ParcelShopPicker({
     PostCode: zipcode,
     Target: "#Retour_Widget",  // selecteur jquery ou renvoyer l'ID du relais selectionné
     OnParcelShopSelected: function (Data) {
       shop = Data;
       shop.concat_ID = Data.Pays + '-' + Data.ID; //  Build shop ID with the callback function
     },
     Brand: "EC004507",  //  votre code client
     Country: "FR"  /* pays*/
   });

   $scope.sendMR = function ()  {

       //  LET'S CHECK IF THE USER CLICKED ON SOME SHOP
       if(shop) {
         var data = {
           shop_id: shop.concat_ID,
           shop: shop,
           order_id: order_id
         };

         var request = $http({
                         url: settings.apiEndPoint + '/orders/pickmrshop/',
                         method: 'POST',
                         data: data,
                         headers: {
                           'Content-Type': 'application/json; charset=UTF-8'
                         }
         })
         .success(function (data, status, headers, config) {
           toaster.pop('success', 'Votre point de réservation a été enregistré', 'A bientôt');
           $timeout(function () { $state.go('remerciement');}, 2000);
         })
         .error(function (data, status, headers, config) {
           toaster.pop('error', 'Oops, il y a eu une erreur !', 'Merci de réessayer');
         });

         return request;
       }

       else {alert('Merci de sélectionner un magasin');}
   };

   $scope.changeDelivery = function ()  {

       var data = {
         'order_id': order_id
       };

       var request = $http({
                       url: settings.apiEndPoint + 'orders/changedeliverymode/',
                       method: 'POST',
                       data: data,
                       headers: {
                         'Content-Type': 'application/json; charset=UTF-8'
                       }
       })
       .success(function (data, status, headers, config) {
         $state.go('paiement.login');
       })
       .error(function (data, status, headers, config) {
         alert('Une erreur est survenue, merci de réessayer');
       });

       return request;
   };

  // $http.get('http://www.mondialrelay.fr/webservice/Web_Services.asmx?WSDL', { isJSON: true }).then(function (result) {
  //   soapInterceptor.setWSDL('http://www.mondialrelay.fr/webservice/Web_Services.asmx', result.data);
  //   console.log(result.data);
  // });
  // $scope.sendMR = function () {
  //   data = {
  //     Enseigne: "EC005788",
  //     Pays: "FR",
  //    // NumPointRelais: "",
  //     Ville: "",
  //     CP: "75010",
  //     Latitude: "",
  //     Longitude: "",
  //     Taille: "",
  //     Poids: "",
  //     Action: "",
  //     DelaiEnvoi: "0",
  //     RayonRecherche: "20"
  //   };
  //   var string = '';
  //   angular.forEach(data, function (value, key) {
  //     string += value;
  //   });
  //   string += 'UvJxT93M';
  //   console.log(string);
  //   $http.post('http://www.mondialrelay.fr/webservice/Web_Services.asmx/WSI3_PointRelais_Recherche', {
  //     Enseigne: "EC005788",
  //     Pays: "FR",
  //    // NumPointRelais: "",
  //     Ville: "",
  //     CP: "75010",
  //     Latitude: "",
  //     Longitude: "",
  //     Taille: "",
  //     Poids: "",
  //     Action: "",
  //     DelaiEnvoi: "0",
  //     RayonRecherche: "20",
  //     Security: md5.createHash(string).toUpperCase()
  //   });
  // };

}]);