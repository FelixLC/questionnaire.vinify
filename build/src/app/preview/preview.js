angular.module('vinibar.preview', [
  'ui.router',
  'ui.bootstrap',
  'Resources',
  'clientFactory',
  'Mixpanel'
])

.config(["$stateProvider", function config ($stateProvider) {
  $stateProvider
    .state('preview', {
      url: '/apercu',
      views: {
        main: {
          controller: 'previewCtrl',
          templateUrl: 'preview/preview.tpl.html'
        }
      },
      data: { pageTitle: 'Ma sélection personnalisée' }
    });
}])

.controller('previewCtrl', ["Mixpanel", "Recommender", "$scope", "currentClient", "$state", "$modal", function previewCtrl (Mixpanel, Recommender, $scope, currentClient, $state, $modal) {
  $scope.hover = {
    wine_1: false,
    wine_2: false,
    wine_3: false
  };
  $scope.preview = Recommender.getPreview();
  // $scope.preview = [{"uuid": "433293a7c2cf42ca984f9c0d98a836e4", "class_name": "wine", "product_code": "PAI11BRGE105", "slug": "vin/vallee-de-la-loire/anjou-villages/cuvee-floriane-domaine-de-paimpare-2011", "color": "Rouge", "country": "France", "region": "Vall\u00e9e de la Loire", "appellation": "Anjou Villages", "display_name": "Cuv\u00e9e Floriane Domaine de Paimpar\u00e9", "variety": "Cabernet Franc", "vintage": 2011, "public_price": 12.0, "description": "<p>La vigne est pr\u00e9sente depuis tr\u00e8s longtemps en Anjou. Ce vignoble est ainsi typique de l\u2019Anjou Noir avec ces  terrasses de schistes et de gr\u00e8s du socle armoricain,  et ces sols bruns et peu profonds. Le climat de  type oc\u00e9anique temp\u00e9r\u00e9 et particuli\u00e8rement sec conf\u00e8re \u00e0 cette cuv\u00e9e une tr\u00e8s grande finesse. </p><p>Cette cuv\u00e9e Floriane n\u2019en reste pas moins tr\u00e8s riche. Au nez, on retrouve des ar\u00f4mes de fraises des bois, framboises, et \u00e9pices, synonyme d\u2019une tr\u00e8s belle maturit\u00e9 des raisins. En bouche, vous serez charm\u00e9 par sa structure harmonieuse et soyeuse.</p>", "tasting_info": "Cuisine francaise traditionnelle</p><p>viandes rouges, les gibiers ainsi que les plateaux de fromages.</p>", "temperature": "Servir rafra\u00eechi (12-14\u00b0C)\n", "carafage": true, "testimonial": "", "occasion": "", "tasting": "Un cabernet-franc qui n'\u00e0 rien \u00e0 envier aux Bordelais!", "dress": "Pourpre", "nose": "Fruit\u00e9, Ar\u00f4mes de fraises des bois, framboises, et \u00e9pices ", "mouth": "Structure harmonieuse, Soyeuse,  Epices et fruits rouges, Persistante", "food": "Viandes rouges tels du gibier, Gigot en cuisson brais\u00e9e, R\u00f4ti de porc au four sauce moutarde.\n", "cuisine": "Cuisine francaise et traditionnelle", "meat_fish": "Porc, Agneau, B\u0153uf", "cooking": "Grill\u00e9, Four, Brais\u00e9", "sides": "Tomates, Aubergines, Pommes de Terre, Champignons", "cheeses": "", "deserts": "", "domain": "La vigne est pr\u00e9sente depuis tr\u00e8s longtemps en Anjou. Ce vignoble est ainsi typique de l\u2019Anjou Noir avec ces  terrasses de schistes et de gr\u00e8s du socle armoricain,  et ces sols bruns et peu profonds.", "domain_know_more": "Le climat de type oc\u00e9anique temp\u00e9r\u00e9 et particuli\u00e8rement sec de cette r\u00e9gion conf\u00e8re \u00e0 ce domaine de belles qualit\u00e9s de raisins. ", "info": "Service: Vous allez avoir \u00e0 faire \u00e0 un 100% cabernet-franc.  Pour d\u00e9guster ce nectar, carafez-le deux heures avant le service. Vous en appr\u00e9ciez encore plus la d\u00e9gustation..parole de Vinify! ", "education": "L'implantation du cabernet-franc dans la Loire s'est faite aux alentours du 11\u00e8me si\u00e8cle, dix sic\u00e8les apr\u00e8s son apparition dans le Bordelais.", "temperature_min": 15, "temperature_max": 18}, {"uuid": "801b1810015242b2b8e94051dbf940d3", "class_name": "wine", "product_code": "SMZ10BRGE118", "slug": "vin/bordeaux/bordeaux-superieur/recougne-terra-recognita-2010", "color": "Rouge", "country": "France", "region": "Bordeaux", "appellation": "Bordeaux Sup\u00e9rieur", "display_name": "Recougne Terra Recognita", "variety": "Merlot, Cabernet Franc, Cabernet Sauvignon", "vintage": 2010, "public_price": 12.0, "description": "<p>Le nom de Terra Recognita nous plonge au coeur du r\u00e8gne d'Henri IV, premier Bourbon Roi de France. En effet, ce terroir a \u00e9t\u00e9 officiellement reconnu par Henri IV apr\u00e8s qu'il ait pass\u00e9 une nuit au ch\u00e2teau. </p>\n<p>Cette cuv\u00e9e prestige du Ch\u00e2teau Recougne est issue de vieilles vignes, sur un terroir jouxtant Pomerol et vieux de quatre si\u00e8cles, dans un c\u00e9page classique pour cette appellation, celui de P\u00e9trus : le Merlot. </p>\n<p>Le mill\u00e9sime 2010  d\u00e9gage une belle puissance d\u2019ar\u00f4mes et commence d\u00e9j\u00e0 \u00e0 s\u2019ouvrir avec des notes de m\u00fbres, de cassis et de fruits confits.</p>", "tasting_info": "Ce vin sera l\u2019alli\u00e9 de nombreux plats cuisin\u00e9s, il est id\u00e9al sur des viandes rouges comme sur du gibier ou sur un gigot en cuisson brais\u00e9e. Il accompagnera \u00e9galement \u00e0 merveille une cuisine \u00e9pic\u00e9e ou des fromages de caract\u00e8re.</p>\n<p>Le souvenir du sommelier : Excellent sur des pigeons rotis au four, bard\u00e9s de lard aux pruneaux !</p>", "temperature": "Servir \u00e0 temp\u00e9rature ambiante (15-18\u00b0C)\n", "carafage": true, "testimonial": "Un d\u00e9lice pour les papilles alliant force et longueur en bouche.  ", "occasion": "", "tasting": "Parfait \u00e9quilibre entre la volupt\u00e9 du merlot, et les  tanins du Cabernet-Franc. Un bordelais expressif au nez et velout\u00e9 en bouche.", "dress": "Grenat profonde", "nose": "Expressif, Fruits rouges et noirs m\u00fbrs, Cassis, M\u00fbres, Fruits confits", "mouth": "Charnue, Velout\u00e9e, R\u00e9glisse en attaque, Tanins de caf\u00e9 torr\u00e9fi\u00e9,\nBois\u00e9 bien fondu, Belle longueur en\nbouche", "food": "Viandes rouges tels du gibier, Gigot en cuisson brais\u00e9e, R\u00f4ti de porc au four sauce moutarde.\n", "cuisine": "Cuisine francaise et traditionnelle", "meat_fish": "Porc, Agneau, B\u0153uf", "cooking": "Grill\u00e9, Four, Brais\u00e9", "sides": "Tomates, Aubergines, Pommes de Terre, Champignons", "cheeses": "", "deserts": "", "domain": "Le nom de Terra Recognita nous plonge au coeur du r\u00e8gne d'Henri IV, premier Bourbon Roi de France. En effet, ce terroir a \u00e9t\u00e9 officiellement reconnu par Henri IV apr\u00e8s qu'il ait pass\u00e9 une nuit au ch\u00e2teau. \n", "domain_know_more": "Cette cuv\u00e9e prestige du Ch\u00e2teau Recougne est issue de vieilles vignes, sur un terroir jouxtant Pomerol et vieux de quatre si\u00e8cles, dans un c\u00e9page classique pour cette appellation, celui de P\u00e9trus : le Merlot.", "info": "Service: Vous allez avoir \u00e0 faire \u00e0 un vin charnu et voluptueux.  Pour d\u00e9guster ce nectar, carafez-le deux heures avant le service. Vous en appr\u00e9ciez encore plus la d\u00e9gustation..parole de Vinify! ", "education": "L'histoire r\u00e9cente du ch\u00e2teau commence en 1942, quand Damase Milhade, n\u00e9gociant de vin \u00e0 Galgon, rach\u00e8te le domaine qui pratiquait alors la polyculture. Depuis, cette famille a fond\u00e9 en 1961 le premier service de vente par correspondance de vin de la r\u00e9gion et elle a aussi les ch\u00e2teaux Lyonnat et Boutisse.\n", "temperature_min": 15, "temperature_max": 18}, {"uuid": "bf85b76194c84988be12e7e07c828a8e", "class_name": "wine", "product_code": "MAR13BROS80", "slug": "vin/vallee-du-rhone/mediterranee/rosefine-2013", "color": "Ros\u00e9", "country": "France", "region": "Vall\u00e9e du Rh\u00f4ne", "appellation": "M\u00e9diterran\u00e9e", "display_name": "Ros\u00e9fine", "variety": "Grenache noir, Syrah, Merlot", "vintage": 2013, "public_price": 8.0, "description": "<p>Ros\u00e9fine de Marrenon, contrairement au ros\u00e9e Petula de Marrenon \u00e9galement,  est un vin beaucoup plus fin et \u00e9l\u00e9gant. Ce vin est un assemblage de vins issus de vignobles collinaires situ\u00e9s entre les villages de Cucuron et de Cabri\u00e8res d\u2019Aigues et de vignobles d\u00e9velopp\u00e9s sur la commune du Coustellet.</p><p> La vinification, r\u00e9alis\u00e9e avec absence d\u2019oxyg\u00e8ne, permet de prot\u00e9ger tous les ar\u00f4mes de fruits. Beaucoup moins riche en bouche et au nez, elle sera charmer les amateurs d\u2019agrumes et de touches florales. La fraicheur et la longueur en bouche sont des traits  d\u00e9finissant \u00e0 merveille cette cuv\u00e9e.</p>", "tasting_info": "Cuisine m\u00e9dt\u00e9rrann\u00e9enne</p><p>Salade m\u00e9ridionale, Fruits frais d\u2019\u00e9t\u00e9, Viandes Blanches. </p>", "temperature": "Servir l\u00e9g\u00e8rement refroidi (10\u00b0C-12\u00b0C)\n", "carafage": true, "testimonial": "Vin d\u00e9licat en bouche, fruit\u00e9, tr\u00e8s agr\u00e9able \u00e0 boire  ", "occasion": "", "tasting": "Cette cuv\u00e9e ravira les amateurs de ros\u00e9s frais et l\u00e9gers!", "dress": "Rose intense ", "nose": "L\u00e9ger, Fruit\u00e9, Notes d'agrumes et de fleurs", "mouth": "Elegante, Fra\u00eeche, Superbe longueur", "food": "Salade m\u00e9ridionale, Poulet marin\u00e9 \u00e0 la plancha, Salade Tomates & Mozzarella", "cuisine": "Cuisine m\u00e9dt\u00e9rrann\u00e9enne et italienne", "meat_fish": "Poulet, Dinde, Agneau ", "cooking": "Grill\u00e9(Plancha & Barbecue), Cru ", "sides": "Tomates, Pommes de Terre, P\u00e2tes", "cheeses": "", "deserts": "", "domain": "MARRENON c\u2019est aujourd'hui plus de 40 ans d\u2019aventure humaine commune de 1200 vignerons r\u00e9unis en coop\u00e9ratives et travaillant un vignoble de 7600 ha entre Luberon et Ventoux.", "domain_know_more": "ROSEFINE de Marrenon, contrairement au ros\u00e9e PETULA de Marrenon \u00e9galement,  est un vin beaucoup plus fin et \u00e9l\u00e9gant. Ce vin est un assemblage de vins issus de vignobles collinaires situ\u00e9s entre les villages de Cucuron et de Cabri\u00e8res d\u2019Aigues et de vignobles d\u00e9velopp\u00e9s sur la commune du Coustellet. ", "info": "Stockage : Sortez-le du r\u00e9frig\u00e9rateur et ouvrez la bouteille 30 min. avant la d\u00e9gustation pour qu\u2019il soit \u00e0 temp\u00e9rature optimale.  Si la bouteille \u00e9tait stock\u00e9e \u00e0 temp\u00e9rature ambiante, laissez-le 30 min. au cong\u00e9lateur entour\u00e9 d\u2019un chiffon bien humide ou placez-le un quart d\u2019heure dans un seau d\u2019eau fra\u00eeche avec quelques gla\u00e7ons.", "education": "La vinification a \u00e9t\u00e9 r\u00e9alis\u00e9e avec absence d\u2019oxyg\u00e8ne, cela permet de prot\u00e9ger tous les ar\u00f4mes de fruits. ", "temperature_min": 10, "temperature_max": 12}];
  $scope.order = function (type) {
    Mixpanel.track('Selected ' + type);
    currentClient.currentClient.order_type = type;
    currentClient.currentClient.order_uuid = Recommender.getUuid();
    $state.go('order.userinfos');
  };

  $scope.openModal = function (wine) {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        wine: function () {
          return wine;
        }
      }
    });

    modalInstance.result.then(function () {
    }, function () {

    });
  };
}])

.controller('ModalInstanceCtrl', ["$scope", "$modalInstance", "wine", function ($scope, $modalInstance, wine) {
  $scope.wine = wine;

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}]);
