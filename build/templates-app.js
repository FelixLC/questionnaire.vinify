angular.module('templates-app', ['gift/choose.tpl.html', 'gift/gift.tpl.html', 'gift/gift_card/delivery.tpl.html', 'gift/gift_card/details.tpl.html', 'gift/gift_card/infos.tpl.html', 'gift/gift_card/pay.tpl.html', 'gift/gift_card/quiz.tpl.html', 'gift/overview.tpl.html', 'gift/vinibar/details.tpl.html', 'gift/vinibar/infos.tpl.html', 'gift/vinibar/pay.tpl.html', 'gift/vinibar/quiz.tpl.html', 'mrelay/mrelay.tpl.html', 'order/order.tpl.html', 'order/parts/order.confirmation.tpl.html', 'order/parts/order.delivery.tpl.html', 'order/parts/order.paiement.tpl.html', 'order/parts/order.userinfos.tpl.html', 'paiement/paiement.tpl.html', 'paiement/parts/paiement.confirmation.tpl.html', 'paiement/parts/paiement.login.tpl.html', 'pay_mobile/pay_mobile.tpl.html', 'preview/preview.tpl.html', 'questionnaire/parts/questionnaire.balance.tpl.html', 'questionnaire/parts/questionnaire.coffee.tpl.html', 'questionnaire/parts/questionnaire.comments.tpl.html', 'questionnaire/parts/questionnaire.cuisine.tpl.html', 'questionnaire/parts/questionnaire.discovery.comments.tpl.html', 'questionnaire/parts/questionnaire.juice.tpl.html', 'questionnaire/parts/questionnaire.profile.tpl.html', 'questionnaire/parts/questionnaire.starter.tpl.html', 'questionnaire/parts/questionnaire.winemap.tpl.html', 'questionnaire/questionnaire.tpl.html', 'remerciement/remerciement.tpl.html', 'remerciement_mobile/remerciement_mobile.tpl.html', 'remerciement_order/remerciement_order.tpl.html', 'welcome/welcome.tpl.html']);

angular.module("gift/choose.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/choose.tpl.html",
    "<div class=\"gift-header\">\n" +
    "  <h1>offrez plus que du vin</h1>\n" +
    "  <h2>Vinify, le bar à vin sur mesure. Livré chez vous, selon vos goûts.</h2>\n" +
    "</div>\n" +
    "<div class=\"gift-overview\">\n" +
    "  <div>\n" +
    "    <h2 class=\"col-title\">Un Vinibar</h2>\n" +
    "    <p>6 bouteilles sélectionnés en fonction de ses goûts. L’accès à notre application pour noter les vins et retrouver les conseils d’un  oenologue</p>\n" +
    "    <p class=\"price\">69€ (+ 10€ livraison France)</p>\n" +
    "    <h2 class=\"col-title\">Les recharges</h2>\n" +
    "    <p>Offrez-lui la possibilité de recharger son vinibar avec des vins choisis en fonction des notes qu’il à données au 6 premières bouteilles !</p>\n" +
    "    <p class=\"price\">à partir de 29€ (3 bouteilles)</p>\n" +
    "  </div>\n" +
    "  <div><img src=\"assets/vinibar-showcase-half.jpg\" alt=\"vinibar-showcase\"></div>\n" +
    "</div>\n" +
    "<div class=\"gift-spacer\">\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"gift-header gift-second-header\">\n" +
    "  <h1>Choix du cadeau</h1>\n" +
    "  <h2>Vous pouvez lui offrir soit un Vinibar, soit une carte cadeau</h2>\n" +
    "</div>\n" +
    "<div class=\"gift-choose\">\n" +
    "  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "    <h2 class=\"col-title\">Vinibar</h2>\n" +
    "    <div class=\"col-container\">\n" +
    "      <p>\n" +
    "        <a href=\"\"\n" +
    "              class=\"dotted-underline\"\n" +
    "              popover-title=\"Que faut-il savoir ?\"\n" +
    "              popover=\"Est-ce qu'il prend du café ? Quel est son dessert préféré ? Quel couleur de vins boit-il ? ...\"\n" +
    "              popover-trigger=\"mouseenter\"\n" +
    "              popover-placement=\"bottom\">Je connais ses goûts</a>, je lui offre directement un bar personnalisé\n" +
    "      </p>\n" +
    "      <div class=\"steps\">\n" +
    "        <div><span class=\"gift-step\">1</span></div>\n" +
    "        <div><p>Je choisis le destinataire <br> et le montant de son cadeau</p></div>\n" +
    "      </div>\n" +
    "      <div class=\"steps\">\n" +
    "        <div><span class=\"gift-step\">2</span></div>\n" +
    "        <div><p>Je remplis le quiz Vinify <br> sur ses goûts pour lui</p></div>\n" +
    "      </div>\n" +
    "      <div class=\"steps\">\n" +
    "        <div><span class=\"gift-step\">3</span></div>\n" +
    "        <div><p>J’envoie le vinibar  <br> à l’adresse de mon choix</p></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <button class=\"btn_square margin-top\" ui-sref=\"gift.vinibar.details\">Vinibar</button>\n" +
    "  </div>\n" +
    "    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "    <h2 class=\"col-title\">Carte Cadeau</h2>\n" +
    "    <div class=\"col-container\">\n" +
    "      <p>Je ne connais pas ses goûts, je lui offre un bon cadeau pour commencer l’aventure</p>\n" +
    "      <div class=\"steps\">\n" +
    "        <div><span class=\"gift-step\">1</span></div>\n" +
    "        <div><p>Je choisis le destinataire <br> et le montant de son cadeau</p></div>\n" +
    "      </div>\n" +
    "      <div class=\"steps\">\n" +
    "        <div><span class=\"gift-step\">2</span></div>\n" +
    "        <div><p>J’écris mon message et Vinify l’envoie <br> par mail ou par la poste</p></div>\n" +
    "      </div>\n" +
    "      <div class=\"steps\">\n" +
    "        <div><span class=\"gift-step\">3</span></div>\n" +
    "        <div><p>Le destinataire recoit ma carte <br> et démarre l’aventure avec le quiz Vinify</p></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <button class=\"btn_square margin-top\" ui-sref=\"gift.gift_card.details\">Carte Cadeau</button>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("gift/gift.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/gift.tpl.html",
    "<div>\n" +
    "  <nav class=\"navbar\" role=\"navigation\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"navbar-header\">\n" +
    "         <a href=\"\"><img alt=\"\" src=\"assets/logo.png\" style=\"height:45px\"/></a>\n" +
    "      </div>\n" +
    "      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "          <li><a href=\"\"><img alt=\"\" src=\"assets/oclipboard.png\" class=\"opacity-link\" style=\"height:45px\"/></a></li>\n" +
    "          <li ng-show=\"state == 'order.userinfos'\"><a href=\"\"><img alt=\"\" src=\"assets/dolly.png\" style=\"height:45px\"/></a></li>\n" +
    "          <li ng-show=\"!(state == 'order.userinfos')\"><a href=\"\"><img alt=\"\" class=\"opacity-link\" src=\"assets/odolly.png\" style=\"height:45px\"/></a></li>\n" +
    "          <li ng-show=\"state == 'order.paiement'\"><a href=\"\"><img alt=\"\" src=\"assets/creditcard.png\" style=\"height:45px\"/></a></li>\n" +
    "          <li ng-hide=\"state == 'order.paiement'\"><a href=\"\"><img alt=\"\" class=\"opacity-link\" src=\"assets/ocreditcard.png\" style=\"height:45px\"/></a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /.navbar-collapse -->\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "  <div id=\"gift\">\n" +
    "      <toaster-container toaster-options=\"{'time-out': 4000, 'position-class': 'toast-top-right'}\"></toaster-container>\n" +
    "      <div ui-view class=\"gift-container\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("gift/gift_card/delivery.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/gift_card/delivery.tpl.html",
    "<div><h1>hey</h1></div>");
}]);

angular.module("gift/gift_card/details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/gift_card/details.tpl.html",
    "<div class=\"gift-header\">\n" +
    "  <h1>offrir un vinibar</h1>\n" +
    "  <h2>Je choisis la formule que j'offre</h2>\n" +
    "</div>\n" +
    "<div class=\"row container-fluid\">\n" +
    "  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Vinibar</h2>\n" +
    "      <div class=\"col-container checked\">\n" +
    "        <h3>Vinibar</h3>\n" +
    "        <p class=\"price\">69 €</p>\n" +
    "        <p class=\"help\">(quiz Vinify sur ses goûts à l'étape suivante)</p>\n" +
    "      </div>\n" +
    "      <p class=\"details-helper\">Choisissez ici la formule que vous souhaitez offir. Vous pouvez ajouter plusieurs recharges d'avance au Vinibar, qui seront prépayées avec leur livraison.</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Crédits</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"details.credits = !details.credits \" ng-class=\"{quizchecked: details.credits}\">\n" +
    "          <p>Ajoutez des crédits pour recharger son vinibar</p>\n" +
    "        </div>\n" +
    "        <div ng-show=\"details.credits\" class=\"col-container-price-level\">\n" +
    "          <div ng-class=\"{checked: gift.order.credits === 40 }\"\n" +
    "                    class=\"no-border\"\n" +
    "                    ng-click=\"gift.order.credits = 40 \">\n" +
    "            <p>40 €<p>\n" +
    "          </div>\n" +
    "          <div ng-class=\"{checked: gift.order.credits === 60 }\"\n" +
    "                    class=\"no-border\"\n" +
    "                    ng-click=\"gift.order.credits = 60 \">\n" +
    "            <p>60 €<p>\n" +
    "          </div>\n" +
    "          <div ng-class=\"{checked: gift.order.credits === 100 }\"\n" +
    "                    ng-click=\"gift.order.credits = 100 \">\n" +
    "            <p>100 €<p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"details.credits\" class=\"free-amount\">\n" +
    "          <div><p class=\"col-subtitle\">Ou rentrez montant de votre choix</p></div>\n" +
    "          <div><input type=\"number\" class=\"form-control\" ng-model=\"gift.order.credits\"> <p>€</p></div>\n" +
    "        </div>\n" +
    "<!--         <p class=\"col-subtitle\">Prix des recharges\n" +
    "          <a href=\"#\" tooltip=\"Le Vinibar est entièrement personnalisé, et le prix des recharges aussi\"><i class=\"fa fa-info-circle\"></i></a></p>\n" +
    "        <div class=\"col-container-price-level\">\n" +
    "          <div ng-class=\"{checked: details.credits.price_level === 29.90 }\"\n" +
    "                    class=\"no-border\"\n" +
    "                    ng-click=\"details.credits.price_level = 29.90 \">\n" +
    "            <p>29€90</p>\n" +
    "          </div>\n" +
    "          <div ng-class=\"{checked: details.credits.price_level === 39.90 }\"\n" +
    "                    class=\"no-border\"\n" +
    "                    ng-click=\"details.credits.price_level = 39.90 \">\n" +
    "            <p>39€90</p>\n" +
    "          </div>\n" +
    "          <div ng-class=\"{checked: details.credits.price_level === 49.90 }\"\n" +
    "                    ng-click=\"details.credits.price_level = 49.90 \">\n" +
    "            <p>49€90</p>\n" +
    "          </div>\n" +
    "        </div> -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Livraison</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Comment voulez vous envoyer votre bon cadeau ?</p>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.order.gift_type = 'Email' \" ng-class=\"{quizchecked: gift.order.gift_type === 'Email'}\">\n" +
    "            <p>Par email</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.order.gift_type = 'Print' \" ng-class=\"{quizchecked: gift.order.gift_type === 'Print'}\">\n" +
    "            <p>Je l'imprime moi-même</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.order.gift_type = 'Card' \" ng-class=\"{quizchecked: gift.order.gift_type === 'Card'}\">\n" +
    "            <p>Par la Poste (+5€)</p>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row container-fluid row-totals\">\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Prix du bar</p>\n" +
    "        <p class=\"centered\">69 €</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Total de crédits</p>\n" +
    "        <p class=\"centered\">{{gift.order.credits | number:2}} €</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <div class=\"col-container centered\">\n" +
    "        <p>Total de la commande</p>\n" +
    "        <p>{{details.total + gift.order.credits | number:2}} €</p>\n" +
    "      </div>\n" +
    "      <div class=\"btn_block_primary centered margin-top\" ui-sref=\"gift.gift_card.infos\"><p>Continuer</p></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "");
}]);

angular.module("gift/gift_card/infos.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/gift_card/infos.tpl.html",
    "<div class=\"gift-header\">\n" +
    "  <h1>offrir un vinibar</h1>\n" +
    "  <h2>Je remplis ses coordonnées</h2>\n" +
    "</div>\n" +
    "<form novalidate name=\"infos\" ng-submit=\"toSurvey(infos)\">\n" +
    "  <div class=\"row container-fluid\">\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">L'heureux élu</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Glissez un mot doux dans son Vinibar</p>\n" +
    "        <div class=\"gift-receiver\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n" +
    "              <p class=\"\">Civilité</p>\n" +
    "              <select name=\"\" id=\"\" ng-model=\"gift.order.sex\" class=\"form-control input-error\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.sex.$invalid}\"\n" +
    "                            required>\n" +
    "                <option value=\"m\">M.</option>\n" +
    "                <option value=\"f\">Mme</option>\n" +
    "              </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n" +
    "              <p class=\"\">Prénom</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_first_name\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_first_name.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "              <p class=\"\">Email</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_email\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_email.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "              <p class=\"\">Message</p>\n" +
    "              <textarea ng-model=\"gift.order.message\" class=\"form-control\" rows=\"6\"></textarea>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"gift.order.gift_type === 'Card' \" class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Livraison</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Vous pouvez vous faire livrer le premier bar si vous voulez l'offrir vous même</p>\n" +
    "        <div class=\"gift-receiver\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Prénom</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.first_name\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.first_name.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Nom</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.last_name\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.last_name.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "              <p class=\"\">Rue</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.street\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.street.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Code Postal</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.zipcode\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.zipcode.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Ville</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.city\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.city.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Code</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.digicode\">\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Interphone</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.intercom\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "              <p class=\"\">Informations Complémentaires</p>\n" +
    "                <textarea class=\"form-control\" rows=\"2\" ng-model=\"gift.order.receiver_address.other_info\" placeholder=\"Société, Bâtiment, Escalier, Etage ...\" id=\"gift.order.receiver_address.other_info\"></textarea>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "        <h2 class=\"col-title\">Moi</h2>\n" +
    "        <div class=\"col-container\">\n" +
    "          <p class=\"col-subtitle\">Je ne suis pas encore client Vinify</p>\n" +
    "          <div class=\"gift-giver gift-giver-new\">\n" +
    "            <form action=\"\">\n" +
    "              <div class=\"row\">\n" +
    "                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                  <p class=\"\">Prénom</p>\n" +
    "                  <input type=\"text\" class=\"form-control\" ng-model=\"gift.giver.first_name\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                  <p class=\"\">Nom</p>\n" +
    "                  <input type=\"text\" class=\"form-control\" ng-model=\"gift.giver.last_name\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"row\">\n" +
    "                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                  <p class=\"\">Email</p>\n" +
    "                  <input type=\"text\" class=\"form-control\" ng-model=\"gift.giver.email\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                  <p class=\"\">Mot de Passe</p>\n" +
    "                  <input type=\"password\" class=\"form-control\" ng-model=\"gift.giver.password\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-container margin-top\" >\n" +
    "          <p class=\"col-subtitle\">Je ne suis pas déja client Vinify</p>\n" +
    "          <div class=\"gift-giver\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                <p class=\"\">Email</p>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"gift.client.username\">\n" +
    "              </div>\n" +
    "              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                <p class=\"\">Mot de Passe</p>\n" +
    "                <input type=\"password\" class=\"form-control\" ng-model=\"gift.client.password\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  <div class=\"row container-fluid\">\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 pull-right\">\n" +
    "        <button type=\"submit\" class=\"btn_block_primary centered margin-top\">Continuer</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>");
}]);

angular.module("gift/gift_card/pay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/gift_card/pay.tpl.html",
    "<div><h1>hey</h1></div>");
}]);

angular.module("gift/gift_card/quiz.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/gift_card/quiz.tpl.html",
    "<div><h1>hey</h1></div>");
}]);

angular.module("gift/overview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/overview.tpl.html",
    "<div class=\"gift-header\">\n" +
    "  <h1>offrez plus que du vin</h1>\n" +
    "  <h2>Vinify, le bar à vin sur mesure. Livré chez vous, selon vos goûts.</h2>\n" +
    "</div>\n" +
    "<div class=\"gift-overview\">\n" +
    "  <div>\n" +
    "    <h4>Le Cadeau</h4>\n" +
    "    <p class=\"title\">Un Vinibar</p>\n" +
    "    <p>6 bouteilles sélectionnés en fonction de ses goûts. L’accès à notre application pour noter les vins et retrouver les conseils d’un  oenologue</p>\n" +
    "    <p class=\"price\">69€ (+ 10€ livraison France)</p>\n" +
    "    <p class=\"title\">Les recharges</p>\n" +
    "    <p>Offrez-lui la possibilité de recharger son vinibar avec des vins choisis en fonction des notes qu’il à données au 6 premières bouteilles !</p>\n" +
    "    <p class=\"price\">à partir de 29€ (3 bouteilles)</p>\n" +
    "  </div>\n" +
    "  <div><img src=\"assets/vinibar-showcase-half.jpg\" alt=\"vinibar-showcase\"></div>\n" +
    "</div>\n" +
    "<div class=\"gift-continue\">\n" +
    "  <button class=\"button btn-square\" ui-sref=\"gift.choose\">Continuer</button>\n" +
    "</div>");
}]);

angular.module("gift/vinibar/details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/vinibar/details.tpl.html",
    "<div class=\"gift-header\">\n" +
    "  <h1>offrir un vinibar</h1>\n" +
    "  <h2>Je choisis la formule que j'offre</h2>\n" +
    "</div>\n" +
    "<div class=\"row container-fluid\">\n" +
    "  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Vinibar</h2>\n" +
    "      <div class=\"col-container checked\">\n" +
    "        <h3>Vinibar</h3>\n" +
    "        <p class=\"price\">69 €</p>\n" +
    "        <p class=\"help\">(quiz Vinify sur ses goûts à l'étape suivante)</p>\n" +
    "      </div>\n" +
    "      <p class=\"details-helper\">Choisissez ici la formule que vous souhaitez offir. Vous pouvez ajouter plusieurs recharges d'avance au Vinibar, qui seront prépayées avec leur livraison.</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Crédits</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"details.credits = !details.credits \" ng-class=\"{quizchecked: details.credits}\">\n" +
    "          <p>Ajoutez des crédits pour recharger son vinibar</p>\n" +
    "        </div>\n" +
    "        <div ng-show=\"details.credits\" class=\"col-container-price-level\">\n" +
    "          <div ng-class=\"{checked: gift.order.credits === 40 }\"\n" +
    "                    class=\"no-border\"\n" +
    "                    ng-click=\"gift.order.credits = 40 \">\n" +
    "            <p>40 €<p>\n" +
    "          </div>\n" +
    "          <div ng-class=\"{checked: gift.order.credits === 60 }\"\n" +
    "                    class=\"no-border\"\n" +
    "                    ng-click=\"gift.order.credits = 60 \">\n" +
    "            <p>60 €<p>\n" +
    "          </div>\n" +
    "          <div ng-class=\"{checked: gift.order.credits === 100 }\"\n" +
    "                    ng-click=\"gift.order.credits = 100 \">\n" +
    "            <p>100 €<p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"details.credits\" class=\"free-amount\">\n" +
    "          <div><p class=\"col-subtitle\">Ou rentrez montant de votre choix</p></div>\n" +
    "          <div><input type=\"number\" class=\"form-control\" ng-model=\"gift.order.credits\"> <p>€</p></div>\n" +
    "        </div>\n" +
    "<!--         <p class=\"col-subtitle\">Prix des recharges\n" +
    "          <a href=\"#\" tooltip=\"Le Vinibar est entièrement personnalisé, et le prix des recharges aussi\"><i class=\"fa fa-info-circle\"></i></a></p>\n" +
    "        <div class=\"col-container-price-level\">\n" +
    "          <div ng-class=\"{checked: details.credits.price_level === 29.90 }\"\n" +
    "                    class=\"no-border\"\n" +
    "                    ng-click=\"details.credits.price_level = 29.90 \">\n" +
    "            <p>29€90</p>\n" +
    "          </div>\n" +
    "          <div ng-class=\"{checked: details.credits.price_level === 39.90 }\"\n" +
    "                    class=\"no-border\"\n" +
    "                    ng-click=\"details.credits.price_level = 39.90 \">\n" +
    "            <p>39€90</p>\n" +
    "          </div>\n" +
    "          <div ng-class=\"{checked: details.credits.price_level === 49.90 }\"\n" +
    "                    ng-click=\"details.credits.price_level = 49.90 \">\n" +
    "            <p>49€90</p>\n" +
    "          </div>\n" +
    "        </div> -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Livraison</h2>\n" +
    "      <div class=\"col-container\"\n" +
    "          ng-class=\"{checked: gift.order.delivery_mode === 'Vinify' }\"\n" +
    "          ng-click=\"gift.order.delivery_mode ='Vinify'\">\n" +
    "        <h3>Retrait Vinify</h3>\n" +
    "        <p class=\"price\">Gratuit</p>\n" +
    "        <p class=\"help\">Venez nous voir à Issy (92)</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-container\"\n" +
    "          ng-class=\"{checked: gift.order.delivery_mode === 'Point Relais' }\"\n" +
    "          ng-click=\"gift.order.delivery_mode = 'Point Relais'\">\n" +
    "        <h3>Point Relais</h3>\n" +
    "        <p class=\"price\">{{costs['vinibar']['Point Relais'] }} € </p>\n" +
    "        <p class=\"help\">Livré dans le point relais de votre choix</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-container\"\n" +
    "          ng-class=\"{checked: gift.order.delivery_mode === 'Colissimo' }\"\n" +
    "          ng-click=\"gift.order.delivery_mode =  'Colissimo'\">\n" +
    "        <h3>Colissimo Suivi</h3>\n" +
    "        <p class=\"price\">{{costs['vinibar']['Colissimo'] }} €</p>\n" +
    "        <p class=\"help\">Livré à domicile par la Poste</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row container-fluid row-totals\">\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Prix du bar</p>\n" +
    "        <p class=\"centered\">69 €</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Total de crédits</p>\n" +
    "        <p class=\"centered\">{{gift.order.credits | number:2}} €</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <div class=\"col-container centered\">\n" +
    "        <p>Total de la commande</p>\n" +
    "        <p>{{details.total + gift.order.credits | number:2}} €</p>\n" +
    "      </div>\n" +
    "      <div class=\"btn_block_primary centered margin-top\" ui-sref=\"gift.vinibar.infos\"><p>Continuer</p></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "");
}]);

angular.module("gift/vinibar/infos.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/vinibar/infos.tpl.html",
    "<div class=\"gift-header\">\n" +
    "  <h1>offrir un vinibar</h1>\n" +
    "  <h2>Je remplis ses coordonnées</h2>\n" +
    "</div>\n" +
    "<form novalidate name=\"infos\" ng-submit=\"toSurvey(infos)\">\n" +
    "  <div class=\"row container-fluid\">\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">L'heureux élu</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Glissez un mot doux dans son Vinibar</p>\n" +
    "        <div class=\"gift-receiver\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n" +
    "              <p class=\"\">Civilité</p>\n" +
    "              <select name=\"\" id=\"\" ng-model=\"gift.order.sex\" class=\"form-control input-error\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.sex.$invalid}\"\n" +
    "                            required>\n" +
    "                <option value=\"m\">M.</option>\n" +
    "                <option value=\"f\">Mme</option>\n" +
    "              </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n" +
    "              <p class=\"\">Prénom</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_first_name\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_first_name.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "              <p class=\"\">Email</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_email\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_email.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "              <p class=\"\">Message</p>\n" +
    "              <textarea ng-model=\"gift.order.message\" class=\"form-control\" rows=\"6\"></textarea>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Livraison</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Vous pouvez vous faire livrer le premier bar si vous voulez l'offrir vous même</p>\n" +
    "        <div class=\"gift-receiver\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Prénom</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.first_name\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.first_name.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Nom</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.last_name\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.last_name.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "              <p class=\"\">Rue</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.street\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.street.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Code Postal</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.zipcode\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.zipcode.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Ville</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.city\"\n" +
    "                            ng-class=\"{'input-error' : infos.submitted && gift.order.receiver_address.city.$invalid}\"\n" +
    "                            required>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Code</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.digicode\">\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "              <p class=\"\">Interphone</p>\n" +
    "              <input type=\"text\" class=\"form-control\" ng-model=\"gift.order.receiver_address.intercom\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "              <p class=\"\">Informations Complémentaires</p>\n" +
    "                <textarea class=\"form-control\" rows=\"2\" ng-model=\"gift.order.receiver_address.other_info\" placeholder=\"Société, Bâtiment, Escalier, Etage ...\" id=\"gift.order.receiver_address.other_info\"></textarea>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "        <h2 class=\"col-title\">Moi</h2>\n" +
    "        <div class=\"col-container\">\n" +
    "          <p class=\"col-subtitle\">Je ne suis pas encore client Vinify</p>\n" +
    "          <div class=\"gift-giver gift-giver-new\">\n" +
    "            <form action=\"\">\n" +
    "              <div class=\"row\">\n" +
    "                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                  <p class=\"\">Prénom</p>\n" +
    "                  <input type=\"text\" class=\"form-control\" ng-model=\"gift.giver.first_name\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                  <p class=\"\">Nom</p>\n" +
    "                  <input type=\"text\" class=\"form-control\" ng-model=\"gift.giver.last_name\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"row\">\n" +
    "                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                  <p class=\"\">Email</p>\n" +
    "                  <input type=\"text\" class=\"form-control\" ng-model=\"gift.giver.email\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                  <p class=\"\">Mot de Passe</p>\n" +
    "                  <input type=\"password\" class=\"form-control\" ng-model=\"gift.giver.password\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-container margin-top\" >\n" +
    "          <p class=\"col-subtitle\">Je ne suis pas déja client Vinify</p>\n" +
    "          <div class=\"gift-giver\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                <p class=\"\">Email</p>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"gift.client.username\">\n" +
    "              </div>\n" +
    "              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "                <p class=\"\">Mot de Passe</p>\n" +
    "                <input type=\"password\" class=\"form-control\" ng-model=\"gift.client.password\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  <div class=\"row container-fluid\">\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 pull-right\">\n" +
    "        <button type=\"submit\" class=\"btn_block_primary centered margin-top\">Continuer</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>");
}]);

angular.module("gift/vinibar/pay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/vinibar/pay.tpl.html",
    "<div class=\"gift-header\">\n" +
    "  <h1>offrir un vinibar</h1>\n" +
    "  <h2>Vous êtes sur le point de rendre quelqu'un heureux !</h2>\n" +
    "</div>\n" +
    "<div class=\"row container-fluid\">\n" +
    "  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "    <h2 class=\"col-title\">Mon cadeau</h2>\n" +
    "    <div class=\"col-container\">\n" +
    "      <table class=\"table-bill\">\n" +
    "          <tr>\n" +
    "            <td><p>Vinibar </p></td>\n" +
    "            <td><p>69&nbsp;€</p></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><p>Livraison </p></td>\n" +
    "            <td>\n" +
    "              <p>\n" +
    "                {{gift.order.delivery_cost}}&nbsp;€\n" +
    "              </p>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr ng-show=\"gift.order.credits\">\n" +
    "            <td><p>Recharges </p></td>\n" +
    "            <td><p>{{gift.order.credits}}&nbsp;€</p></td>\n" +
    "          </tr>\n" +
    "          <tr  class=\"\">\n" +
    "            <td><h4>Total </h4></td>\n" +
    "            <td><h4>{{69 + delivery.cost - client.order.coupon.value | number:1}}&nbsp;€</h4></td>\n" +
    "          </tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <h2 class=\"col-title\">Paiement</h2>\n" +
    "    <div class=\"col-container centered\">\n" +
    "       <form name=\"stripe-form\" id=\"stripe-form\" stripe-form=\"submit\">\n" +
    "         <div class=\"row\">\n" +
    "           <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n" +
    "                <p class=\"\">Numéro de carte</p>\n" +
    "               <i class=\"icon ion-card\"></i> <input class=\"form-control\" type=\"text\" name=\"number\" id=\"number\" ng-model=\"number\" placeholder=\"XXXX XXXX XXXX XXXX\" payments-validate=\"card\" payments-type-model=\"type\" payments-format=\"card\"  required/>\n" +
    "           </div>\n" +
    "           <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n" +
    "                <p class=\"\">CVC</p>\n" +
    "               <i class=\"icon ion-locked\"></i> <input class=\"form-control\" type=\"text\" name=\"cvc\" id=\"cvc\" ng-model=\"cvc\" placeholder=\"XXX\" payments-validate=\"cvc\" payments-format=\"cvc\" required/>\n" +
    "           </div>\n" +
    "         </div>\n" +
    "         <div class=\"row\">\n" +
    "           <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n" +
    "\n" +
    "               <p class=\"\">Mois</p>\n" +
    "               <select class=\"form-control\" name=\"expMonth\" ng-model=\"expMonth\" placeholder=\"MM\"required>\n" +
    "                 <option value=\"01\">Janvier</option>\n" +
    "                 <option value=\"02\">Février</option>\n" +
    "                 <option value=\"03\">Mars</option>\n" +
    "                 <option value=\"04\">Avril</option>\n" +
    "                 <option value=\"05\">Mai</option>\n" +
    "                 <option value=\"06\">Juin</option>\n" +
    "                 <option value=\"07\">Juillet</option>\n" +
    "                 <option value=\"08\">Août</option>\n" +
    "                 <option value=\"09\">Septembre</option>\n" +
    "                 <option value=\"10\">Octobre</option>\n" +
    "                 <option value=\"11\">Novembre</option>\n" +
    "                 <option value=\"12\">Décembre</option>\n" +
    "               </select>\n" +
    "\n" +
    "  <!--             <label class=-input\">\n" +
    "               <i class=\"icon ion-ios7-calendar-outline\"></i> <input type=\"text\" name=\"expiry\" id=\"expiry\" ng-model=\"expiry\" placeholder=\"MM\" payments-validate=\"expiry\" payments-format=\"expiry\" required/>\n" +
    "             </label> -->\n" +
    "           </div>\n" +
    "           <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n" +
    "\n" +
    "               <p class=\"\">Année</p>\n" +
    "               <select class=\"form-control\" name=\"expYear\" ng-model=\"expYear\" required>\n" +
    "                 <option>2014</option>\n" +
    "                 <option>2015</option>\n" +
    "                 <option>2016</option>\n" +
    "                 <option>2017</option>\n" +
    "                 <option>2018</option>\n" +
    "                 <option>2019</option>\n" +
    "                 <option>2020</option>\n" +
    "               </select>\n" +
    "\n" +
    "  <!--             <label class=-input\">\n" +
    "               <i class=\"icon ion-locked\"></i> <input type=\"text\" name=\"cvc\" id=\"cvc\" ng-model=\"cvc\" placeholder=\"CVC\" payments-validate=\"cvc\" payments-format=\"cvc\" required/>\n" +
    "             </label> -->\n" +
    "           </div>\n" +
    "         </div>\n" +
    "         <div class=\"row row-submit centered\">\n" +
    "         <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "            <div><input type=\"hidden\" name=\"name\" ng-model=\"gift.giver.last_name\"/></div>\n" +
    "            <div class=\"btn_block_primary centered margin-top\"  ng-click=\"updateSurvey(gift)\" ><button class=\"btn btn_square\" value=\"submit\">Offrir mon cadeau</button></div>\n" +
    "         </div>\n" +
    "         </div>\n" +
    "       </form>\n" +
    "    </div>\n" +
    "    <div class=\"centered\">\n" +
    "       <img src=\"assets/credit_cards.png\" alt=\"\"> <i class=\"fa fa-lock\"></i> <p>SSL Secure</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n" +
    "    <h2 class=\"col-title\">Envoyé à</h2>\n" +
    "    <div class=\"col-container centered\">\n" +
    "      <p>{{gift.order.receiver_address.first_name}} {{gift.order.receiver_address.last_name}}</p>\n" +
    "      <p>{{gift.order.receiver_address.street}}</p>\n" +
    "      <p>{{gift.order.receiver_address.zipcode}} {{gift.order.receiver_address.city}}</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("gift/vinibar/quiz.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("gift/vinibar/quiz.tpl.html",
    "<div class=\"gift-header\">\n" +
    "  <h1>offrir un vinibar</h1>\n" +
    "  <h2>Je réponds au quiz vinify</h2>\n" +
    "</div>\n" +
    "<div id=\"quiz\" class=\"row container-fluid\">\n" +
    "  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Au petit déjeuner</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Il / elle préfère son café</p>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_1.answ = 1\" ng-class=\"{quizchecked: gift.receiver.survey.quest_1.answ === 1}\">\n" +
    "            <p>Noir</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_1.answ = 2\" ng-class=\"{quizchecked: gift.receiver.survey.quest_1.answ === 2}\">\n" +
    "            <p>Sucre</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_1.answ = 3\" ng-class=\"{quizchecked: gift.receiver.survey.quest_1.answ === 3}\">\n" +
    "            <p>Crème</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_1.answ = 4\" ng-class=\"{quizchecked: gift.receiver.survey.quest_1.answ === 4}\">\n" +
    "            <p>Pas de café</p>\n" +
    "          </div>\n" +
    "        <hr class=\"backgrounded\">\n" +
    "        <p class=\"col-subtitle\">Pour se désalterer</p>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_2.answ = 1\" ng-class=\"{quizchecked: gift.receiver.survey.quest_2.answ === 1}\">\n" +
    "            <p>Un jus de pamplemousse</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_2.answ = 2\" ng-class=\"{quizchecked: gift.receiver.survey.quest_2.answ === 2}\">\n" +
    "            <p>Un jus de pomme</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_2.answ = 3\" ng-class=\"{quizchecked: gift.receiver.survey.quest_2.answ === 3}\">\n" +
    "            <p>Un jus de fruits exotiques</p>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Ensuite</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Quelle cuisine préfère-t-il/elle&nbsp;?</p>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_3.answ_1 = !gift.receiver.survey.quest_3.answ_1\" ng-class=\"{quizchecked: gift.receiver.survey.quest_3.answ_1 === true}\">\n" +
    "          <p>Française</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_3.answ_2 = !gift.receiver.survey.quest_3.answ_2\" ng-class=\"{quizchecked: gift.receiver.survey.quest_3.answ_2 === true}\">\n" +
    "          <p>Italienne</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_3.answ_3 = !gift.receiver.survey.quest_3.answ_3\" ng-class=\"{quizchecked: gift.receiver.survey.quest_3.answ_3 === true}\">\n" +
    "          <p>Asiatique</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_3.answ_4 = !gift.receiver.survey.quest_3.answ_4\" ng-class=\"{quizchecked: gift.receiver.survey.quest_3.answ_4 === true}\">\n" +
    "          <p>Américaine</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_3.answ_5 = !gift.receiver.survey.quest_3.answ_5\" ng-class=\"{quizchecked: gift.receiver.survey.quest_3.answ_5 === true}\">\n" +
    "          <p>Végétarienne</p>\n" +
    "        </div>\n" +
    "        <hr class=\"backgrounded\">\n" +
    "        <p class=\"col-subtitle\">Quels entrées lui feraient envie&nbsp;?</p>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_4.answ_1 = !gift.receiver.survey.quest_4.answ_1\" ng-class=\"{quizchecked: gift.receiver.survey.quest_4.answ_1 === true}\">\n" +
    "          <p>Une assiette d'huîtres</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_4.answ_2 = !gift.receiver.survey.quest_4.answ_2\" ng-class=\"{quizchecked: gift.receiver.survey.quest_4.answ_2 === true}\">\n" +
    "          <p>Pain toasté et tapenade d'olives</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_4.answ_3 = !gift.receiver.survey.quest_4.answ_3\" ng-class=\"{quizchecked: gift.receiver.survey.quest_4.answ_3 === true}\">\n" +
    "          <p>Foie gras et pain d'épices</p>\n" +
    "        </div>\n" +
    "        <hr class=\"backgrounded\">\n" +
    "        <p class=\"col-subtitle\">Quels desserts lui feraient envie&nbsp;?</p>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_5.answ_1 = !gift.receiver.survey.quest_5.answ_1\" ng-class=\"{quizchecked: gift.receiver.survey.quest_5.answ_1 === true}\">\n" +
    "          <p>Millefeuille à la vanille</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_5.answ_2 = !gift.receiver.survey.quest_5.answ_2\" ng-class=\"{quizchecked: gift.receiver.survey.quest_5.answ_2 === true}\">\n" +
    "          <p>Ganache au chocolat & canelle</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_5.answ_3 = !gift.receiver.survey.quest_5.answ_3\" ng-class=\"{quizchecked: gift.receiver.survey.quest_5.answ_3 === true}\">\n" +
    "          <p>Carpaccio de fruits & sorbet</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n" +
    "      <h2 class=\"col-title\">Il/elle est plutôt</h2>\n" +
    "      <div class=\"col-container\">\n" +
    "        <p class=\"col-subtitle\">Du rouge</p>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_1 = 2\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_1 === 2}\">\n" +
    "            <p>Beaucoup</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_1 = 1\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_1 === 1}\">\n" +
    "            <p>Un peu</p>\n" +
    "          </div>\n" +
    "          <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_1 = 0\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_1 === 0}\">\n" +
    "            <p>Pas du tout</p>\n" +
    "          </div>\n" +
    "        <hr class=\"backgrounded\">\n" +
    "        <p class=\"col-subtitle\">Du blanc</p>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_2 = 2\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_2 === 2}\">\n" +
    "          <p>Beaucoup</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_2 = 1\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_2 === 1}\">\n" +
    "          <p>Un peu</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_2 = 0\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_2 === 0}\">\n" +
    "          <p>Pas du tout</p>\n" +
    "        </div>\n" +
    "        <hr class=\"backgrounded\">\n" +
    "        <p class=\"col-subtitle\">Du rosé</p>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_3 = 2\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_3 === 2}\">\n" +
    "          <p>Beaucoup</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_3 = 1\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_3 === 1}\">\n" +
    "          <p>Un peu</p>\n" +
    "        </div>\n" +
    "        <div class=\"gift-checkbox\" ng-click=\"gift.receiver.survey.quest_6.answ_3 = 0\" ng-class=\"{quizchecked: gift.receiver.survey.quest_6.answ_3 === 0}\">\n" +
    "          <p>Pas du tout</p>\n" +
    "        </div>\n" +
    "        <hr class=\"backgrounded\">\n" +
    "        <p class=\"col-subtitle\">Quelle est sa région préférée&nbsp;?</p>\n" +
    "        <select class=\"form-control\" ng-model=\"gift.receiver.survey.quest_7.answ\" ng-options=\"region for region in regions\"></select>\n" +
    "      </div>\n" +
    "      <div class=\"btn_block_primary centered margin-top\" ng-click=\"sendSurvey()\" >Continuer</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("mrelay/mrelay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("mrelay/mrelay.tpl.html",
    "<nav class=\"navbar\" role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "       <a href=\"\"><img alt=\"\" src=\"assets/LogoVinifyco.png\" style=\"height:45px\"/></a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li><a href=\"\"><img alt=\"\" src=\"assets/dolly.png\" style=\"height:45px\"/></a></li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div>\n" +
    "</nav>\n" +
    "<div class=\"container\" id=\"mondialrelay\">\n" +
    "    <toaster-container toaster-options=\"{'time-out': 4000, 'position-class': 'toast-top-right'}\"></toaster-container>\n" +
    "    <div class=\"bg-danger fader centered\" ng-show=\"error\"><p>{{error}}</p></div>\n" +
    "      <div class=\"col-lg-8 col-sm-8\" id=\"mondialrelay-widget\">\n" +
    "          <div id=\"Zone_Widget\">\n" +
    "          </div>\n" +
    "          <input type=\"text\" id=\"Retour_Widget\" class=\"\"/>\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-4 col-sm-4\">\n" +
    "         <h2>Instructions</h2>\n" +
    "         <br><br>\n" +
    "         <p>Choississez le Point Relais que vous souhaitez et validez.</p>\n" +
    "        <button class=\"btn\" ng-click=\"sendMR()\" id=\"submit_shop\">Valider</button>\n" +
    "        <br><br><br>\n" +
    "         <p>Vous ne trouvez pas de point relais qui vous convient ?</p>\n" +
    "         <p>Contactez <a href=\"mailto:charlotte@vinify.co\">Charlotte</a></p>\n" +
    "        <!-- <button class=\"btn\" ng-click=\"changeDelivery()\" id=\"change_delivery\">Changer la livraison</button> -->\n" +
    "      </div>\n" +
    "</div> <!-- container delivery -->");
}]);

angular.module("order/order.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/order.tpl.html",
    "<div class=\"background-order\">\n" +
    "	<nav class=\"navbar\" role=\"navigation\">\n" +
    "		<div class=\"container-fluid\">\n" +
    "			<div class=\"navbar-header\">\n" +
    "				 <a href=\"\"><img alt=\"\" src=\"assets/logo.png\" style=\"height:45px\"/></a>\n" +
    "			</div>\n" +
    "			<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "				<ul class=\"nav navbar-nav navbar-right\">\n" +
    "					<li><a href=\"\"><img alt=\"\" src=\"assets/oclipboard.png\" class=\"opacity-link\" style=\"height:45px\"/></a></li>\n" +
    "					<li ng-show=\"state == 'order.userinfos'\"><a href=\"\"><img alt=\"\" src=\"assets/dolly.png\" style=\"height:45px\"/></a></li>\n" +
    "					<li ng-show=\"!(state == 'order.userinfos')\"><a href=\"\"><img alt=\"\" class=\"opacity-link\" src=\"assets/odolly.png\" style=\"height:45px\"/></a></li>\n" +
    "					<li ng-show=\"state == 'order.paiement'\"><a href=\"\"><img alt=\"\" src=\"assets/creditcard.png\" style=\"height:45px\"/></a></li>\n" +
    "					<li ng-hide=\"state == 'order.paiement'\"><a href=\"\"><img alt=\"\" class=\"opacity-link\" src=\"assets/ocreditcard.png\" style=\"height:45px\"/></a></li>\n" +
    "				</ul>\n" +
    "			</div><!-- /.navbar-collapse -->\n" +
    "		</div>\n" +
    "	</nav>\n" +
    "	<div class=\"container-delivery\">\n" +
    "  		<toaster-container toaster-options=\"{'time-out': 4000, 'position-class': 'toast-top-right'}\"></toaster-container>\n" +
    "		<h3 ng-show=\"isState('order.userinfos')\" class=\"centered\">Notre oenologue va préparer votre sélection personnalisée</h3>\n" +
    "		<h3 ng-show=\"isState('order.paiement')\" class=\"centered\">Merci de vérifier vos informations</h3>\n" +
    "		<div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 form-infos u-padding\">\n" +
    "			<div class=\"main-container\" ui-view autoscroll=\"false\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("order/parts/order.confirmation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/parts/order.confirmation.tpl.html",
    "<!--       <div class=\"col-lg-12 col-md-12 col-sm-12 bouchons\">\n" +
    "        <div class=\"order-button-container\">\n" +
    "          <button stripe-checkout class=\"btn btn-order\">Commander mon Vinibar !</button>\n" +
    "        </div>\n" +
    "      </div> -->\n" +
    "<div class=\"container container-delivery-confirmation\">\n" +
    "  <div class=\"row container-title\">\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4\" id=\"delivery_billing_title\">\n" +
    "      <h3><span>Paiement</span></h3>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <hr class=\"ruler-delivery\">\n" +
    "  <h3 class=\"confirmation-first-title\">Merci de vérifier vos informations</h3>\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"col-lg-6 col-md-6 col-sm-12 bill\">\n" +
    "  <!--           <ul>\n" +
    "              <li><h3>Vinibar - 99€</h3></li>\n" +
    "              <li><h3>{{delivery_mode}} - {{delivery_price}}€</h3></li>\n" +
    "              <li><h3>Total - 109,90</h3></li>\n" +
    "            </ul> -->\n" +
    "                <p class=\"confirmation-first-title\">{{currentClient.userinfos.first_name}} {{currentClient.userinfos.last_name}}</p>\n" +
    "                <p>{{currentClient.email}}</p>\n" +
    "                <p>{{currentClient.userinfos.delivery_address.street}}<br>\n" +
    "                {{currentClient.userinfos.delivery_address.zipcode}} {{currentClient.userinfos.delivery_address.city}}</p>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"col-lg-6 col-md-6 col-sm-12 bill\">\n" +
    "\n" +
    "              <table>\n" +
    "                  <tr>\n" +
    "                    <td><h4>Vinibar </h4></td>\n" +
    "                    <td><h4>{{currentClient.order.amount}}€</h4></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td><h4>Livraison {{delivery_mode}} </h4></td>\n" +
    "                    <td><h4>{{currentClient.order.delivery_cost}}€</h4></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td><h4 class=\"bill-total\">Total </h4></td>\n" +
    "                    <td><h4 class=\"bill-total\">{{currentClient.order.final_price}}€</h4></td>\n" +
    "                  </tr>\n" +
    "              </table>\n" +
    "      </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-lg-12 col-md-12 col-sm-12 proceed\">\n" +
    "          <a ui-sref=\"order.userinfos\" class=\"btn btn-back pull-left\">< Précédent</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("order/parts/order.delivery.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/parts/order.delivery.tpl.html",
    "<div class=\"container container-delivery\">\n" +
    "     <div class=\"container container-delivery\">\n" +
    "      <div class=\"row-fluid mondial-relay\">\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"triggerMR()\">Trigger</button>\n" +
    "          <div id=\"Zone_Widget\">\n" +
    "          </div>\n" +
    "          <input type=\"text\" id=\"Retour_Widget\" ng-model=\"selectedShop\" class=\"\"/>\n" +
    "          Valider le point sélectionné est <button class=\"btn btn-primary\" id=\"submit_shop\">Valider</button>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div> <!-- container delivery -->\n" +
    "\n" +
    "<style type=\"text/css\">\n" +
    ".MR-Widget {\n" +
    "    font-family: Verdana!important;\n" +
    "    font-size: 10px!important;\n" +
    "    border: solid 1px #ddd!important;\n" +
    "    margin: 5px;\n" +
    "    background: #fff;\n" +
    "    width: 680px;\n" +
    "}\n" +
    ".MR-Widget .MRW-Title {\n" +
    "    color: #666;\n" +
    "    font-weight: 700;\n" +
    "    text-align: center;\n" +
    "    background: #eee;\n" +
    "    padding: 3px;\n" +
    "    border-bottom: solid 1px #ddd;\n" +
    "}\n" +
    ".MR-Widget .MRW-Results {\n" +
    "    overflow: auto;\n" +
    "    padding: 10px;\n" +
    "    height: 390px;\n" +
    "}\n" +
    ".MR-Widget input {\n" +
    "    background: url(./imgs/bg_input.png) bottom repeat-x #fefefe;\n" +
    "    border: solid 1px #ddd;\n" +
    "}\n" +
    ".MR-Widget .MRW-Search {\n" +
    "    padding: 25px 10px;\n" +
    "    text-align: center;\n" +
    "    background: #fafafa;\n" +
    "    background: url(./imgs/mr-64.png) no-repeat 2% 50%}\n" +
    ".es-ES .MRW-Search {\n" +
    "    padding: 25px 0 25px 20px!important;\n" +
    "    background: url(./imgs/mr-es64.png) no-repeat 2% 50%!important;\n" +
    "}\n" +
    ".MR-Widget .MRW-Line {\n" +
    "    display: block;\n" +
    "    margin-bottom: 3px;\n" +
    "}\n" +
    ".MR-Widget .MRW-BtGo, .MR-Widget .MRW-BtGeoGo {\n" +
    "    border: solid 1px #ddd;\n" +
    "    background: #eee;\n" +
    "}\n" +
    ".MR-Widget .PR-List-Item {\n" +
    "    border-left: solid 2px #ddd;\n" +
    "    padding: 3px;\n" +
    "    margin-bottom: 4px;\n" +
    "    cursor: pointer;\n" +
    "}\n" +
    ".MR-Widget .PR-Name {\n" +
    "    color: #CA0047;\n" +
    "    font-weight: 700;\n" +
    "}\n" +
    ".MR-Widget .PR-hover, .MR-Widget .PR-Selected {\n" +
    "    border-left: solid 2px #CA0047;\n" +
    "    background: #f7f7f7;\n" +
    "}\n" +
    ".MR-Widget .MRW-Errors {\n" +
    "    color: #ff8c44;\n" +
    "    display: block;\n" +
    "    background: #ffede2;\n" +
    "    border: solid 1px #ff8c44;\n" +
    "    font-weight: 100;\n" +
    "    padding: 4px;\n" +
    "    display: none;\n" +
    "}\n" +
    ".MR-Widget .PR-Warning {\n" +
    "    color: Orange;\n" +
    "    font-weight: 700;\n" +
    "    text-align: center;\n" +
    "    padding: 2px;\n" +
    "}\n" +
    ".MR-Widget .PR-Hours {\n" +
    "    width: 100%;\n" +
    "    color: #666;\n" +
    "    border: solid 1px #eee;\n" +
    "    font-size: 10px;\n" +
    "}\n" +
    ".MR-Widget .PR-Hours td {\n" +
    "    width: 35%;\n" +
    "    text-align: center;\n" +
    "}\n" +
    ".MR-Widget .PR-Hours .d {\n" +
    "    background: #eee;\n" +
    "}\n" +
    ".MR-Widget .MRW-fl-Select, .MR-Widget .PR-AutoCplCity {\n" +
    "    position: absolute;\n" +
    "    width: 100px;\n" +
    "    text-align: left;\n" +
    "    display: none;\n" +
    "    border: solid 1px #eee;\n" +
    "    background: #fff;\n" +
    "    z-index: 8000;\n" +
    "}\n" +
    ".MR-Widget .MRW-fl-Select .MRW-fl-Item, .MR-Widget .PR-City {\n" +
    "    padding: 3px;\n" +
    "}\n" +
    ".MR-Widget .MRW-fl-Select MRW-fl-Item:hover, .MR-Widget .PR-City:hover {\n" +
    "    cursor: pointer;\n" +
    "    background: #f5f5f5;\n" +
    "    font-weight: 700;\n" +
    "}\n" +
    ".MR-Widget .AutoCpl-Hover {\n" +
    "    background: #f5f5f5;\n" +
    "    font-weight: 700;\n" +
    "}\n" +
    ".MR-Widget #MRW-Map {\n" +
    "    overflow: hidden!important;\n" +
    "    font-size: 8pt!important;\n" +
    "}\n" +
    ".MR-Widget .InfoWindow {\n" +
    "    width: 320px!important;\n" +
    "}\n" +
    ".MR-Widget .PR-Name {\n" +
    "    padding-bottom: 2px;\n" +
    "}\n" +
    ".MR-Widget .Tabs-Btns {\n" +
    "    overflow: auto;\n" +
    "    border-bottom: 1px solid #ccc;\n" +
    "}\n" +
    ".MR-Widget .Tabs-Btn {\n" +
    "    display: inline-block;\n" +
    "    padding: 2px 5px;\n" +
    "    float: left;\n" +
    "    background-color: #eee;\n" +
    "    cursor: pointer;\n" +
    "}\n" +
    ".MR-Widget .Tabs-Btn-Selected {\n" +
    "    font-weight: 700;\n" +
    "    border: 1px solid #ccc;\n" +
    "    border-bottom: 0;\n" +
    "}\n" +
    ".MR-Widget .Tabs-Tabs {\n" +
    "    margin-top: 2px;\n" +
    "}\n" +
    ".MR-Widget .Tabs-Tab {\n" +
    "    display: none;\n" +
    "    visibility: hidden;\n" +
    "}\n" +
    ".MR-Widget .Tabs-Tab-Selected {\n" +
    "    display: inline;\n" +
    "    visibility: visible;\n" +
    "}\n" +
    "</style>");
}]);

angular.module("order/parts/order.paiement.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/parts/order.paiement.tpl.html",
    "\n" +
    "	<div class=\"row row-paiement\">\n" +
    "			<div class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "			  <div class=\"row\">\n" +
    "			      <div class=\"col-lg-4 col-md-4 col-sm-12 centered\">\n" +
    "					<p>Adresse</p>\n" +
    "					<p class=\"\">{{client.userinfos.first_name}} {{client.userinfos.last_name}}</p>\n" +
    "					<p>{{client.email}}</h4>\n" +
    "					<p>{{client.userinfos.delivery_address.street}}<br>\n" +
    "					{{client.userinfos.delivery_address.zipcode}} {{client.userinfos.delivery_address.city}}</p>\n" +
    "\n" +
    "			      </div>\n" +
    "			      <hr class=\"visible-sm visible-xs\">\n" +
    "			      <div class=\"col-lg-4 col-md-4 col-sm-12 centered\">\n" +
    "					<p>Mode de Livraison</p>\n" +
    "			              <table class=\"table-deliv-mode\">\n" +
    "			                  <tr ng-click=\"updateOrder(1)\">\n" +
    "			                    <td>\n" +
    "								<svg ng-show=\"delivery.mode === 'Point Relais' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "								  <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "								  <title>Grapes</title>\n" +
    "								  <desc>Created with Sketch.</desc>\n" +
    "								  <defs></defs>\n" +
    "								  <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "								      <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "								          <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "								              <g id=\"Tick\">\n" +
    "								                  <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" fill=\"#006DB2\"></path>\n" +
    "								                  <g id=\"Shape-2-+-Shape-3\" transform=\"translate(8.683417, 10.582915)\" fill=\"#FFFFFF\">\n" +
    "								                      <path d=\"M6.61603572,-0.979270246 C6.83808255,-0.979270246 6.99641974,-0.90543001 6.99641974,-0.819862208 L6.99641974,7.46197174 C6.99641974,7.54797389 6.8376141,7.62181413 6.61603572,7.62181413 C6.36213407,7.62181413 6.20379688,7.54797389 6.20379688,7.46197174 L6.20379688,-0.819862208 C6.20379688,-0.90543001 6.36213407,-0.979270246 6.61603572,-0.979270246 Z\" id=\"Shape-2\" transform=\"translate(6.610832, 3.298008) rotate(45.000000) translate(-6.610832, -3.298008) \"></path>\n" +
    "								                      <path d=\"M2.1433034,1.87721922 C2.36535023,1.87721922 2.52368742,1.9231654 2.52368742,1.97640892 L2.52368742,7.12967868 C2.52368742,7.18319247 1.73106457,7.23722887 1.73106457,7.18371508 L1.73106457,1.97640892 C1.73106457,1.9231654 1.88940176,1.87721922 2.1433034,1.87721922 Z\" id=\"Shape-3\" transform=\"translate(2.138100, 4.522948) rotate(-45.000000) translate(-2.138100, -4.522948) \"></path>\n" +
    "								                  </g>\n" +
    "								              </g>\n" +
    "								          </g>\n" +
    "								      </g>\n" +
    "								  </g>\n" +
    "								</svg>\n" +
    "								<svg ng-hide=\"delivery.mode === 'Point Relais' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "								  <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "								  <title>Grapes</title>\n" +
    "								  <desc>Created with Sketch.</desc>\n" +
    "								  <defs></defs>\n" +
    "								  <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "								      <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "								          <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "								              <g id=\"Tick\">\n" +
    "								                  <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" stroke=\"#006DB2\" fill=\"#FFF\"></path>\n" +
    "								              </g>\n" +
    "								          </g>\n" +
    "								      </g>\n" +
    "								  </g>\n" +
    "								</svg>\n" +
    "			                     </h4>\n" +
    "			                    <td><p> Point Relais </p></td>\n" +
    "			                  </tr>\n" +
    "			                  <tr ng-click=\"updateOrder(2)\">\n" +
    "			                    <td>\n" +
    "								<svg ng-show=\"delivery.mode === 'Colissimo' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "								  <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "								  <title>Grapes</title>\n" +
    "								  <desc>Created with Sketch.</desc>\n" +
    "								  <defs></defs>\n" +
    "								  <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "								      <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "								          <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "								              <g id=\"Tick\">\n" +
    "								                  <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" fill=\"#006DB2\"></path>\n" +
    "								                  <g id=\"Shape-2-+-Shape-3\" transform=\"translate(8.683417, 10.582915)\" fill=\"#FFFFFF\">\n" +
    "								                      <path d=\"M6.61603572,-0.979270246 C6.83808255,-0.979270246 6.99641974,-0.90543001 6.99641974,-0.819862208 L6.99641974,7.46197174 C6.99641974,7.54797389 6.8376141,7.62181413 6.61603572,7.62181413 C6.36213407,7.62181413 6.20379688,7.54797389 6.20379688,7.46197174 L6.20379688,-0.819862208 C6.20379688,-0.90543001 6.36213407,-0.979270246 6.61603572,-0.979270246 Z\" id=\"Shape-2\" transform=\"translate(6.610832, 3.298008) rotate(45.000000) translate(-6.610832, -3.298008) \"></path>\n" +
    "								                      <path d=\"M2.1433034,1.87721922 C2.36535023,1.87721922 2.52368742,1.9231654 2.52368742,1.97640892 L2.52368742,7.12967868 C2.52368742,7.18319247 1.73106457,7.23722887 1.73106457,7.18371508 L1.73106457,1.97640892 C1.73106457,1.9231654 1.88940176,1.87721922 2.1433034,1.87721922 Z\" id=\"Shape-3\" transform=\"translate(2.138100, 4.522948) rotate(-45.000000) translate(-2.138100, -4.522948) \"></path>\n" +
    "								                  </g>\n" +
    "								              </g>\n" +
    "								          </g>\n" +
    "								      </g>\n" +
    "								  </g>\n" +
    "								</svg>\n" +
    "								<svg ng-hide=\"delivery.mode === 'Colissimo' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "								  <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "								  <title>Grapes</title>\n" +
    "								  <desc>Created with Sketch.</desc>\n" +
    "								  <defs></defs>\n" +
    "								  <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "								      <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "								          <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "								              <g id=\"Tick\">\n" +
    "								                  <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" stroke=\"#006DB2\" fill=\"#FFF\"></path>\n" +
    "								              </g>\n" +
    "								          </g>\n" +
    "								      </g>\n" +
    "								  </g>\n" +
    "								</svg>\n" +
    "						</td>\n" +
    "			                    <td>\n" +
    "							<p> Colissimo Suivi </p>\n" +
    "	                    		</td>\n" +
    "			                  </tr>\n" +
    "			                  <tr ng-click=\"updateOrder(3)\"  class=\"bill-total\">\n" +
    "			                    <td>\n" +
    "								<svg ng-show=\"delivery.mode === 'Vinify' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "								  <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "								  <title>Grapes</title>\n" +
    "								  <desc>Created with Sketch.</desc>\n" +
    "								  <defs></defs>\n" +
    "								  <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "								      <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "								          <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "								              <g id=\"Tick\">\n" +
    "								                  <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" fill=\"#006DB2\"></path>\n" +
    "								                  <g id=\"Shape-2-+-Shape-3\" transform=\"translate(8.683417, 10.582915)\" fill=\"#FFFFFF\">\n" +
    "								                      <path d=\"M6.61603572,-0.979270246 C6.83808255,-0.979270246 6.99641974,-0.90543001 6.99641974,-0.819862208 L6.99641974,7.46197174 C6.99641974,7.54797389 6.8376141,7.62181413 6.61603572,7.62181413 C6.36213407,7.62181413 6.20379688,7.54797389 6.20379688,7.46197174 L6.20379688,-0.819862208 C6.20379688,-0.90543001 6.36213407,-0.979270246 6.61603572,-0.979270246 Z\" id=\"Shape-2\" transform=\"translate(6.610832, 3.298008) rotate(45.000000) translate(-6.610832, -3.298008) \"></path>\n" +
    "								                      <path d=\"M2.1433034,1.87721922 C2.36535023,1.87721922 2.52368742,1.9231654 2.52368742,1.97640892 L2.52368742,7.12967868 C2.52368742,7.18319247 1.73106457,7.23722887 1.73106457,7.18371508 L1.73106457,1.97640892 C1.73106457,1.9231654 1.88940176,1.87721922 2.1433034,1.87721922 Z\" id=\"Shape-3\" transform=\"translate(2.138100, 4.522948) rotate(-45.000000) translate(-2.138100, -4.522948) \"></path>\n" +
    "								                  </g>\n" +
    "								              </g>\n" +
    "								          </g>\n" +
    "								      </g>\n" +
    "								  </g>\n" +
    "								</svg>\n" +
    "								<svg ng-hide=\"delivery.mode === 'Vinify' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "								  <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "								  <title>Grapes</title>\n" +
    "								  <desc>Created with Sketch.</desc>\n" +
    "								  <defs></defs>\n" +
    "								  <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "								      <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "								          <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "								              <g id=\"Tick\">\n" +
    "								                  <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" stroke=\"#006DB2\" fill=\"#FFF\"></path>\n" +
    "								              </g>\n" +
    "								          </g>\n" +
    "								      </g>\n" +
    "								  </g>\n" +
    "								</svg>\n" +
    "			                    </td>\n" +
    "			                    <td><p> Retrait Vinify (Issy 92) </p></td>\n" +
    "			                  </tr>\n" +
    "			              </table>\n" +
    "			      </div>\n" +
    "			      <hr class=\"visible-sm visible-xs\">\n" +
    "			      <div class=\"col-lg-4 col-md-4 col-sm-12\">\n" +
    "					<p class=\"centered\">Commande</p>\n" +
    "			              <table class=\"table-bill\">\n" +
    "			                  <tr>\n" +
    "			                    <td><h4>Vinibar </h4></td>\n" +
    "			                    <td><h4>69&nbsp;€</h4></td>\n" +
    "			                  </tr>\n" +
    "			                  <tr>\n" +
    "			                    <td><h4>Livraison </h4></td>\n" +
    "			                    <td>\n" +
    "			                    	<h4>\n" +
    "								{{delivery.cost}}&nbsp;€\n" +
    "		                    		</h4>\n" +
    "	                    		</td>\n" +
    "			                  </tr>\n" +
    "			                  <tr ng-show=\"client.order.coupon.value\">\n" +
    "			                    <td><h4>Promo </h4></td>\n" +
    "			                    <td><h4>- {{client.order.coupon.value}}&nbsp;€</h4></td>\n" +
    "			                  </tr>\n" +
    "			                  <tr  class=\"bill-total\">\n" +
    "			                    <td><h4>Total </h4></td>\n" +
    "			                    <td><h4>{{69 + delivery.cost - client.order.coupon.value | number:1}}&nbsp;€</h4></td>\n" +
    "			                  </tr>\n" +
    "			              </table>\n" +
    "			      </div>\n" +
    "		  	</div>\n" +
    "			<div class=\"row terminate-order\">\n" +
    "				<div class=\"col-lg-4 col-lg-offset-8 col-md-4 col-md-offset-8 col-sm-12 centered\">\n" +
    "					<button class=\"btn button-white\" ng-click=\"createOrder()\">Commander mes vins</button>\n" +
    "					<div><a href ui-sref=\"order.userinfos\">Modifier</a></div>\n" +
    "				</div>\n" +
    "			</div>    <!-- ROW -->\n" +
    "		</div>\n" +
    "	</div>    <!-- ROW -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("order/parts/order.userinfos.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/parts/order.userinfos.tpl.html",
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "				<form novalidate name=\"form_commander\" class=\"clearfix\">\n" +
    "					<div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "						<div class=\"form-group\">\n" +
    "							<label for=\"first_name\">Prénom *</label>\n" +
    "							<input type=\"text\"\n" +
    "								placeholder=\"John\"\n" +
    "								name=\"first_name\"\n" +
    "								ng-model=\"client.userinfos.first_name\"\n" +
    "								required\n" +
    "								class=\"form-control\"\n" +
    "								id=\"first_name\"/>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-group\">\n" +
    "							<label for=\"last_name\">Nom *</label>\n" +
    "							<input type=\"text\"\n" +
    "								placeholder=\"Snow\"\n" +
    "								name=\"last_name\"\n" +
    "								ng-model=\"client.userinfos.last_name\"\n" +
    "								required\n" +
    "								class=\"form-control\"\n" +
    "								id=\"last_name\"/>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-group\">\n" +
    "							<label for=\"phone\">Téléphone *</label>\n" +
    "							<input type=\"tel\"\n" +
    "								placeholder=\"+33 6 XX XX XX XX\"\n" +
    "								name=\"phone\"\n" +
    "								ng-model=\"client.userinfos.phone\"\n" +
    "								required\n" +
    "								class=\"form-control\"\n" +
    "								id=\"phone\"/>\n" +
    "						</div>\n" +
    "\n" +
    "						<label for=\"birthday\">Date de Naissance*</label>\n" +
    "\n" +
    "						  <div class=\"birthdate\">\n" +
    "							<div class=\"\">\n" +
    "							  <select class=\"form-control\" ng-model=\"b.birthday\" name=\"birthday\" required>\n" +
    "								<option value=\"\">JJ</option>\n" +
    "								<option value=\"1\">1</option>\n" +
    "								<option value=\"2\">2</option>\n" +
    "								<option value=\"3\">3</option>\n" +
    "								<option value=\"4\">4</option>\n" +
    "								<option value=\"5\">5</option>\n" +
    "								<option value=\"6\">6</option>\n" +
    "								<option value=\"7\">7</option>\n" +
    "								<option value=\"8\">8</option>\n" +
    "								<option value=\"9\">9</option>\n" +
    "								<option value=\"10\">10</option>\n" +
    "								<option value=\"11\">11</option>\n" +
    "								<option value=\"12\">12</option>\n" +
    "								<option value=\"13\">13</option>\n" +
    "								<option value=\"14\">14</option>\n" +
    "								<option value=\"15\">15</option>\n" +
    "								<option value=\"16\">16</option>\n" +
    "								<option value=\"17\">17</option>\n" +
    "								<option value=\"18\">18</option>\n" +
    "								<option value=\"19\">19</option>\n" +
    "								<option value=\"20\">20</option>\n" +
    "								<option value=\"21\">21</option>\n" +
    "								<option value=\"22\">22</option>\n" +
    "								<option value=\"23\">23</option>\n" +
    "								<option value=\"24\">24</option>\n" +
    "								<option value=\"25\">25</option>\n" +
    "								<option value=\"26\">26</option>\n" +
    "								<option value=\"27\">27</option>\n" +
    "								<option value=\"28\">28</option>\n" +
    "								<option value=\"29\">29</option>\n" +
    "								<option value=\"30\">30</option>\n" +
    "								<option value=\"31\">31</option>\n" +
    "							  </select>\n" +
    "							</div>\n" +
    "							<div class=\"\">\n" +
    "							  <select class=\"form-control\" ng-model=\"b.birthmonth\" name=\"birthmonth\" required>\n" +
    "								<option value=\"\">MM</option>\n" +
    "								<option value=\"1\">Janvier</option>\n" +
    "								<option value=\"2\">Février</option>\n" +
    "								<option value=\"3\">Mars</option>\n" +
    "								<option value=\"4\">Avril</option>\n" +
    "								<option value=\"5\">Mai</option>\n" +
    "								<option value=\"6\">Juin</option>\n" +
    "								<option value=\"7\">Juillet</option>\n" +
    "								<option value=\"8\">Aout</option>\n" +
    "								<option value=\"9\">Septembre</option>\n" +
    "								<option value=\"10\">Octobre</option>\n" +
    "								<option value=\"11\">Novembre</option>\n" +
    "								<option value=\"12\">Décembre</option>\n" +
    "							  </select>\n" +
    "							</div>\n" +
    "							<div class=\"\">\n" +
    "							  <select class=\"form-control\" ng-model=\"b.birthyear\" name=\"birthmonth\" required>\n" +
    "								<option value=\"1997\">1997</option>\n" +
    "								<option value=\"1996\">1996</option>\n" +
    "								<option value=\"1995\">1995</option>\n" +
    "								<option value=\"1994\">1994</option>\n" +
    "								<option value=\"1993\">1993</option>\n" +
    "								<option value=\"1992\">1992</option>\n" +
    "								<option value=\"1991\">1991</option>\n" +
    "								<option value=\"1990\">1990</option>\n" +
    "								<option value=\"1989\">1989</option>\n" +
    "								<option value=\"1988\">1988</option>\n" +
    "								<option value=\"1987\">1987</option>\n" +
    "								<option value=\"1986\">1986</option>\n" +
    "								<option value=\"1985\">1985</option>\n" +
    "								<option value=\"1984\">1984</option>\n" +
    "								<option value=\"1983\">1983</option>\n" +
    "								<option value=\"1982\">1982</option>\n" +
    "								<option value=\"1981\">1981</option>\n" +
    "								<option value=\"1980\">1980</option>\n" +
    "								<option value=\"1979\">1979</option>\n" +
    "								<option value=\"1978\">1978</option>\n" +
    "								<option value=\"1977\">1977</option>\n" +
    "								<option value=\"1976\">1976</option>\n" +
    "								<option value=\"1975\">1975</option>\n" +
    "								<option value=\"1974\">1974</option>\n" +
    "								<option value=\"1973\">1973</option>\n" +
    "								<option value=\"1972\">1972</option>\n" +
    "								<option value=\"1971\">1971</option>\n" +
    "								<option value=\"1970\">1970</option>\n" +
    "								<option value=\"1969\">1969</option>\n" +
    "								<option value=\"1968\">1968</option>\n" +
    "								<option value=\"1967\">1967</option>\n" +
    "								<option value=\"1966\">1966</option>\n" +
    "								<option value=\"1965\">1965</option>\n" +
    "								<option value=\"1964\">1964</option>\n" +
    "								<option value=\"1963\">1963</option>\n" +
    "								<option value=\"1962\">1962</option>\n" +
    "								<option value=\"1961\">1961</option>\n" +
    "								<option value=\"1960\">1960</option>\n" +
    "								<option value=\"1959\">1959</option>\n" +
    "								<option value=\"1958\">1958</option>\n" +
    "								<option value=\"1957\">1957</option>\n" +
    "								<option value=\"1956\">1956</option>\n" +
    "								<option value=\"1955\">1955</option>\n" +
    "								<option value=\"1954\">1954</option>\n" +
    "								<option value=\"1953\">1953</option>\n" +
    "								<option value=\"1952\">1952</option>\n" +
    "								<option value=\"1951\">1951</option>\n" +
    "								<option value=\"1950\">1950</option>\n" +
    "								<option value=\"1949\">1949</option>\n" +
    "								<option value=\"1948\">1948</option>\n" +
    "								<option value=\"1947\">1947</option>\n" +
    "								<option value=\"1946\">1946</option>\n" +
    "								<option value=\"1945\">1945</option>\n" +
    "								<option value=\"1944\">1944</option>\n" +
    "								<option value=\"1943\">1943</option>\n" +
    "								<option value=\"1942\">1942</option>\n" +
    "								<option value=\"1941\">1941</option>\n" +
    "								<option value=\"1940\">1940</option>\n" +
    "								<option value=\"1939\">1939</option>\n" +
    "								<option value=\"1938\">1938</option>\n" +
    "								<option value=\"1937\">1937</option>\n" +
    "								<option value=\"1936\">1936</option>\n" +
    "								<option value=\"1935\">1935</option>\n" +
    "								<option value=\"1934\">1934</option>\n" +
    "								<option value=\"1933\">1933</option>\n" +
    "								<option value=\"1932\">1932</option>\n" +
    "								<option value=\"1931\">1931</option>\n" +
    "								<option value=\"1930\">1930</option>\n" +
    "								<option value=\"1929\">1929</option>\n" +
    "								<option value=\"1928\">1928</option>\n" +
    "								<option value=\"1927\">1927</option>\n" +
    "								<option value=\"1926\">1926</option>\n" +
    "								<option value=\"1925\">1925</option>\n" +
    "								<option value=\"1924\">1924</option>\n" +
    "								<option value=\"1923\">1923</option>\n" +
    "								<option value=\"1922\">1922</option>\n" +
    "								<option value=\"1921\">1921</option>\n" +
    "								<option value=\"1920\">1920</option>\n" +
    "								<option value=\"\">AAAA</option>\n" +
    "							  </select>\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "					</div><!-- col-lg-4 col-md-4 col-sm-4 -->\n" +
    "\n" +
    "					<div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "							<label for=\"delivery_address.company\">Adresse de Livraison *</label>\n" +
    "\n" +
    "							<div class=\"form-group\">\n" +
    "								<label for=\"delivery_address.street\" class=\"sr-only\">Rue</label>\n" +
    "								<input type=\"text\"\n" +
    "									ng-model=\"client.userinfos.delivery_address.street\"\n" +
    "									placeholder=\"Rue\"\n" +
    "									class=\"form-control\"\n" +
    "									required\n" +
    "									id=\"delivery_address.street\"/>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"u-w50 inline-left form-group\">\n" +
    "							<label for=\"delivery_address.company\">Ville *</label>\n" +
    "							  <label for=\"delivery_address.zipcode\" class=\"sr-only\">CP</label>\n" +
    "							  <input type=\"text\"\n" +
    "								  ng-model=\"client.userinfos.delivery_address.zipcode\"\n" +
    "								  placeholder=\"Code Postal\"\n" +
    "								  class=\"form-control\"\n" +
    "								  required\n" +
    "								  id=\"delivery_address.zipcode\"/>\n" +
    "							</div>\n" +
    "							<div class=\"u-w50 inline-right form-group\">\n" +
    "							<label for=\"delivery_address.company\">&nbsp;</label>\n" +
    "							  <label for=\"delivery_address.city\" class=\"sr-only\">Ville</label>\n" +
    "							  <input type=\"text\"\n" +
    "								  ng-model=\"client.userinfos.delivery_address.city\"\n" +
    "								  placeholder=\"Ville\"\n" +
    "								  class=\"form-control\"\n" +
    "								  required\n" +
    "								  id=\"delivery_address.city\"/>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"form-group\">\n" +
    "							  <label for=\"delivery_address.other_info\">Informations Complémentaires</label>\n" +
    "								<div class=\"u-w50 inline-left form-group\">\n" +
    "								  <label for=\"delivery_address.zipcode\" class=\"sr-only\">Code</label>\n" +
    "								  <input type=\"text\"\n" +
    "									  ng-model=\"client.userinfos.delivery_address.digicode\"\n" +
    "									  placeholder=\"Code Porte\"\n" +
    "									  class=\"form-control\"\n" +
    "									  id=\"delivery_address.zipcode\"/>\n" +
    "								</div>\n" +
    "								<div class=\"u-w50 inline-right form-group\">\n" +
    "								  <label for=\"delivery_address.city\" class=\"sr-only\">Interphone</label>\n" +
    "								  <input type=\"text\"\n" +
    "									  ng-model=\"client.userinfos.delivery_address.intercom\"\n" +
    "									  placeholder=\"Interphone\"\n" +
    "									  class=\"form-control\"\n" +
    "									  id=\"delivery_address.city\"/>\n" +
    "								</div>\n" +
    "							  <textarea class=\"form-control\" rows=\"2\" ng-model=\"client.userinfos.delivery_address.other_info\" placeholder=\"Société, Bâtiment, Escalier, Etage ...\" id=\"delivery_address.other_info\"></textarea>\n" +
    "							</div>\n" +
    "\n" +
    "						<div class=\"checkbox\">\n" +
    "							<label>\n" +
    "							  <input type=\"checkbox\" ng-model=\"client.userinfos.same_billing\"> Facturation identique\n" +
    "							</label>\n" +
    "						</div>\n" +
    "					</div><!-- col-lg-4 col-md-4 col-sm-4 -->\n" +
    "\n" +
    "\n" +
    "					<div ng-hide=\"client.userinfos.same_billing\" class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "						<label>Adresse de Facturation </label>\n" +
    "						<!--           <div class=\"form-group\">\n" +
    "\n" +
    "							  <label for=\"billing_address.company\" class=\"sr-only\">Company</label>\n" +
    "							  <input type=\"text\"\n" +
    "								  ng-model=\"client.userinfos.billing_address.company\"\n" +
    "								  placeholder=\"Société\"\n" +
    "								  class=\"form-control\"\n" +
    "								  id=\"billing_address.company\"/>\n" +
    "						  </div> -->\n" +
    "						<div class=\"form-group\">\n" +
    "							<label for=\"billing_address.street\" class=\"sr-only\">Rue</label>\n" +
    "							<input type=\"text\"\n" +
    "							  ng-model=\"client.userinfos.billing_address.street\"\n" +
    "							  placeholder=\"Rue\"\n" +
    "							  class=\"form-control\"\n" +
    "							  id=\"billing_address.street\"\n" +
    "							  name=\"billing_address.street\"\n" +
    "							  />\n" +
    "						</div>\n" +
    "						<div class=\"u-w50 inline-left form-group\">\n" +
    "						<label for=\"billing_address.company\">Ville</label>\n" +
    "						  <label for=\"billing_address.zipcode\" class=\"sr-only\">CP</label>\n" +
    "						  <input type=\"text\"\n" +
    "							  ng-model=\"client.userinfos.billing_address.zipcode\"\n" +
    "							  placeholder=\"Code Postal\"\n" +
    "							  class=\"form-control\"\n" +
    "							  id=\"billing_address.zipcode\"/>\n" +
    "						</div>\n" +
    "						<div class=\"u-w50 inline-right form-group\">\n" +
    "						<label for=\"billing_address.company\">&nbsp;</label>\n" +
    "						  <label for=\"billing_address.city\" class=\"sr-only\">Ville</label>\n" +
    "						  <input type=\"text\"\n" +
    "							  ng-model=\"client.userinfos.billing_address.city\"\n" +
    "							  placeholder=\"Ville\"\n" +
    "							  class=\"form-control\"\n" +
    "							  id=\"billing_address.city\"/>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-group\">\n" +
    "						  <label for=\"billing_address.other_info\">Informations Complémentaires</label>\n" +
    "							<div class=\"u-w50 inline-left form-group\">\n" +
    "							  <label for=\"billing_address.zipcode\" class=\"sr-only\">Code</label>\n" +
    "							  <input type=\"text\"\n" +
    "								  ng-model=\"client.userinfos.billing_address.digicode\"\n" +
    "								  placeholder=\"Code Porte\"\n" +
    "								  class=\"form-control\"\n" +
    "								  id=\"billing_address.zipcode\"/>\n" +
    "							</div>\n" +
    "							<div class=\"u-w50 inline-right form-group\">\n" +
    "							  <label for=\"billing_address.city\" class=\"sr-only\">Interphone</label>\n" +
    "							  <input type=\"text\"\n" +
    "								  ng-model=\"client.userinfos.billing_address.intercom\"\n" +
    "								  placeholder=\"Interphone\"\n" +
    "								  class=\"form-control\"\n" +
    "								  id=\"billing_address.city\"/>\n" +
    "							</div>\n" +
    "						  <textarea class=\"form-control\" rows=\"2\" ng-model=\"client.userinfos.billing_address.other_info\" placeholder=\"Société, Bâtiment, Escalier, Etage ...\" id=\"billing_address.other_info\"></textarea>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-show=\"client.userinfos.same_billing\" class=\" form-offer col-lg-4 col-md-4 col-sm-4\">\n" +
    "						<h4 class=\"centered\">6 Bouteilles</h4>\n" +
    "						<hr>\n" +
    "						<h4 class=\"centered\">Choisies spécialement pour vous parmi notre gamme de plus de 100 références !</h4>\n" +
    "						<hr>\n" +
    "						<h4 class=\"centered\">69 €</h4>\n" +
    "					</div>\n" +
    "\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>    <!-- ROW -->\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-lg-12 col-md-12\">\n" +
    "				<form role=\"form\">\n" +
    "				<div class=\"col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n" +
    "						<input type=\"text\" ng-blur=\"blur()\" class=\"form-control\" ng-model=\"coupon.coupon\" placeholder=\"Code Promo / Parrainage\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-lg-4 col-md-4 centered\">\n" +
    "					<button class=\"btn button-white\" ng-click=\"addUserInfo(form_commander)\">Valider</button>\n" +
    "				</div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>    <!-- ROW -->\n" +
    "\n" +
    "");
}]);

angular.module("paiement/paiement.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("paiement/paiement.tpl.html",
    "<div class=\"background-paiement\">\n" +
    "  <toaster-container toaster-options=\"{'time-out': 4000, 'position-class': 'toast-top-right'}\"></toaster-container>\n" +
    "  <div class=\"overlay-paiement\">\n" +
    "        <div class=\"vertical-align\" ui-view autoscroll=\"false\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("paiement/parts/paiement.confirmation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("paiement/parts/paiement.confirmation.tpl.html",
    "\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2\">\n" +
    "      <h3 class=\"centered\">Merci de vérifier vos informations</h3>\n" +
    "      <hr>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-12 centered\">\n" +
    "          <p>Adresse</p>\n" +
    "          <h4 class=\"\">{{client.order.delivery_address.first_name}} {{client.order.delivery_address.last_name}}</h4>\n" +
    "          <h4>{{client.order.email}}</h4>\n" +
    "          <p>{{client.order.delivery_address.street}}<br>\n" +
    "          {{client.order.delivery_address.zipcode}} {{client.order.delivery_address.city}}</p>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-12 centered\">\n" +
    "          <p>Mode de Livraison</p>\n" +
    "          <a ng-class=\"{selected: delivery.mode == 'Point Relais'}\" class=\"btn button-overlay\" ng-click=\"deliveryMethod(1)\">Point Relais</a>\n" +
    "          <a ng-class=\"{selected: delivery.mode == 'Colissimo'}\" class=\"btn button-overlay\" ng-click=\"deliveryMethod(2)\">Colissimo Suivi</a>\n" +
    "          <a ng-class=\"{selected: delivery.mode == 'Vinify'}\" class=\"btn button-overlay\" ng-click=\"deliveryMethod(3)\">Retrait Vinify (Issy 92)</a>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-12\">\n" +
    "                    <table class=\"table-bill\">\n" +
    "                        <tr ng-show=\"client.order.order_type === 'Refill'\">\n" +
    "                          <td><h4>{{client.order.order_type}} </h4></td>\n" +
    "                          <td><h4>{{client.order.amount}} €</h4></td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"client.order.order_type === 'Vinibar'\">\n" +
    "                          <td><h4>Vinibar</h4></td>\n" +
    "                          <td><h4>69 €</h4></td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                          <td><h4>Livraison </h4></td>\n" +
    "                          <td>\n" +
    "                            <h4>\n" +
    "                              {{delivery.cost}} €\n" +
    "                            </h4>\n" +
    "                          </td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"client.order.coupon.value\">\n" +
    "                          <td><h4>Promo </h4></td>\n" +
    "                          <td><h4>- {{client.order.coupon.value}} €</h4></td>\n" +
    "                        </tr>\n" +
    "                        <tr  class=\"bill-total\">\n" +
    "                          <td><h4>Total </h4></td>\n" +
    "                          <td><h4>{{client.order.amount + delivery.cost  | number:1}} €</h4></td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      <div class=\"row terminate-order\">\n" +
    "        <div class=\"col-lg-4 col-lg-offset-8 col-md-4 col-md-offset-8 col-sm-12 centered\">\n" +
    "          <button class=\"btn button-white\" ng-click=\"createOrder()\">Commander mes vins</button>\n" +
    "        </div>\n" +
    "      </div>    <!-- ROW -->\n" +
    "    </div>\n" +
    "  </div>    <!-- ROW -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("paiement/parts/paiement.login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("paiement/parts/paiement.login.tpl.html",
    "<div class=\"centered\">\n" +
    "      <h3 id=\"please-login\">Merci de vous connecter pour finaliser votre commande</h3>\n" +
    "      <form role=\"form\" name=\"form_login\" class=\"form-inline\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"sr-only\" for=\"email\" name=\"email\">Email</label>\n" +
    "          <input type=\"email\"\n" +
    "              name=\"email\"\n" +
    "              ng-model=\"email\"\n" +
    "              placeholder=\"Email\"\n" +
    "              required\n" +
    "              class=\"form-control\"\n" +
    "              id=\"email\"/>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"sr-only\" for=\"password\">Mot de Passe</label>\n" +
    "          <input type=\"password\"\n" +
    "              placeholder=\"Password\"\n" +
    "              name=\"password\"\n" +
    "              ng-model=\"password\"\n" +
    "              required\n" +
    "              class=\"form-control\"\n" +
    "              ng-minlength=\"5\"\n" +
    "              id=\"password\"/>\n" +
    "        </div>\n" +
    "        <button class=\"btn btn-outline-white\" ng-click=\"login(email, password)\">Valider</button>\n" +
    "      </form>\n" +
    "      <a id=\"get_pwd\" href=\"http://api.vinify.co/api/users/password/reset/\" target=\"_blank\">Récupérer mon mot de passe</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pay_mobile/pay_mobile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pay_mobile/pay_mobile.tpl.html",
    "<div class=\"background-order\" id=\"order-mobile\">\n" +
    "  <nav class=\"navbar\" role=\"navigation\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"navbar-header\">\n" +
    "         <a href=\"\"><img alt=\"\" src=\"assets/logo.png\" style=\"height:45px\"/></a>\n" +
    "      </div>\n" +
    "      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "          <li><a href=\"\"><img alt=\"\" src=\"assets/oclipboard.png\" class=\"opacity-link\" style=\"height:45px\"/></a></li>\n" +
    "          <li ng-show=\"state == 'order.userinfos'\"><a href=\"\"><img alt=\"\" src=\"assets/dolly.png\" style=\"height:45px\"/></a></li>\n" +
    "          <li ng-show=\"!(state == 'order.userinfos')\"><a href=\"\"><img alt=\"\" class=\"opacity-link\" src=\"assets/odolly.png\" style=\"height:45px\"/></a></li>\n" +
    "          <li ng-show=\"state == 'order.paiement'\"><a href=\"\"><img alt=\"\" src=\"assets/creditcard.png\" style=\"height:45px\"/></a></li>\n" +
    "          <li ng-hide=\"state == 'order.paiement'\"><a href=\"\"><img alt=\"\" class=\"opacity-link\" src=\"assets/ocreditcard.png\" style=\"height:45px\"/></a></li>\n" +
    "        </ul>\n" +
    "      </div><!-- /.navbar-collapse -->\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "  <div class=\"container-delivery-checkout-less\">\n" +
    "      <toaster-container toaster-options=\"{'time-out': 4000, 'position-class': 'toast-top-right'}\"></toaster-container>\n" +
    "    <h3 class=\"centered\">Merci de vérifier vos informations</h3>\n" +
    "    <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 form-infos u-padding\">\n" +
    "      <div class=\"main-container\">\n" +
    "        <div class=\"row row-paiement\">\n" +
    "            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "              <div class=\"row\">\n" +
    "                  <div class=\"col-lg-4 col-md-4 col-sm-12 centered\">\n" +
    "                <h4>Adresse</h4>\n" +
    "                <p class=\"\">{{client.userinfos.first_name}} {{client.userinfos.last_name}}</p>\n" +
    "                <p>{{client.email}}</h4>\n" +
    "                <p>{{client.userinfos.delivery_address.street}}<br>\n" +
    "                {{client.userinfos.delivery_address.zipcode}} {{client.userinfos.delivery_address.city}}</p>\n" +
    "\n" +
    "                  </div>\n" +
    "                  <hr class=\"visible-sm visible-xs\">\n" +
    "                  <div class=\"col-lg-4 col-md-4 col-sm-12 centered\">\n" +
    "                <h4>Mode de Livraison</h4>\n" +
    "                          <table class=\"table-deliv-mode\">\n" +
    "                              <tr ng-click=\"updateOrder(1)\">\n" +
    "                                <td>\n" +
    "                      <svg ng-show=\"delivery.mode === 'Point Relais' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                        <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "                        <title>Grapes</title>\n" +
    "                        <desc>Created with Sketch.</desc>\n" +
    "                        <defs></defs>\n" +
    "                        <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                            <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "                                <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "                                    <g id=\"Tick\">\n" +
    "                                        <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" fill=\"#006DB2\"></path>\n" +
    "                                        <g id=\"Shape-2-+-Shape-3\" transform=\"translate(8.683417, 10.582915)\" fill=\"#FFFFFF\">\n" +
    "                                            <path d=\"M6.61603572,-0.979270246 C6.83808255,-0.979270246 6.99641974,-0.90543001 6.99641974,-0.819862208 L6.99641974,7.46197174 C6.99641974,7.54797389 6.8376141,7.62181413 6.61603572,7.62181413 C6.36213407,7.62181413 6.20379688,7.54797389 6.20379688,7.46197174 L6.20379688,-0.819862208 C6.20379688,-0.90543001 6.36213407,-0.979270246 6.61603572,-0.979270246 Z\" id=\"Shape-2\" transform=\"translate(6.610832, 3.298008) rotate(45.000000) translate(-6.610832, -3.298008) \"></path>\n" +
    "                                            <path d=\"M2.1433034,1.87721922 C2.36535023,1.87721922 2.52368742,1.9231654 2.52368742,1.97640892 L2.52368742,7.12967868 C2.52368742,7.18319247 1.73106457,7.23722887 1.73106457,7.18371508 L1.73106457,1.97640892 C1.73106457,1.9231654 1.88940176,1.87721922 2.1433034,1.87721922 Z\" id=\"Shape-3\" transform=\"translate(2.138100, 4.522948) rotate(-45.000000) translate(-2.138100, -4.522948) \"></path>\n" +
    "                                        </g>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </g>\n" +
    "                        </g>\n" +
    "                      </svg>\n" +
    "                      <svg ng-hide=\"delivery.mode === 'Point Relais' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                        <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "                        <title>Grapes</title>\n" +
    "                        <desc>Created with Sketch.</desc>\n" +
    "                        <defs></defs>\n" +
    "                        <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                            <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "                                <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "                                    <g id=\"Tick\">\n" +
    "                                        <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" stroke=\"#006DB2\" fill=\"#FFF\"></path>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </g>\n" +
    "                        </g>\n" +
    "                      </svg>\n" +
    "                                 </h4>\n" +
    "                                <td><p> Point Relais </p></td>\n" +
    "                              </tr>\n" +
    "                              <tr ng-click=\"updateOrder(2)\">\n" +
    "                                <td>\n" +
    "                      <svg ng-show=\"delivery.mode === 'Colissimo' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                        <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "                        <title>Grapes</title>\n" +
    "                        <desc>Created with Sketch.</desc>\n" +
    "                        <defs></defs>\n" +
    "                        <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                            <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "                                <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "                                    <g id=\"Tick\">\n" +
    "                                        <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" fill=\"#006DB2\"></path>\n" +
    "                                        <g id=\"Shape-2-+-Shape-3\" transform=\"translate(8.683417, 10.582915)\" fill=\"#FFFFFF\">\n" +
    "                                            <path d=\"M6.61603572,-0.979270246 C6.83808255,-0.979270246 6.99641974,-0.90543001 6.99641974,-0.819862208 L6.99641974,7.46197174 C6.99641974,7.54797389 6.8376141,7.62181413 6.61603572,7.62181413 C6.36213407,7.62181413 6.20379688,7.54797389 6.20379688,7.46197174 L6.20379688,-0.819862208 C6.20379688,-0.90543001 6.36213407,-0.979270246 6.61603572,-0.979270246 Z\" id=\"Shape-2\" transform=\"translate(6.610832, 3.298008) rotate(45.000000) translate(-6.610832, -3.298008) \"></path>\n" +
    "                                            <path d=\"M2.1433034,1.87721922 C2.36535023,1.87721922 2.52368742,1.9231654 2.52368742,1.97640892 L2.52368742,7.12967868 C2.52368742,7.18319247 1.73106457,7.23722887 1.73106457,7.18371508 L1.73106457,1.97640892 C1.73106457,1.9231654 1.88940176,1.87721922 2.1433034,1.87721922 Z\" id=\"Shape-3\" transform=\"translate(2.138100, 4.522948) rotate(-45.000000) translate(-2.138100, -4.522948) \"></path>\n" +
    "                                        </g>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </g>\n" +
    "                        </g>\n" +
    "                      </svg>\n" +
    "                      <svg ng-hide=\"delivery.mode === 'Colissimo' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                        <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "                        <title>Grapes</title>\n" +
    "                        <desc>Created with Sketch.</desc>\n" +
    "                        <defs></defs>\n" +
    "                        <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                            <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "                                <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "                                    <g id=\"Tick\">\n" +
    "                                        <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" stroke=\"#006DB2\" fill=\"#FFF\"></path>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </g>\n" +
    "                        </g>\n" +
    "                      </svg>\n" +
    "                  </td>\n" +
    "                                <td>\n" +
    "                    <p> Colissimo Suivi </p>\n" +
    "                                </td>\n" +
    "                              </tr>\n" +
    "                              <tr ng-click=\"updateOrder(3)\"  class=\"bill-total\">\n" +
    "                                <td>\n" +
    "                      <svg ng-show=\"delivery.mode === 'Vinify' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                        <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "                        <title>Grapes</title>\n" +
    "                        <desc>Created with Sketch.</desc>\n" +
    "                        <defs></defs>\n" +
    "                        <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                            <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "                                <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "                                    <g id=\"Tick\">\n" +
    "                                        <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" fill=\"#006DB2\"></path>\n" +
    "                                        <g id=\"Shape-2-+-Shape-3\" transform=\"translate(8.683417, 10.582915)\" fill=\"#FFFFFF\">\n" +
    "                                            <path d=\"M6.61603572,-0.979270246 C6.83808255,-0.979270246 6.99641974,-0.90543001 6.99641974,-0.819862208 L6.99641974,7.46197174 C6.99641974,7.54797389 6.8376141,7.62181413 6.61603572,7.62181413 C6.36213407,7.62181413 6.20379688,7.54797389 6.20379688,7.46197174 L6.20379688,-0.819862208 C6.20379688,-0.90543001 6.36213407,-0.979270246 6.61603572,-0.979270246 Z\" id=\"Shape-2\" transform=\"translate(6.610832, 3.298008) rotate(45.000000) translate(-6.610832, -3.298008) \"></path>\n" +
    "                                            <path d=\"M2.1433034,1.87721922 C2.36535023,1.87721922 2.52368742,1.9231654 2.52368742,1.97640892 L2.52368742,7.12967868 C2.52368742,7.18319247 1.73106457,7.23722887 1.73106457,7.18371508 L1.73106457,1.97640892 C1.73106457,1.9231654 1.88940176,1.87721922 2.1433034,1.87721922 Z\" id=\"Shape-3\" transform=\"translate(2.138100, 4.522948) rotate(-45.000000) translate(-2.138100, -4.522948) \"></path>\n" +
    "                                        </g>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </g>\n" +
    "                        </g>\n" +
    "                      </svg>\n" +
    "                      <svg ng-hide=\"delivery.mode === 'Vinify' \" width=\"25px\" height=\"25px\" viewBox=\"0 0 30 30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                        <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "                        <title>Grapes</title>\n" +
    "                        <desc>Created with Sketch.</desc>\n" +
    "                        <defs></defs>\n" +
    "                        <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                            <g id=\"TickSmall-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 2.000000)\">\n" +
    "                                <g id=\"VY-logo-white\" sketch:type=\"MSShapeGroup\">\n" +
    "                                    <g id=\"Tick\">\n" +
    "                                        <path d=\"M13.4994573,26.9989146 C20.9550017,26.9989146 26.9989146,20.9550017 26.9989146,13.4994573 C26.9989146,6.0439129 20.9550017,0 13.4994573,0 C6.0439129,0 0,6.0439129 0,13.4994573 C0,20.9550017 6.0439129,26.9989146 13.4994573,26.9989146 Z\" id=\"Oval\" stroke=\"#006DB2\" fill=\"#FFF\"></path>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </g>\n" +
    "                        </g>\n" +
    "                      </svg>\n" +
    "                                </td>\n" +
    "                                <td><p> Retrait Vinify (Issy 92) </p></td>\n" +
    "                              </tr>\n" +
    "                          </table>\n" +
    "                  </div>\n" +
    "                  <hr class=\"visible-sm visible-xs\">\n" +
    "                  <div class=\"col-lg-4 col-md-4 col-sm-12\">\n" +
    "                       <h4 class=\"centered\">Commande</h4>\n" +
    "                          <table class=\"table-bill\">\n" +
    "                              <tr>\n" +
    "                                <td><h4>Vinibar </h4></td>\n" +
    "                                <td><h4>69&nbsp;€</h4></td>\n" +
    "                              </tr>\n" +
    "                              <tr>\n" +
    "                                <td><h4>Livraison </h4></td>\n" +
    "                                <td>\n" +
    "                                  <h4>\n" +
    "                                    {{delivery.cost}}&nbsp;€\n" +
    "                                  </h4>\n" +
    "                                </td>\n" +
    "                              </tr>\n" +
    "                              <tr ng-show=\"client.order.coupon.value\">\n" +
    "                                <td><h4>Promo </h4></td>\n" +
    "                                <td><h4>- {{client.order.coupon.value}}&nbsp;€</h4></td>\n" +
    "                              </tr>\n" +
    "                              <tr  class=\"bill-total\">\n" +
    "                                <td><h4>Total </h4></td>\n" +
    "                                <td><h4>{{69 + delivery.cost - client.order.coupon.value | number:1}}&nbsp;€</h4></td>\n" +
    "                              </tr>\n" +
    "                          </table>\n" +
    "                  </div>\n" +
    "                  <hr>\n" +
    "              </div>\n" +
    "              <div class=\"row centered\">\n" +
    "                 <img src=\"assets/credit_cards.png\" alt=\"\"> <i class=\"fa fa-lock\"></i> SSL Secure\n" +
    "                <hr>\n" +
    "              </div>\n" +
    "            <div class=\"row\">\n" +
    "             <form name=\"stripe-form\" id=\"stripe-form\" stripe-form=\"submit\">\n" +
    "             <h4 class=\"centered\">Vos coordonnées de paiement</h4>\n" +
    "               <div class=\"row item\">\n" +
    "                 <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n" +
    "                      <label for=\"\">Numéro de carte</label>\n" +
    "                     <i class=\"icon ion-card\"></i> <input class=\"form-control\" type=\"text\" name=\"number\" id=\"number\" ng-model=\"number\" placeholder=\"XXXX XXXX XXXX XXXX\" payments-validate=\"card\" payments-type-model=\"type\" payments-format=\"card\"  required/>\n" +
    "                 </div>\n" +
    "                 <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n" +
    "                      <label for=\"\">CVC</label>\n" +
    "                     <i class=\"icon ion-locked\"></i> <input class=\"form-control\" type=\"text\" name=\"cvc\" id=\"cvc\" ng-model=\"cvc\" placeholder=\"XXX\" payments-validate=\"cvc\" payments-format=\"cvc\" required/>\n" +
    "                 </div>\n" +
    "               </div>\n" +
    "               <div class=\"row item\">\n" +
    "                 <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n" +
    "\n" +
    "                     <label for=\"\">Mois</label>\n" +
    "                     <select class=\"form-control\" name=\"expMonth\" ng-model=\"expMonth\" placeholder=\"MM\"required>\n" +
    "                       <option value=\"01\">Janvier</option>\n" +
    "                       <option value=\"02\">Février</option>\n" +
    "                       <option value=\"03\">Mars</option>\n" +
    "                       <option value=\"04\">Avril</option>\n" +
    "                       <option value=\"05\">Mai</option>\n" +
    "                       <option value=\"06\">Juin</option>\n" +
    "                       <option value=\"07\">Juillet</option>\n" +
    "                       <option value=\"08\">Août</option>\n" +
    "                       <option value=\"09\">Septembre</option>\n" +
    "                       <option value=\"10\">Octobre</option>\n" +
    "                       <option value=\"11\">Novembre</option>\n" +
    "                       <option value=\"12\">Décembre</option>\n" +
    "                     </select>\n" +
    "\n" +
    "        <!--             <label class=\"item item-input\">\n" +
    "                     <i class=\"icon ion-ios7-calendar-outline\"></i> <input type=\"text\" name=\"expiry\" id=\"expiry\" ng-model=\"expiry\" placeholder=\"MM\" payments-validate=\"expiry\" payments-format=\"expiry\" required/>\n" +
    "                   </label> -->\n" +
    "                 </div>\n" +
    "                 <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n" +
    "\n" +
    "                     <label for=\"\">Année</label>\n" +
    "                     <select class=\"form-control\" name=\"expYear\" ng-model=\"expYear\" required>\n" +
    "                       <option>2014</option>\n" +
    "                       <option>2015</option>\n" +
    "                       <option>2016</option>\n" +
    "                       <option>2017</option>\n" +
    "                       <option>2018</option>\n" +
    "                       <option>2019</option>\n" +
    "                       <option>2020</option>\n" +
    "                     </select>\n" +
    "\n" +
    "        <!--             <label class=\"item item-input\">\n" +
    "                     <i class=\"icon ion-locked\"></i> <input type=\"text\" name=\"cvc\" id=\"cvc\" ng-model=\"cvc\" placeholder=\"CVC\" payments-validate=\"cvc\" payments-format=\"cvc\" required/>\n" +
    "                   </label> -->\n" +
    "                 </div>\n" +
    "               </div>\n" +
    "                <hr>\n" +
    "               <div class=\"row row-submit centered\">\n" +
    "                <div><input type=\"hidden\" name=\"name\" ng-model=\"client.userinfos.last_name\"/></div>\n" +
    "                <button class=\"btn button-white\" value=\"submit\">Commander mes vins</button>\n" +
    "                <div><a href ui-sref=\"order.userinfos\">Modifier</a></div>\n" +
    "               </div>\n" +
    "             </form>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>    <!-- ROW -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("preview/preview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("preview/preview.tpl.html",
    "\n" +
    "<nav class=\"navbar\" role=\"navigation\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			 <a href=\"\"><img alt=\"\" src=\"assets/logo.png\" style=\"height:45px\"/></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</nav>\n" +
    "\n" +
    "<div id=\"preview\">\n" +
    "	<div class=\"container-preview\">\n" +
    "		<div class=\"centered\">\n" +
    "			<h3>Les 3 vins qui correspondent le plus à vos goûts</h3>\n" +
    "		</div>\n" +
    "		<div class=\"centered col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12\">\n" +
    "			<div id=\"wines-preview\">\n" +
    "				<div>\n" +
    "					<div class=\"bottle-row\" ng-mouseenter=\"wine_1 = !wine_1\" ng-mouseleave=\"wine_1 = !wine_1\" ng-mouseenter=\"wine_1 = !wine_1\" ng-mouseleave=\"wine_1 = !wine_1\">\n" +
    "						<img src=\"assets/wines/13cbac7c677a48cc89a8f4f47381c1ac.jpg\" alt=\"\">\n" +
    "						<div class=\"preview-overlay\" ng-show=\"wine_1\">\n" +
    "							<div>\n" +
    "								<h4>Cépages</h4>\n" +
    "								<span>{{preview[0].variety}}</span>\n" +
    "								<h4>Appellation</h4>\n" +
    "								<span>{{preview[0].appellation}}</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div>\n" +
    "						<h4>{{preview[0].display_name}}</h4>\n" +
    "						<p>{{preview[0].region}} -  {{preview[0].vintage}}</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div>\n" +
    "					<div class=\"bottle-row\" ng-mouseenter=\"wine_2 = !wine_2\" ng-mouseleave=\"wine_2 = !wine_2\">\n" +
    "						<img src=\"assets/wines/c40e10a657fa40c1b1726b8d1246e87b.jpg\" alt=\"\">\n" +
    "						<div class=\"preview-overlay\" ng-show=\"wine_2\">\n" +
    "							<div>\n" +
    "								<h4>Cépages</h4>\n" +
    "								<span>{{preview[1].variety}}</span>\n" +
    "								<h4>Appellation</h4>\n" +
    "								<span>{{preview[1].appellation}}</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div>\n" +
    "						<h4>{{preview[1].display_name}}</h4>\n" +
    "						<p>{{preview[1].region}} -  {{preview[1].vintage}}</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div>\n" +
    "					<div class=\"bottle-row\" ng-mouseenter=\"wine_3 = !wine_3\" ng-mouseleave=\"wine_3 = !wine_3\">\n" +
    "						<img src=\"assets/wines/dbab75026cdc4480bafac802cb0e92ca.jpg\" alt=\"\">\n" +
    "						<div class=\"preview-overlay\" ng-show=\"wine_3\">\n" +
    "							<div>\n" +
    "								<h4>Cépages</h4>\n" +
    "								<span>{{preview[2].variety}}</span>\n" +
    "								<h4>Appellation</h4>\n" +
    "								<span>{{preview[2].appellation}}</span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div>\n" +
    "						<h4>{{preview[2].display_name}}</h4>\n" +
    "						<p>{{preview[2].region}} -  {{preview[2].vintage}}</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"container container-hr\">\n" +
    "				<div><hr></div>\n" +
    "				<div><img alt=\"\" src=\"assets/logo_mini.png\" style=\"height:45px\"/></div>\n" +
    "				<div><hr></div>\n" +
    "			</div>\n" +
    "			<div id=\"container-offers\">\n" +
    "				<div class=\"col-lg-6 col-lg-push-6 col-md-6 col-md-push-6 col-sm-12  col-xs-12 \">\n" +
    "					<h4 class=\"u-left\">Je veux découvrir ma sélection personnalisée</h4>\n" +
    "					<p>Dégustez 6 bouteilles sélectionnés parmi plus de 100 références par notre oenologue en fonction de vos réponses.</p>\n" +
    "					<p>Accédez à notre application pour les noter et retrouver des informations sur vos vins et les conseils d'un oenologue.</p>\n" +
    "					<button class=\"button btn-cta pull-right\">Commander mon Vinibar</button>\n" +
    "				</div>\n" +
    "				<div class=\"col-lg-6 col-lg-pull-6 col-md-6 col-md-pull-6 col-sm-12  col-xs-12 \">\n" +
    "					<h4 class=\"u-left\">Je veux tester la sélection découverte</h4>\n" +
    "					<p>Dégustez un avant gout de notre sélection avec les 3 bouteilles présentées ci-dessus.</p>\n" +
    "					<p>Accédez à notre application pour les noter et retrouver des informations sur vos vins et les conseils d'un oenologue.</p>\n" +
    "					<button class=\"button btn-cta-outline pull-right\">Commander 3 bouteilles</button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("questionnaire/parts/questionnaire.balance.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.balance.tpl.html",
    "<div class=\"background-balance\">\n" +
    "  <div class=\"progressbar\">\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div class=\"progress-whole\"></div>\n" +
    "    <div></div>\n" +
    "  </div>\n" +
    "  <div class=\"overlay\">\n" +
    "    <div class=\"form-errors fader\" ng-show=\"answerAll\">\n" +
    "      Merci de choisir une préférence pour chaque type de vin, puis valider avec la flèche\n" +
    "    </div>\n" +
    "    <div class=\"form-errors fader\" ng-show=\"nowine\">\n" +
    "      Vous ne voulez pas de vins dans votre Vinibar :) ?\n" +
    "    </div>\n" +
    "    <div class=\"vertical-align centered  vertical-align-mobile\">\n" +
    "        <div class=\"row\">\n" +
    "          <h3>Composez votre Vinibar</h3>\n" +
    "          <p>(Indiquez vos préférences par type de vin)</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\" id=\"quest_balance\">\n" +
    "          <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3\">\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "              <h4>Vin Rouge</h4>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_1 == 2}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_1 = 2;\">Beaucoup</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_1 == 1}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_1 = 1\">Un peu</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_1 == 0}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_1 = 0\">Pas</button><br>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "              <h4>Vin Blanc</h4>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_2 == 2}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_2 = 2\">Beaucoup</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_2 == 1}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_2 = 1\">Un peu</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_2 == 0}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_2 = 0\">Pas</button><br>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "              <h4>Vin Rosé</h4>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_3 == 2}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_3 = 2\">Beaucoup</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_3 == 1}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_3 = 1\">Un peu</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.quest_6.answ_3 == 0}\"\n" +
    "                      ng-click=\"newuser.survey.quest_6.answ_3 = 0\">Pas</button><br>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks\">\n" +
    "      <a ui-sref=\"questionnaire.starter\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks-right\">\n" +
    "      <a class=\"validateBalanceAnswer()\" ng-click=\"validateBalanceAnswer()\"><i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("questionnaire/parts/questionnaire.coffee.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.coffee.tpl.html",
    "<div class=\"background-coffee\">\n" +
    "  <div class=\"progressbar\">\n" +
    "    <div class=\"progress-whole\"></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "  </div>\n" +
    "  <div class=\"overlay\">\n" +
    "    <div class=\"vertical-align centered\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3>Vous preferez votre café :</h3>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-12 col-md-12 col-sm-12 elements-quest\" id=\"quest_coffee\">\n" +
    "\n" +
    "          <div class=\"col-lg-3 col-md-3\">\n" +
    "            <a ui-sref=\"questionnaire.juice\" ng-class=\"{selected: newuser.survey.quest_1.answ == 1}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_1.answ = 1 \">Noir</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-3 col-md-3\">\n" +
    "            <a ui-sref=\"questionnaire.juice\" ng-class=\"{selected: newuser.survey.quest_1.answ == 2}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_1.answ = 2\">Avec du sucre</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-3 col-md-3\">\n" +
    "            <a ui-sref=\"questionnaire.juice\" ng-class=\"{selected: newuser.survey.quest_1.answ == 3}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_1.answ = 3\">Avec du lait</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-3 col-md-3\">\n" +
    "            <a ui-sref=\"questionnaire.juice\" ng-class=\"{selected: newuser.survey.quest_1.answ == 4}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_1.answ = 4\">Je n'en prends pas</a>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "<!--     <div class=\"navlinks-right\">\n" +
    "      <a ui-sref=\"questionnaire.juice\"><i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "    </div> -->\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("questionnaire/parts/questionnaire.comments.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.comments.tpl.html",
    "<div class=\"background-comments\">\n" +
    "  <div class=\"progress-bar\">\n" +
    "      <img alt=\"\" id=\"clipboard\" src=\"assets/clipboard.png\" style=\"height:45px\"/>\n" +
    "      <img alt=\"\" id=\"dolly\" src=\"assets/odolly.png\" style=\"height:45px\"/>\n" +
    "      <img alt=\"\" id=\"creditcard\" src=\"assets/ocreditcard.png\" style=\"height:45px\"/>\n" +
    "  </div>\n" +
    "  <div class=\"overlay\">\n" +
    "    <div class=\"form-errors fader\" ng-show=\"showFormErrors\">\n" +
    "      Le(s) champ(s) suivant(s) sont requis:\n" +
    "        <span ng-show=\"form_name.first_name.$invalid\">Prénom, </span>\n" +
    "        <span ng-show=\"form_name.last_name.$invalid\">Nom, </span>\n" +
    "        <span ng-show=\"form_user.password.$invalid\">Mot de passe, </span>\n" +
    "        <span ng-show=\"form_name.email.$invalid\">Email, </span>\n" +
    "        <span ng-show=\"form_tastes.region.$invalid\">Région préférée, </span>\n" +
    "        <span ng-show=\"form_tastes.textarea.$invalid\">Au moins un vin qui vous a marqué :) </span>\n" +
    "    </div>\n" +
    "    <div class=\"form-errors fader\" ng-show=\"showFormEmailError\">\n" +
    "      Oops, votre adresse email ne semble pas valide ...\n" +
    "    </div>\n" +
    "    <div class=\"form-errors fader\" ng-show=\"invalidLogin\">\n" +
    "      Oops, un compte est déjà associé à cet Email, mais avec un autre mot de passe. Une question ? Contactez <a href=\"mailto:charlotte@vinify.co\">charlotte@vinify.co</a>\n" +
    "    </div>\n" +
    "      <div class=\"vertical-align-comments\">\n" +
    "          <div class=\"row col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1\">\n" +
    "            <form name=\"form_name\" role=\"form\" class=\"form-inline\">\n" +
    "              <h3>Mon compte Vinify</h3>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"sr-only\" for=\"first_name\">Prénom</label>\n" +
    "                <input type=\"text\"\n" +
    "                    placeholder=\"Prénom\"\n" +
    "                    name=\"first_name\"\n" +
    "                    ng-model=\"newuser.first_name\"\n" +
    "                    required\n" +
    "                    class=\"form-control\"\n" +
    "                    id=\"first_name\"/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"sr-only\" for=\"last_name\">Nom</label>\n" +
    "                <input type=\"text\"\n" +
    "                    placeholder=\"Nom\"\n" +
    "                    name=\"last_name\"\n" +
    "                    ng-model=\"newuser.last_name\"\n" +
    "                    required\n" +
    "                    class=\"form-control\"\n" +
    "                    id=\"last_name\"/>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "            <form role=\"form\" name=\"form_user\" class=\"form-inline\">\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"sr-only\" for=\"email\" name=\"email\">Email</label>\n" +
    "                <input type=\"email\"\n" +
    "                    name=\"email\"\n" +
    "                    ng-model=\"newuser.email\"\n" +
    "                    placeholder=\"Email\"\n" +
    "                    required\n" +
    "                    class=\"form-control\"\n" +
    "                    id=\"email\"/>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label class=\"sr-only\" for=\"password\">Mot de Passe</label>\n" +
    "                <input type=\"password\"\n" +
    "                    tooltip=\"Min. 5 charactères\"  tooltip-trigger=\"focus\" tooltip-placement=\"bottom\"\n" +
    "                    placeholder=\"Password\"\n" +
    "                    name=\"password\"\n" +
    "                    ng-model=\"newuser.password\"\n" +
    "                    required\n" +
    "                    class=\"form-control\"\n" +
    "                    ng-minlength=\"5\"\n" +
    "                    id=\"password\"/>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "            <form role=\"form\" name=\"form_tastes\" class=\"form-gouts\">\n" +
    "              <h3>Mes goûts</h3>\n" +
    "              <div class=\"row form-group col-lg-12 form-creation-compte\">\n" +
    "                <label>\n" +
    "                  <select name=\"region\" id=\"region\" class=\"form-control\" ng-model=\"newuser.survey.region\" ng-options=\"region as region for region in regions | orderBy: 'toString()'\" required>\n" +
    "                    <option value=\"\">Ma région préférée ... &nbsp;&nbsp;</option>\n" +
    "                  </select>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "              <div class=\"row form-group col-lg-8\">\n" +
    "                <label for=\"comments\" class=\"sr-only\">Un vin qui vous a marqué ?</label>\n" +
    "                  <textarea name=\"textarea\" type=\"text\" id=\"comments\" rows=\"4\" class=\"form-control\" ng-model=\"newuser.survey.infos\" placeholder=\"Un vin qui vous a marqué, vos cépages préférés, une expérience dans le vin que vous souhaitez partager ...\"></textarea>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "\n" +
    "            <div class=\"row col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1\">\n" +
    "              <button class=\"btn button-createuser pull-right\" ng-click=\"createUser(form_name, form_user, form_tastes)\">Créer mon compte</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"navlinks\">\n" +
    "        <a ui-sref=\"questionnaire.balance\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("questionnaire/parts/questionnaire.cuisine.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.cuisine.tpl.html",
    "<div class=\"background-cuisine\">\n" +
    "  <div class=\"progressbar\">\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div class=\"progress-whole\"></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "  </div>\n" +
    "  <div class=\"overlay\">\n" +
    "    <div class=\"form-errors fader\" ng-show=\"answerOne\">\n" +
    "      Merci de choisir au moins une cuisine, puis valider avec la flèche\n" +
    "    </div>\n" +
    "    <div class=\"vertical-align centered\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3>Vous aimez les cuisines :</h3>\n" +
    "        <p>(Choisissez TOUS les styles que vous appréciez, puis validez avec la flèche)</p>\n" +
    "      </div>\n" +
    "      <div class=\"row\" id=\"quest_cuisine\">\n" +
    "        <div class=\"col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2\">\n" +
    "\n" +
    "          <button class=\"btn button-overlay\"\n" +
    "                  ng-class=\"{selected: newuser.survey.quest_3.answ_1 == true}\"\n" +
    "                  ng-click=\"newuser.survey.quest_3.answ_1 = !newuser.survey.quest_3.answ_1\">Française</button><br>\n" +
    "          <button class=\"btn button-overlay\"\n" +
    "                  ng-class=\"{selected: newuser.survey.quest_3.answ_2 == true}\"\n" +
    "                  ng-click=\"newuser.survey.quest_3.answ_2 = !newuser.survey.quest_3.answ_2\">Italienne</button><br>\n" +
    "          <button class=\"btn button-overlay\"\n" +
    "                  ng-class=\"{selected: newuser.survey.quest_3.answ_3 == true}\"\n" +
    "                  ng-click=\"newuser.survey.quest_3.answ_3 = !newuser.survey.quest_3.answ_3\">Asiatique</button><br>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-lg-4 col-md-4\">\n" +
    "          <button class=\"btn button-overlay\" analytics-on=\"click\" analytics-event=\"Button 1\" analytics-category=\"Commands\"\n" +
    "                  ng-class=\"{selected: newuser.survey.quest_3.answ_4 == true}\"\n" +
    "                  ng-click=\"newuser.survey.quest_3.answ_4 = !newuser.survey.quest_3.answ_4\">Américaine</button><br>\n" +
    "          <button class=\"btn button-overlay\" analytics-on=\"click\" analytics-event=\"Button 2\" analytics-category=\"Commands\"\n" +
    "                  ng-class=\"{selected: newuser.survey.quest_3.answ_5 == true}\"\n" +
    "                  ng-click=\"newuser.survey.quest_3.answ_5 = !newuser.survey.quest_3.answ_5\">Végétarienne</button><br>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks\">\n" +
    "      <a ui-sref=\"questionnaire.juice\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks-right\">\n" +
    "      <a href ng-click=\"validateCuisineAnswer()\" ><i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("questionnaire/parts/questionnaire.discovery.comments.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.discovery.comments.tpl.html",
    "<h4>Quelques informations sur vous ...</h4>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-lg-6 col-md-6\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" ng-model=\"newuser.survey.infos\" placeholder=\"Vos appellations ou régions préférées, un vin qui vous a marqué, vos cépages préférés, une expérience dans le vin que vous souhaitez partager ...\"></textarea>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <div>\n" +
    "        <label for=\"email\" name=\"email\">Email</label>\n" +
    "        <input type=\"email\"\n" +
    "            name=\"email\"\n" +
    "            ng-model=\"newuser.email\"\n" +
    "            placeholder=\"Email\"\n" +
    "            required\n" +
    "            class=\"form-control\"\n" +
    "            id=\"email\"/>\n" +
    "        <label for=\"first_name\">Prénom</label>\n" +
    "        <input type=\"text\"\n" +
    "            placeholder=\"Marcel\"\n" +
    "            name=\"first_name\"\n" +
    "            ng-model=\"newuser.first_name\"\n" +
    "            required\n" +
    "            class=\"form-control\"\n" +
    "            id=\"first_name\"/>\n" +
    "        <label for=\"last_name\">Nom</label>\n" +
    "        <input type=\"text\"\n" +
    "            placeholder=\"Dettmann\"\n" +
    "            name=\"last_name\"\n" +
    "            ng-model=\"newuser.last_name\"\n" +
    "            required\n" +
    "            class=\"form-control\"\n" +
    "            id=\"last_name\"/>\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-primary btn-quest\" ng-click=\"createDiscoveryUser()\">Valider</button>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("questionnaire/parts/questionnaire.juice.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.juice.tpl.html",
    "<div class=\"background-juice\">\n" +
    "  <div class=\"progressbar\">\n" +
    "    <div></div>\n" +
    "    <div class=\"progress-whole\"></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "  </div>\n" +
    "  <div class=\"overlay\">\n" +
    "    <div class=\"vertical-align centered\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3>Pour vous désaltérer, ce sera ... </h3>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"elements-quest\" id=\"quest_juice\">\n" +
    "\n" +
    "          <div class=\"col-lg-4 col-md-4\">\n" +
    "            <a ui-sref=\"questionnaire.cuisine\" ng-class=\"{selected: newuser.survey.quest_2.answ == 1}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_2.answ = 1\">Un jus de pamplemousse</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-4 col-md-4\">\n" +
    "            <a ui-sref=\"questionnaire.cuisine\" ng-class=\"{selected: newuser.survey.quest_2.answ == 2}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_2.answ = 2\">Un jus de pomme</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-4 col-md-4\">\n" +
    "            <a ui-sref=\"questionnaire.cuisine\" ng-class=\"{selected: newuser.survey.quest_2.answ == 3}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_2.answ = 3\">Un jus de fruits exotiques</a>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks\">\n" +
    "      <a ui-sref=\"questionnaire.coffee\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\n" +
    "    </div>\n" +
    "<!--     <div class=\"navlinks-right\">\n" +
    "      <a ui-sref=\"questionnaire.cuisine\"><i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "    </div> -->\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("questionnaire/parts/questionnaire.profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.profile.tpl.html",
    "");
}]);

angular.module("questionnaire/parts/questionnaire.starter.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.starter.tpl.html",
    "<div class=\"background-starter\">\n" +
    "  <div class=\"progressbar\">\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "    <div class=\"progress-whole\"></div>\n" +
    "    <div></div>\n" +
    "    <div></div>\n" +
    "  </div>\n" +
    "    <div class=\"overlay\">\n" +
    "        <div class=\"vertical-align centered\">\n" +
    "            <div class=\"row\">\n" +
    "                <h3>Quels plats vous font envie ?</h3>\n" +
    "                <p>(Choisissez TOUS les plats que vous appréciez, puis validez avec la flèche)</p>\n" +
    "            </div>\n" +
    "            <div class=\"row\" id=\"quest_starter\">\n" +
    "              <div class=\"col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2\">\n" +
    "                <h4>En entrée</h4>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.quest_4.answ_1 == true}\"\n" +
    "                        ng-click=\"newuser.survey.quest_4.answ_1 = !newuser.survey.quest_4.answ_1\">Assiette d'huîtres</button><br>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.quest_4.answ_2 == true}\"\n" +
    "                        ng-click=\"newuser.survey.quest_4.answ_2 = !newuser.survey.quest_4.answ_2\">Pain toasté et tapenade d'olives</button><br>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.quest_4.answ_3 == true}\"\n" +
    "                        ng-click=\"newuser.survey.quest_4.answ_3 = !newuser.survey.quest_4.answ_3\">Foie gras et pain d'épices</button><br>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"col-lg-4 col-md-4\">\n" +
    "                <h4>Au dessert</h4>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.quest_5.answ_1 == true}\"\n" +
    "                        ng-click=\"newuser.survey.quest_5.answ_1 = !newuser.survey.quest_5.answ_1\">Mille-feuille à la vanille</button><br>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.quest_5.answ_2 == true}\"\n" +
    "                        ng-click=\"newuser.survey.quest_5.answ_2 = !newuser.survey.quest_5.answ_2\">Ganache chocolat à la cannelle</button><br>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.quest_5.answ_3 == true}\"\n" +
    "                        ng-click=\"newuser.survey.quest_5.answ_3 = !newuser.survey.quest_5.answ_3\">Carpaccio de fruits & sorbet</button><br>\n" +
    "\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"navlinks\">\n" +
    "          <a ui-sref=\"questionnaire.cuisine\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\n" +
    "        </div>\n" +
    "        <div class=\"navlinks-right\">\n" +
    "          <a ui-sref=\"questionnaire.balance\"><i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "      var comments_bckg = new Image ();\n" +
    "    comments_bckg.src = \"assets/vinibar3.jpg\";\n" +
    "</script>");
}]);

angular.module("questionnaire/parts/questionnaire.winemap.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.winemap.tpl.html",
    "<div class=\"background-winemap\">\n" +
    "	  <div class=\"progressbar\">\n" +
    "	    <div></div>\n" +
    "	    <div></div>\n" +
    "	    <div></div>\n" +
    "	    <div></div>\n" +
    "	    <div></div>\n" +
    "	    <div class=\"progress-whole\"></div>\n" +
    "	  </div>\n" +
    "	<div class=\"overlay\">\n" +
    "		<div class=\"form-errors fader\" ng-show=\"showFormErrors\">\n" +
    "			<span ng-hide=\"form_name.$valid && form_user.$valid\" >Le(s) champ(s) suivant(s) sont requis:</span>\n" +
    "			<span ng-show=\"form_name.first_name.$invalid\">Prénom, </span>\n" +
    "			<span ng-show=\"form_name.last_name.$invalid\">Nom, </span>\n" +
    "			<span ng-show=\"form_user.password.$invalid\">Mot de passe, </span>\n" +
    "			<span ng-show=\"form_name.email.$invalid\">Email, </span>\n" +
    "		</div>\n" +
    "	    <div class=\"form-errors fader\" ng-show=\"showFormEmailError\">\n" +
    "	      Oops, votre adresse email ne semble pas valide ...\n" +
    "	    </div>\n" +
    "	    <div class=\"form-errors fader\" ng-show=\"invalidLogin\">\n" +
    "	      Oops, un compte est déjà associé à cet Email, mais avec un autre mot de passe. Une question ? Contactez <a href=\"mailto:charlotte@vinify.co\">charlotte@vinify.co</a>\n" +
    "	    </div>\n" +
    "		<div class=\"vertical-align-comments centered\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-lg-6 col-md-6 col-sm-6 hidden-xs elements-quest\" id=\"quest_winemap\">\n" +
    "					<h3>Ma région viticole préférée&nbsp;: <br>\n" +
    "					<span ng-hide=\"newuser.survey.quest_7.answ || region.hover\">(Cliquez sur la carte)</span>\n" +
    "					<span ng-show=\"!newuser.survey.quest_7.answ\">{{ region.hover }}</span><span class=\"selected-region\">{{ newuser.survey.quest_7.answ }}</span></h3>\n" +
    "						<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "							 viewBox=\"0 0 145.78 143.313\" enable-background=\"new 0 0 145.78 143.313\"\n" +
    "							 xml:space=\"preserve\">\n" +
    "						<g>\n" +
    "							<rect x=\"-23.446\" y=\"-24.177\" display=\"none\" fill=\"#1178AB\" stroke=\"#1178AB\" width=\"198.43\" height=\"198.43\"/>\n" +
    "							<path id=\"France\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"0.8\" stroke-linecap=\"round\" d=\"M33.962,126.788l6.375-19.486\n" +
    "								l1.51-0.016l-1.046-1.781l-1.184,2.295l1.989-14.789l6.072,10.613l-0.451-1.918l0.897,0.082l-7.901-12.486l2.441,1.279\n" +
    "								l-1.367-4.684l0.613,0.049l-1.709-2.617l1.15-1.807L40.96,80.95l-0.766,0.119l-0.079,0.623l-6.385-3.891l-0.089,0.453\n" +
    "								l-3.781-12.852l4.506,1.067l-9.003-1.407l1.078-0.264l-0.481-0.471l-0.142,0.402l-0.475-1.062l0.844-0.574l0.295,0.391l0.467-0.165\n" +
    "								l-0.941-1.127l1.203-0.526l-2.799-0.154l0.429-0.467L21.247,60.7l2.023,0.152l0.388-1.3l-0.209,0.602l-0.663-0.496l0.283-0.019\n" +
    "								l-1.921,0.587l-0.651-1.035l0.488,1.543l-0.671-0.491l-0.115,0.235l-0.224-0.387l-0.124,0.326l-0.776,0.055l0.032-0.192\n" +
    "								l-0.296,0.024l0.332,1.884l-0.525-4.528l-0.728,1.443l-1.601-0.577l0.729,0.099l-0.69-0.402l0.761-1.086l-1.334,1.23l-6.561-3.179\n" +
    "								l0.085,0.599l-1.788-0.893l0.307,0.8L7.02,55.507l0.292,0.854l-6.086-3.508l4.671-1.217l-1.612-2.171l-1.226,1.116l-0.056-1.193\n" +
    "								l-0.845-0.303l1.009-1.261L2.975,48.45l3.141,0.125l0.031,0.154l0.688-0.274l-1.353-0.313l0.51-0.61l-1.821,0.41l1.664-1.546\n" +
    "								l-5.383,1.231l0.306-3.149l1.731-0.364l0.043-0.728l0.613,0.062l-0.113-0.489l1.502-0.134l-0.109-0.283l2.39,0.109l-0.12-0.143\n" +
    "								l2.611-1.275l0.321,1.261l0.639-0.266l0.527,0.598l0.022-0.982l2.691,0.267l0.614-1.227l-0.354-0.25l1.127-1.227l0.689,0.624\n" +
    "								l2.286-1.055l-0.081,1.039l1.478-1.173l-0.363,1.989l0.829-1.12l4.07,5.22l2.349-1.934l-0.118-0.355l1.904-0.677l-0.206,1.076\n" +
    "								l0.91-0.229l0.403,1.023l0.233-0.55l0.271,0.437l0.03-0.422l0.397-0.017l0.021-0.489l1.822,1.923l-0.764-2.196l2.05-0.906\n" +
    "								l0.003,1.498l5.371-0.546l-1.845-6.492l-0.572,0.509l-0.124-3.614l0.478-0.003l-0.994-0.105l-0.779-2.164l-0.26,0.212l-2.084-6.615\n" +
    "								l7.654,1.611l0.525,4.687l18.559-2.132l-4.271-0.325l16.43-12.241l0.897,0.477L71.269,4.573l10.765-4.079l3.962,6.825l2.883-1.473\n" +
    "								l11.076,9.259l0.146-0.333l0.559,0.567l-0.836,1.877l0.506-0.006l-0.242,2.73l8.117-2.857l-0.162,0.906l-0.252-0.01l0.084,5.161\n" +
    "								l5.236,2.296l-0.252,0.455l17.193,7.944L130.248,33l1.734,0.488l0.16,1.115l13.117,2.759l-8.137,24.552l-0.574-0.113l0.189,0.487\n" +
    "								l-2.99,0.359l0.152-0.696l-3.48,1.96l1.854,0.268l-11.947,19.544l3.525-1.52l-0.564-1.814l6.15-1.277l-0.113,4.586l1.133,0.484\n" +
    "								l-0.041,1.078l0.473-0.246l-0.367,14.619l-2.934,0.398l10.072,20.822l-0.115-0.104l-0.914,0.492l-0.209-0.234l-9.137,7.545\n" +
    "								l1.08,0.092l-6.867,3.238l0.461-0.129l-2.707-0.682l0.57,0.473l-1.717,0.012l0.297-0.609l-5.047-1.592l-0.029-1.844l-3.668-0.26\n" +
    "								l-0.025-0.543l2.334-1.102l-2.324-1.117l0.469,1.674l-2.385,0.635l0.254,0.359l-1.859-3.105l1.279,3.059l-2.75-0.076l0.135-0.953\n" +
    "								l-6.953-1.857l1.449-0.412l-0.064-0.291l-4.186,2.594l2.471-1.762l-8.9,7.24l-0.055-0.662l-0.248,0.824l0.354,0.221l-0.781,1.504\n" +
    "								l0.092-0.469l-0.258,0.377l0.512,0.893l-0.443-0.131l0.193,3.566l-0.27-0.24l1.82,3.797l-6.086,0.816l0.154,0.693l-10.625-2.396\n" +
    "								l0.597-1.105l-0.606-0.404l0.121-0.25l-2.843-0.492l-0.216,0.693l-8.887-3.527l-0.192,1.287l0.186,0.043l0.139,0.818l-3.119,0.037\n" +
    "								l-0.036-0.281l-18.934-5.633l0.314-0.469l-0.603,0.076l-0.167,1.039l-1.41-0.682l0.757-2.807l-1.726-0.316l-0.353,0.553\n" +
    "								L33.962,126.788L33.962,126.788L33.962,126.788z M107.512,127.418l0.373,0.002l-0.01,0.084L107.512,127.418L107.512,127.418\n" +
    "								L107.512,127.418z M88.055,135.647l-0.039-0.666l0.17-0.049l0.025,0.699L88.055,135.647L88.055,135.647L88.055,135.647z\n" +
    "								 M39.99,88.956l-1.93-3.693l2.116,3.891L39.99,88.956L39.99,88.956L39.99,88.956z M40.758,85.788l0.344-0.117l-0.252,0.186\n" +
    "								L40.758,85.788L40.758,85.788L40.758,85.788z M39.199,83.561l-2.812-1.471l0.875-0.102l0.031,0.348l-0.318-0.107l-0.003,0.199\n" +
    "								l0.952-0.131l-0.13,0.225l1.896,0.85L39.199,83.561L39.199,83.561L39.199,83.561z M45.723,98.749l0.131-0.176L45.723,98.749\n" +
    "								L45.723,98.749L45.723,98.749z M32.772,65.548l0.317,0.369l-0.422-0.403L32.772,65.548L32.772,65.548z M22.103,60.11l-0.169,0.45\n" +
    "								l0.14-0.581L22.103,60.11L22.103,60.11L22.103,60.11z M22.614,60.048l0.032,0.135l-0.218,0.098l0.117-0.292L22.614,60.048\n" +
    "								L22.614,60.048z M8.975,40.853l0.237,0.2l-0.36-0.049L8.975,40.853L8.975,40.853z M18.728,58.271l-0.147,0.212l0.1-0.277\n" +
    "								L18.728,58.271L18.728,58.271z M20.393,38.985l-0.119,0.327l-0.143-0.102L20.393,38.985L20.393,38.985z\"/>\n" +
    "\n" +
    "								<path ng-class=\"{selectedregion:  newuser.survey.quest_7.answ == 'Loire'} \" ng-mouseenter=\"enter('Loire')\" ng-mouseleave=\"leave('Loire')\" ng-click=\"select('Loire')\"  id=\"Loire\" sodipodi:nodetypes=\"cssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" d=\"\n" +
    "								M30.544,65.399c0.295,0.146,0.627,0.626,0.854,0.853c0.364,0.611,0.62,1.265,0.768,1.962c0.52,0.349,0.917,0.804,1.194,1.365\n" +
    "								c1.316,1.316,6.134,0.007,7.335-1.194c0.278-0.278,0.392-0.697,0.512-0.938c0.184-0.366-0.1-0.912-0.17-1.194\n" +
    "								c0.009,0.036,6.101-0.125,6.909,0.683c1.373,1.378-0.05,2.12,2.388,2.729c1.665,0.416,2.886,2.828,4.947,1.279\n" +
    "								c0.27-0.202,0.481-0.396,0.683-0.597c0.274-0.274,0.121-0.697,0-0.938c-0.155-0.31-0.284-0.54-0.512-0.768\n" +
    "								c-0.287-0.287-0.258-0.588-0.171-0.938c0.066-0.263,3.268,2.23,3.583,2.389c0.322,0.161,0.689,0.169,1.023,0.085\n" +
    "								c0.678-0.169,2.178-0.013,2.389-0.853c0.112-0.452-0.127-0.501-0.512-0.598c-0.312-0.077-0.711-0.178-1.024-0.256\n" +
    "								c-0.368-0.092-0.347-0.618-0.426-0.938c0.37-0.484,0.796-0.911,1.279-1.28c0.224-0.224,0.664-0.272,0.938-0.341\n" +
    "								c0.486-0.122,0.905-0.017,1.279,0.171c0.379,0.189,0.484,0.231,0.597,0.682c0.07,0.28,0.27,0.651,0.342,0.938\n" +
    "								c-0.236,0.806-0.066,1.488,0.512,2.048c0.378,0.094,0.931-0.02,1.194-0.086c0.318-0.374,0.603-0.771,0.853-1.194\n" +
    "								c0.682-2.715,0.449-5.324,1.791-8.018c0.287-0.575-0.29-0.367-0.512-0.256c-0.371,0.186-0.4,0.32-0.512,0.768\n" +
    "								c-0.106,0.426-0.412,0.508-0.768,0.598c-0.442,0.11-0.889-0.061-1.109-0.171c-3.483-1.748-7.352-7.149-11.43-3.071\n" +
    "								c-0.843,0.843-1.351,2.194-1.876,3.241c-0.144,0.287,0.041,1.019,0.085,1.194c0.085,0.341,0.339,0.504,0.427,0.854\n" +
    "								c-0.184,0.909-0.695,1.08-1.535,0.512c-0.485-0.408-0.997-0.778-1.536-1.109c-1.438-0.717-2.943-0.183-4.35,0.171\n" +
    "								c-0.297,0.074-0.404,0.458-0.683,0.597c-0.409,0.205-0.447-0.34-0.512-0.597c-0.111-0.446-0.005-0.661,0.085-1.023\n" +
    "								c0.279-1.125,2.601-1.103,2.9-2.303c0.112-0.448-0.116-0.629-0.341-0.854c-0.234-0.234-0.67-0.359-0.938-0.427\n" +
    "								c-0.231-0.058-1.939,0.992-2.303,0.938c-0.061-0.009-2.468,0.345-2.389,0.427c0.341,0.352-2.363,1.63-0.783,1.306\n" +
    "								c0.867-0.177,1.626-0.6,2.403-0.794c0.409-0.103-0.071,1.486-0.17,1.535c-0.289,0.145-0.4,0.151-0.342,0.427\n" +
    "								c0.031,0.146-4.933,1.49-5.8,1.706c-1.187,0.298-1.85,2.253-2.729,2.474c-0.433,0.108-0.587,0.176-0.938,0\n" +
    "								c-0.532-0.307-1.015-0.676-1.45-1.108c-0.161-0.161-0.542-0.086-0.768-0.086\"/>\n" +
    "\n" +
    "								<path ng-class=\"{selectedregion:  newuser.survey.quest_7.answ == 'Languedoc Roussillon'} \" ng-mouseenter=\"enter('Languedoc Roussillon')\" ng-mouseleave=\"leave('Languedoc Roussillon')\" ng-click=\"select('Languedoc Roussillon')\" id=\"Languedoc\" sodipodi:nodetypes=\"cssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" d=\"\n" +
    "								M102.805,125.872c-0.221-0.425-0.382-0.871-0.482-1.338c0.318-0.232,0.622-0.482,0.912-0.75c0.375-0.096-0.021-0.387-0.107-0.43\n" +
    "								c-0.229-0.113,0.872-1.53,0.91-1.607c0.316-0.626,0.01-1.419-0.268-1.98c-1.931-3.861-28.059,4.396-25.872,13.068\n" +
    "								c0.187,0.735,0.731,1.496,1.18,2.09c1.591,2.138,4.501,2.579,5.249,5.57c-0.044-0.179,2.657-0.329,2.838-0.375\n" +
    "								c0.248-0.061,0.434,0.166,0.535,0.268c0.141,0.141,0.25,0.34,0.322,0.482c0.291,0.583,1.633,0.348,1.393,0.107\n" +
    "								c-0.238-0.268-0.435-0.562-0.59-0.885c-0.096-0.193-0.443-0.109-0.535-0.293c-0.23-0.547-0.32-1.118-0.268-1.715\n" +
    "								c-0.068-0.271-0.178-0.086-0.268-0.268c0.062-0.295,0.188-0.562,0.375-0.803c0.188-0.755-0.027-1.183-0.67-1.34\n" +
    "								c-0.295-0.074-0.377-0.184-0.322-0.51c0.354-0.231,0.556-0.553,0.604-0.963c0.021-0.043,0.625,0.229,0.521-0.041\n" +
    "								c-0.199-0.331-0.351-0.683-0.455-1.057c0.256-0.258,0.174-0.023,0.107,0.24c-0.09,0.363,0.273,0.221,0.334-0.027\n" +
    "								c0.064-0.254,0.066-0.748,0.148-0.91c0.098-0.195,0.213-0.16,0.268-0.375c0.078-0.311-0.125-0.219-0.322-0.268\n" +
    "								c-0.188-0.047-0.248-0.623-0.133-0.764c0.201-0.244,0.562-0.129,0.455,0.094c-0.158,0.326-0.307,0.512,0.014,0.496\n" +
    "								c0.379-0.02,0.918-1.508,1.164-1.754c0.393-0.393,1.151-1.025,1.621-1.26c0.176-0.088,0.506-0.197,0.684-0.24\n" +
    "								c0.254-0.064,0.328,0.162,0.549,0.107c0.225-0.057,2.448-2.061,2.449-2.062c0.051-0.201-0.184-0.246-0.107-0.402\n" +
    "								c0.078-0.152,0.4-0.1,0.523-0.16c0.162-0.082,0.441-0.309,0.549-0.416c0.146-0.145-0.002-0.428,0.133-0.494\n" +
    "								c0.182-0.092,0.326,0.021,0.443-0.094c0.162-0.164,0.176-0.424,0.361-0.482c0.716-0.229,1.334-0.584,2.062-0.764\n" +
    "								c0.259-0.064,0.886,1.75,1.043,1.928c0.322,0.362,1.919,0.259,2.385,0.375\"/>\n" +
    "\n" +
    "								<path ng-class=\"{selectedregion:  newuser.survey.quest_7.answ == 'Champagne'} \" ng-mouseenter=\"enter('Champagne')\" ng-mouseleave=\"leave('Champagne')\" ng-click=\"select('Champagne')\" id=\"Champagne\" sodipodi:nodetypes=\"csssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" d=\"\n" +
    "								M89.291,36.756c1.566-3.002,6.633-2.556,9.264-1.886c-0.264-0.065,0.611-4.597,0.721-5.048c0.6-2.409,6.677,3.741,7.156,4.382\n" +
    "								c0.538,0.716-0.073,2.187-0.611,2.718c-0.844,0.85-2.192,0.948-2.939,1.941c-2.105,2.823-3.621,2.671-6.6,4.16\n" +
    "								c-0.596,0.033-1.188-0.004-1.775-0.111c-0.061-0.015-0.088-0.628-0.111-0.721c-0.08-0.32,0.133-0.449,0.334-0.499\n" +
    "								c1.235-0.309,2.51-1.154,2.828-2.44c0.059-0.23,0.064-0.468,0-0.722c-0.272-1.091-1.009-1.79-1.775-2.552\n" +
    "								c-1.934-1.915-4.621,1.319-5.023,1.097c-0.242-0.134-0.641,0.446-0.689,0.336c-0.105-0.242-0.375-0.231-0.648-0.095\n" +
    "								C89.17,37.442,89.373,37.178,89.291,36.756C89.408,36.531,89.373,37.178,89.291,36.756z\"/>\n" +
    "\n" +
    "								<path ng-class=\"{selectedregion:  newuser.survey.quest_7.answ == 'Bourgogne'} \" ng-mouseenter=\"enter('Bourgogne')\" ng-mouseleave=\"leave('Bourgogne')\" ng-click=\"select('Bourgogne')\" id=\"Bourgogne_1_\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" d=\"M98.217,58.001c-0.09-0.18-0.16-0.354,0.156-0.274\n" +
    "								c0.191,0.048,0.27,0.076,0.432,0.157c0.397,0.199,0.441,0.739,0.941,0.862c0.456,0.114,1.488,0.116,1.646,0.745\n" +
    "								c0.043,0.169,0.09,0.274,0.039,0.471c-0.053,0.215-0.141,0.326-0.352,0.432c-1.043,0.521-2.25,1.044-3.453,0.746\n" +
    "								c-0.287-0.087-0.562-0.205-0.822-0.354c-0.123-0.123-0.148-0.176-0.039-0.393c0.278-0.567,1.127-0.77,1.373-1.255\n" +
    "								C98.274,58.769,98.301,58.389,98.217,58.001C98.127,57.821,98.26,58.091,98.217,58.001z M106.654,86.676\n" +
    "								c0-3.181,1.289-6.863,2.051-9.928c0.372-1.473,0.351-1.749-0.609-2.94c-0.23,0.242-0.508,0.409-0.832,0.499\n" +
    "								c-0.238-0.06-0.533-0.091-0.666-0.223c-0.168-0.168-0.205-0.268-0.277-0.554c-0.043-0.174-0.117-0.496,0.111-0.61\n" +
    "								c0.158-0.079,0.348-0.183,0.5-0.333c0.124-0.4,0.31-0.77,0.555-1.109c0.224-0.896,2.4-6.926,1.275-7.488\n" +
    "								c-0.295-0.147-0.283-0.101-0.443,0.222c-0.61,1.221-1.336,3.937-2.219,4.826c-0.479,0.475-1.588,0.842-1.887,1.442\n" +
    "								c-0.142,0.34-0.197,0.692-0.166,1.054c2.285-1.143,1.155,3.464,1.885,4.937c-0.033,0.389-0.069,0.776-0.109,1.164\n" +
    "								c0.057,0.227,0.221,0.334,0.277,0.555c0.214,0.861,0.467,2.885,0.055,3.717c-0.703,1.406-2.125,3.394-1.332,4.992\n" +
    "								c0.234,0.505,0.623,0.634,1.166,0.389c0.176-0.045,0.523-0.355,0.609-0.334\"/>\n" +
    "\n" +
    "								<path ng-class=\"{selectedregion:  newuser.survey.quest_7.answ == 'Provence'} \" ng-mouseenter=\"enter('Provence')\" ng-mouseleave=\"leave('Provence')\" ng-click=\"select('Provence')\" id=\"Provence\" sodipodi:nodetypes=\"cssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" d=\"\n" +
    "								M110.178,126.481c0.361,0.083,0.712,0.058,1.053-0.076c0.115-0.057,0.262-0.148,0.338-0.225c0.202-0.224,0.315-0.486,0.338-0.789\n" +
    "								c-0.016-0.152-0.092-0.15-0.244-0.113c-0.123,0.031-0.268,0.213-0.471,0.264c-0.152,0.037-0.295-0.227-0.338-0.311\n" +
    "								c-0.021-0.248-0.128-0.448-0.318-0.602c-0.166-0.082-0.373,0.057-0.545-0.066c-0.09-0.062-0.217-0.197-0.273-0.254\n" +
    "								c-0.249-0.249-0.117-1.196-0.555-1.625c-0.429-0.429-1.198-0.6-1.729-0.865c-0.805-0.396-2.924-0.385-1.129-2.18\n" +
    "								c0.221-0.169,0.459-0.307,0.715-0.414c0.285-0.071,1.265-0.062,1.541,0.074c3.58,1.811,8.338-0.799,10.902,0.527\n" +
    "								c0.148,0.072,0.17,0.207,0.264,0.301c0.115,0.304,0.153,0.617,0.113,0.939c-0.104,0.403-1.923,0.527-2.219,0.678\n" +
    "								c-0.142,0.136-0.292,0.261-0.451,0.375c1.039-0.779,5.64,0.302,7.445-0.602c0.293-0.146,1.485,0.815,1.842,0.902\n" +
    "								c2.083,0.521,4.904-0.809,6.729,1.016c0.146,0.316,0.108,0.605-0.111,0.865c-0.143,0.141-0.254-0.299-0.264-0.34\n" +
    "								c-0.027-0.105-0.242,0.205-0.264,0.227c-0.113,0.113-1.161,0.366-1.354,0.414c-0.041,0.01,0.018,0.344,0,0.412\n" +
    "								c-0.054,0.235-0.545,1.006-0.752,1.109c-0.233,0.136-0.484,0.218-0.752,0.244c-0.298-0.021-0.586-0.084-0.865-0.188\n" +
    "								c-0.059,0.377-0.149,0.747-0.271,1.109c-0.072,0.143-0.154-0.029-0.217,0.094c-0.062,0.127-0.291,0.174-0.311,0.281\n" +
    "								c-0.021,0.129-0.055,0.229-0.094,0.387c-0.025,0.102-0.393,0.109-0.488,0.168c-0.199,0.123-0.219,0.18-0.188,0.301\n" +
    "								c0.067,0.276,1.638-0.751,0.742,0.404c0,0.238,0,0.477,0,0.715c-0.2,0.176-0.4,0.351-0.602,0.525\n" +
    "								c-0.178-0.182-0.378-0.332-0.602-0.451c-0.234,0.136-0.447,0.299-0.639,0.49c-0.437,0.107-1.028,0.1-1.43,0.301\n" +
    "								c-0.107,0.279-0.145,0.567-0.111,0.863c-0.074,0.148-0.342,0-0.49-0.074c-0.113-0.057-0.162-0.273-0.188-0.377\n" +
    "								c-0.063-0.244-1.284-0.081-1.391-0.027c-0.113,0.057-0.125,0.26-0.15,0.367c-0.02,0.265-0.008,0.528,0.037,0.789\n" +
    "								c-0.318-0.012-0.635-0.043-0.949-0.094c0.559-0.173,0.65-0.396,0.273-0.668c-0.139-0.068-0.596,0.117-0.668,0.057\n" +
    "								c-0.104-0.086-0.078-0.172-0.254-0.217c-0.203-0.051-1.047-0.254-1.277-0.234c-0.174,0.014-0.307,0.055-0.246,0.178\n" +
    "								c0.211,0.127,0.361,0.303,0.451,0.527c-0.061,0.123-0.279-0.072-0.412-0.039c-0.008,0.002-0.176,0.363-0.189,0.377\n" +
    "								c-0.129,0.129-0.338-0.037-0.412-0.076c-0.137-0.066-0.215-0.176-0.301-0.262c-0.115-0.115-0.182-0.025-0.34-0.047\n" +
    "								c-0.02-0.004-0.041-0.219-0.008-0.246c0.115-0.096,0.721-0.217,0.441-0.291c-0.109-0.027-0.436-0.082-0.426-0.125\n" +
    "								c0.021-0.092-0.025-0.23-0.045-0.27c-0.035-0.07-0.379,0.051-0.432,0.01c-0.227-0.172-0.502-0.15-0.471-0.357\n" +
    "								c0.016-0.098-0.008-0.273-0.225-0.328c-0.322-0.102-0.623-0.064-0.902,0.111c-0.115-0.027-0.285-0.156-0.32-0.225\n" +
    "								c-0.07-0.141-0.059-0.211-0.17-0.32c-0.237-0.235-1.785,0.057-2.199-0.15c0.066,0.034,0.109-2.452-0.498-2.123\n" +
    "								c-0.248,0.063-0.477,0.17-0.686,0.318c-0.313,0.159-1.976,0.247-2.246-0.018c-0.107-0.109-0.24-0.361-0.348-0.414\n" +
    "								c-0.17-0.084,0.062-0.391,0.074-0.414C109.652,126.704,110.131,126.518,110.178,126.481\n" +
    "								C110.264,126.524,110.131,126.518,110.178,126.481z\"/>\n" +
    "\n" +
    "								<path ng-class=\"{selectedregion:  newuser.survey.quest_7.answ == 'Rhône'} \" ng-mouseenter=\"enter('Rhône')\" ng-mouseleave=\"leave('Rhône')\" ng-click=\"select('Rhône')\" id=\"Cote_du_Rhone\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" d=\"M108.615,102.473c0.123-0.156,0.572-0.395,0.758-0.488\n" +
    "								c0.205-0.102,0.66,0.033,0.812,0.109c1.112,0.552,0.233,1.415-0.596,1.627c-0.305,0.076-0.42,0.002-0.65-0.055\n" +
    "								c-0.191-0.049-0.328-0.273-0.434-0.379C108.285,103.067,108.482,102.637,108.615,102.473\n" +
    "								C108.738,102.317,108.482,102.637,108.615,102.473z M112.857,110.905c0.158-0.278,0.343-0.539,0.553-0.781\n" +
    "								c-0.053-0.211-0.246-0.178-0.477-0.293c-0.46-0.23-0.875-0.145-1.227-0.613c-0.297-0.396-0.183-0.955-0.076-1.379\n" +
    "								c0.169-0.688-0.33-1.503-0.613-2.07c-0.039-0.08,0.266-0.17,0.346-0.23c0.01-0.008-0.342-0.455-0.383-0.498\n" +
    "								c-1.979-1.948-4.188-1.912-5.941-1.035c-0.209,0.105-1.686,0.742-1.938,0.732c-0.107-0.002,0.635,0.668,0.748,0.725\n" +
    "								c1.003,0.496,0.007,2.321-0.268,2.875c-0.072,0.141-0.543,0.543-0.689,0.689c-0.119,0.119-0.434,0.848-0.461,0.959\n" +
    "								c-0.665,2.611,2.878,1.395,4.439,1.795c0.252,0.11,0.515,0.173,0.789,0.186c0.2,0.121,0.412,0.215,0.637,0.279\n" +
    "								c0.071-0.015,0.012-1.827,0.115-2.031c0.084-0.166,0.123-0.238,0.229-0.344c0.107-0.107,0.412-0.021,0.498,0\n" +
    "								C110.616,110.221,110.874,111.688,112.857,110.905C112.893,110.776,112.635,110.993,112.857,110.905z M106.848,94.719\n" +
    "								c-0.062,0.062-0.164,0.105-0.193,0.223c-0.318,1.205,0.013,2.262,0.305,3.467c0.025,0.1-0.08,0.205-0.055,0.305\n" +
    "								c0.006,0.023,0.098,0.301,0.109,0.305c-0.004,0.103,0.006,0.204,0.029,0.305c0.029,0.121,0.08,0.162,0.139,0.277\n" +
    "								c0.055,0.113-0.082,0.207-0.051,0.334c0.042,0.16,0.52,0.894,0.494,0.998c-0.129,0.503-1.427,2.263-0.971,2.719\n" +
    "								c0.251,0.251,0.398,0.421,0.721,0.582c0.088,0.043,0.279,0.088,0.416,0.055c0.129-0.031,0.262-0.033,0.359-0.082\n" +
    "								c0.08-0.041,0.236-0.084,0.277-0.168c0.348-0.67-0.412-1.401-0.277-1.969c0.047-0.186,0.754-0.651,0.916-0.693\n" +
    "								c1.121-0.274,0.305-1.292-0.223-2.33c-0.906-1.774-1.374-2.312-1.691-4.408C106.994,94.604,106.939,94.627,106.848,94.719z\"/>\n" +
    "\n" +
    "								<path ng-class=\"{selectedregion:  newuser.survey.quest_7.answ == 'Alsace'} \" ng-mouseenter=\"enter('Alsace')\" ng-mouseleave=\"leave('Alsace')\" ng-click=\"select('Alsace')\" id=\"Alsace\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" d=\"M139.102,44.28c-3.75,1.875-3.522,11.279-5.168,14.597\n" +
    "								c-0.458,0.166-0.924,0.306-1.396,0.419c-0.398,0.099-0.859-0.059-1.188-0.14c-0.223-0.056-0.408-0.398-0.49-0.559\n" +
    "								c-0.27-0.604-0.362-1.232-0.279-1.886c0.411-0.5,0.807-1.013,1.188-1.537c1.722-3.423,1.565-8.562,4.4-11.383\n" +
    "								c0.665-0.351,1.363-0.607,2.096-0.769c0.352-0.176,0.555-0.01,0.627,0.279c0.045,0.18,0.225,0.337,0.279,0.559\"/>\n" +
    "\n" +
    "								<path ng-class=\"{selectedregion:  newuser.survey.quest_7.answ == 'Bordeaux'} \" ng-mouseenter=\"enter('Bordeaux')\" ng-mouseleave=\"leave('Bordeaux')\" ng-click=\"select('Bordeaux')\" id=\"Bordeaux\" sodipodi:nodetypes=\"csssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" d=\"\n" +
    "								M41.233,93.713c0.3,1.355,2.026,5.771,1.411,7c-0.098,0.195-0.322,0.242-0.482,0.322c-0.277,0.139-0.202,0.291-0.107,0.482\n" +
    "								c0.097,0.191,0.24,0.426,0.321,0.588c0.301,0.603,0.354,2.05,0.536,2.787c0.438,1.755,3.534,3.393,4.874,4.391\n" +
    "								c0.358,0.269,0.66,1.159,0.857,1.555c0.448,0.896,2.646-0.047,3.106-0.16c0.163-0.041,0.104-0.389,0.268-0.43\n" +
    "								c0.146-0.037,0.628,0.234,0.696,0.268c0.904,0.45,2.077-3.84,2.625-4.393c0.053-0.053,0.658-0.088,0.696-0.107\n" +
    "								c0.23-0.115,0.154-0.4,0.106-0.588c-0.047-0.188-0.398-0.051-0.535-0.188c0.3-0.27,0.496-0.601,0.589-0.992\n" +
    "								c-0.171,0.184-0.377,0.318-0.616,0.402c-0.528-0.016-1.055-0.052-1.58-0.107c-0.188-0.021-0.004-0.119-0.109-0.225\n" +
    "								c-0.185-0.186-0.318-0.152-0.635-0.053c-0.428,0.137-0.858,0.265-1.291,0.385c-0.734-1.552,1.479-5.927-0.535-6.938\n" +
    "								c-1.593-0.788-3.795-0.758-5.571-1.66c-0.26-0.129-0.394-0.279-0.241,0.027c0.56,1.11-0.191,4.251,1.187,4.943\n" +
    "								c0.333,0.16,0.679,0.288,1.036,0.383c0.192,0.096,0.242,0.295,0.34,0.445c0.154,0.241-0.837-0.271-0.875-0.281\n" +
    "								c-0.217-0.055,0.268,0.373,0.321,0.59c-0.03,0.469,0.005,0.933,0.107,1.393c-0.079,0.316-0.299-0.553-0.307-0.584\n" +
    "								c-0.057-0.227-0.01-0.65-0.051-0.814c-0.203-0.811-2.188-5.429-2.768-6.008c-0.279-0.246-0.559-0.492-0.839-0.736\n" +
    "								c-0.163-0.162-0.114-0.324-0.253-0.463c-0.289-0.274-0.625-0.468-1.006-0.58C42.342,94.284,42.11,94.02,42,93.913\n" +
    "								c-0.05-0.343-0.118-0.681-0.205-1.016c-0.113,0.09-0.298,0.25-0.385,0.443\"/>\n" +
    "						</g>\n" +
    "						</svg>\n" +
    "				</div>\n" +
    "				<div class=\"col-lg-6 col-md-6 col-sm-6 elements-quest\">\n" +
    "					<div class=\"row\">\n" +
    "						<form class=\"col-lg-12 col-md-12\" role=\"form\" name=\"form_tastes\" class=\"form-gouts\">\n" +
    "							<h3>Mes goûts</h3>\n" +
    "							<div id=\"region\">\n" +
    "								<label class=\"visible-xs\">\n" +
    "									<select name=\"region\" class=\"form-control\" ng-model=\"newuser.survey.region\" ng-options=\"region as region for region in regions | orderBy: 'toString()'\">\n" +
    "									<option value=\"\">Ma région viticole préférée ... &nbsp;&nbsp;</option>\n" +
    "									</select>\n" +
    "								</label>\n" +
    "							</div>\n" +
    "							<label for=\"comments\" class=\"sr-only\">Un vin qui m'a marqué ?</label>\n" +
    "							<textarea name=\"textarea\" type=\"text\" id=\"comments\" rows=\"4\" class=\"form-control\" ng-model=\"newuser.survey.quest_8.answ\" placeholder=\"Un vin qui vous a marqué, vos cépages préférés, une expérience dans le vin que vous souhaitez partager ...\"></textarea>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "<!-- 					<div class=\"row\">\n" +
    "						<form class=\"col-lg-12 col-md-12\" role=\"form\" name=\"form_price\">\n" +
    "							<h3>Ma gamme de vin habituelle :</h3>\n" +
    "							<div class=\"col-lg-3 col-md-3\">\n" +
    "								<button ng-class=\"{selected: newuser.survey.quest_9.answ == 1}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_9.answ = 1 \">5 - 10 €</button>\n" +
    "							</div>\n" +
    "							<div class=\"col-lg-3 col-md-3\">\n" +
    "								<button ng-class=\"{selected: newuser.survey.quest_9.answ == 2}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_9.answ = 2\">10 - 15 €</button>\n" +
    "							</div>\n" +
    "							<div class=\"col-lg-3 col-md-3\">\n" +
    "								<button ng-class=\"{selected: newuser.survey.quest_9.answ == 3}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_9.answ = 3\">15€ - 20 €</button>\n" +
    "							</div>\n" +
    "							<div class=\"col-lg-3 col-md-3\">\n" +
    "								<button ng-class=\"{selected: newuser.survey.quest_9.answ == 4}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.quest_9.answ = 4\">20 € & +</button>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div> -->\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "					            <form name=\"form_name\" role=\"form\" class=\"form-inline\">\n" +
    "						              <h3>Mon compte Vinify</h3>\n" +
    "						              <div class=\"form-group\">\n" +
    "						                <label class=\"sr-only\" for=\"first_name\">Prénom</label>\n" +
    "						                <input type=\"text\"\n" +
    "						                    placeholder=\"Prénom\"\n" +
    "						                    name=\"first_name\"\n" +
    "						                    ng-model=\"newuser.first_name\"\n" +
    "						                    required\n" +
    "						                    class=\"form-control\"\n" +
    "						                    id=\"first_name\" required/>\n" +
    "						              </div>\n" +
    "						              <div class=\"form-group\">\n" +
    "						                <label class=\"sr-only\" for=\"last_name\">Nom</label>\n" +
    "						                <input type=\"text\"\n" +
    "						                    placeholder=\"Nom\"\n" +
    "						                    name=\"last_name\"\n" +
    "						                    ng-model=\"newuser.last_name\"\n" +
    "						                    required\n" +
    "						                    class=\"form-control\"\n" +
    "						                    id=\"last_name\" required/>\n" +
    "								</div>\n" +
    "				            		</form>\n" +
    "					            <form   role=\"form\" name=\"form_user\" class=\"form-inline\">\n" +
    "					              <div class=\"form-group\">\n" +
    "					                <label class=\"sr-only\" for=\"email\" name=\"email\">Email</label>\n" +
    "					                <input type=\"email\"\n" +
    "					                    name=\"email\"\n" +
    "					                    ng-model=\"newuser.email\"\n" +
    "					                    placeholder=\"Email\"\n" +
    "					                    required\n" +
    "					                    class=\"form-control\"\n" +
    "					                    id=\"email\" required/>\n" +
    "					              </div>\n" +
    "					              <div class=\"form-group\">\n" +
    "					                <label class=\"sr-only\" for=\"password\">Mot de Passe</label>\n" +
    "					                <input type=\"password\"\n" +
    "					                    tooltip=\"Min. 5 charactères\"  tooltip-trigger=\"focus\" tooltip-placement=\"bottom\"\n" +
    "					                    placeholder=\"Password\"\n" +
    "					                    name=\"password\"\n" +
    "					                    ng-model=\"newuser.password\"\n" +
    "					                    required\n" +
    "					                    class=\"form-control\"\n" +
    "					                    ng-minlength=\"5\"\n" +
    "					                    id=\"password\" required/>\n" +
    "					              </div>\n" +
    "					            </form>\n" +
    "				            </div>\n" +
    "			            </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "					<button class=\"btn button-createuser\" ng-click=\"createUser(form_name, form_user, form_tastes)\">Créer mon compte</button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	    <div class=\"navlinks\">\n" +
    "	      <a ui-sref=\"questionnaire.balance\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("questionnaire/questionnaire.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/questionnaire.tpl.html",
    "<div class=\"slide-container\">\n" +
    "  <toaster-container toaster-options=\"{'time-out': 4000, 'position-class': 'toast-top-right'}\"></toaster-container>\n" +
    "  <div ui-view class=\"questionnaire my-slide-animation\" autoscroll=\"false\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("remerciement/remerciement.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("remerciement/remerciement.tpl.html",
    "<div class=\"remerciement-container\">\n" +
    "  <div class=\"vertical-align centered\">\n" +
    "      <div class=\"container row-fluid\">\n" +
    "        <h2>Bienvenue dans l'univers Vinify</h2>\n" +
    "        <p>Merci d'avoir créé votre profil de goûts, nous préparons votre sélection personnalisée !</p>\n" +
    "<!--         <h2>Merci pour votre commande</h2>\n" +
    "        <p>Nous préparons votre sélection personnalisée.</p>\n" +
    "        <p>Vous aller recevoir un email contenant votre facture et votre numéro de commande.</p> -->\n" +
    "        <div class=\"remerciement\">\n" +
    "          <img src=\"assets/vinifytailleur.png\" style=\"width:300px;\">\n" +
    "        <!-- Col -->\n" +
    "        </div>\n" +
    "        <p>A très vite pour la suite de l'aventure Vinify !</p>\n" +
    "      <!-- ROW -->\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("remerciement_mobile/remerciement_mobile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("remerciement_mobile/remerciement_mobile.tpl.html",
    "<div class=\"remerciement-container\">\n" +
    "  <div class=\"vertical-align centered\">\n" +
    "      <div class=\"container row-fluid\">\n" +
    "        <h2>Merci pour votre commande</h2>\n" +
    "        <p>Nous préparons votre sélection personnalisée.</p>\n" +
    "        <p>Vous allez recevoir un email contenant votre facture et votre numéro de commande.</p>\n" +
    "        <div class=\"remerciement\">\n" +
    "          <img src=\"assets/vinifytailleur.png\" style=\"width:300px;\">\n" +
    "        <!-- Col -->\n" +
    "        </div>\n" +
    "        <p>A très vite pour la suite de l'aventure Vinify !</p>\n" +
    "      <!-- ROW -->\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("remerciement_order/remerciement_order.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("remerciement_order/remerciement_order.tpl.html",
    "<div class=\"remerciement-container\">\n" +
    "  <div class=\"vertical-align centered\">\n" +
    "      <div class=\"container row-fluid\">\n" +
    "        <h2>Merci pour votre commande</h2>\n" +
    "        <p>Nous préparons votre sélection personnalisée.</p>\n" +
    "        <p>Vous allez recevoir un email contenant votre facture et votre numéro de commande.</p>\n" +
    "        <div class=\"remerciement\">\n" +
    "          <img src=\"assets/vinifytailleur.png\" style=\"width:300px;\">\n" +
    "        <!-- Col -->\n" +
    "        </div>\n" +
    "        <p>A très vite pour la suite de l'aventure Vinify !</p>\n" +
    "      <!-- ROW -->\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("welcome/welcome.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("welcome/welcome.tpl.html",
    "\n" +
    "<nav class=\"navbar\" role=\"navigation\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			 <a href=\"\"><img alt=\"\" src=\"assets/logo.png\" style=\"height:45px\"/></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</nav>\n" +
    "\n" +
    "<div id=\"welcome\">\n" +
    "	<div class=\"container-welcome\">\n" +
    "		<div class=\"centered\">\n" +
    "			<h3>Bienvenue dans l'aventure Vinify</h3>\n" +
    "		</div>\n" +
    "		<div class=\"centered\">\n" +
    "			<img src=\"assets/vinibar-showcase-half.jpg\" alt=\"vinibar\" class=\"img img-responsive\">\n" +
    "			<p>Ces quelques questions permettront à notre oenologue de sélectionner <span class=\"highlight\">spécialement pour vous 6 bouteilles</span> parmi notre gamme de plus de 100 références.</p>\n" +
    "			<div ui-sref=\"questionnaire.coffee\" class=\"button btn-cta\">Démarrer</div>\n" +
    "			<p>En continuant, je certifie avoir plus de 18 ans et j'accepte les <a href=\"https://vinify.co/docs/cgv.pdf\">CGV</a> de Vinify</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
