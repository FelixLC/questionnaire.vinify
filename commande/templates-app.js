angular.module('templates-app', ['commander/commander.tpl.html', 'mrelay/mrelay.tpl.html', 'offrir/offrir.tpl.html', 'order/order.tpl.html', 'order/parts/order.confirmation.tpl.html', 'order/parts/order.delivery.tpl.html', 'order/parts/order.userinfos.tpl.html', 'paiement/paiement.tpl.html', 'paiement/parts/paiement.confirmation.tpl.html', 'paiement/parts/paiement.login.tpl.html', 'questionnaire/parts/questionnaire.balance.tpl.html', 'questionnaire/parts/questionnaire.coffee.tpl.html', 'questionnaire/parts/questionnaire.comments.tpl.html', 'questionnaire/parts/questionnaire.cuisine.tpl.html', 'questionnaire/parts/questionnaire.desert.tpl.html', 'questionnaire/parts/questionnaire.discovery.comments.tpl.html', 'questionnaire/parts/questionnaire.juice.tpl.html', 'questionnaire/parts/questionnaire.profile.tpl.html', 'questionnaire/parts/questionnaire.starter.tpl.html', 'questionnaire/questionnaire.tpl.html', 'remerciement/remerciement.tpl.html', 'remerciement_order/remerciement_order.tpl.html']);

angular.module("commander/commander.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("commander/commander.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "        <form novalidate name=\"form_commander\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"first_name\">Prénom</label>\n" +
    "            <input type=\"text\"\n" +
    "                placeholder=\"John\"\n" +
    "                name=\"prenom\"\n" +
    "                ng-model=\"user.first_name\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"first_name\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"last_name\">Nom</label>\n" +
    "            <input type=\"text\"\n" +
    "                placeholder=\"Doe\"\n" +
    "                name=\"nom\"\n" +
    "                ng-model=\"user.last_name\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"last_name\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"email\" name=\"email\">Email</label>\n" +
    "            <input type=\"email\"\n" +
    "                name=\"email\"\n" +
    "                ng-model=\"user.email\"\n" +
    "                placeholder=\"john@vinify.co\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"email\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"phone\">Téléphone</label>\n" +
    "            <input type=\"tel\"\n" +
    "                placeholder=\"+33 6 XX XX XX XX\"\n" +
    "                name=\"tel\"\n" +
    "                ng-model=\"user.phone\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"phone\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"birthday\">Date de Naissance</label>\n" +
    "            <input type=\"date\"\n" +
    "                ng-model=\"user.birthday\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"birthday\"/>\n" +
    "          </div>\n" +
    "\n" +
    "                <!-- ADRESSE AUTOCOMPLETE -->\n" +
    "         <!--    <label>Adresse de Facturation</label>\n" +
    "              <div class=\"adresse\">\n" +
    "               <input type=\"text\"\n" +
    "                  id=\"adresse\"\n" +
    "                  ng-autocomplete\n" +
    "                  ng-model=\"user.billing_address\"\n" +
    "                  options = {\n" +
    "                    country: 'fr'\n" +
    "                  } />\n" +
    "              </div> -->\n" +
    "          <div class=\"form-group\">\n" +
    "              <label for=\"billing_address.company\">Adresse de Facturation</label>\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.billing_address.company\"\n" +
    "                  placeholder=\"Société\"\n" +
    "                  class=\"form-control\"\n" +
    "                  id=\"billing_address.company\"/>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.billing_address.street\"\n" +
    "                  placeholder=\"Rue\"\n" +
    "                  class=\"form-control\" />\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.billing_address.city\"\n" +
    "                  placeholder=\"Ville\"\n" +
    "                  class=\"form-control\" />\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.billing_address.zipcode\"\n" +
    "                  placeholder=\"Code Postal\"\n" +
    "                  class=\"form-control\" />\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.billing_address.country\"\n" +
    "                  placeholder=\"Pays\"\n" +
    "                  class=\"form-control\" />\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "           <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\" ng-model=\"identical\"> Adresse de Livraison identique\n" +
    "            </label>\n" +
    "          </div>\n" +
    "\n" +
    "          <div ng-hide=\"identical\" class=\"fade\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <label for=\"delivery_address.company\">Adresse de Livraison</label>\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.delivery_address.company\"\n" +
    "                  placeholder=\"Société\"\n" +
    "                  class=\"form-control\"\n" +
    "                  id=\"delivery_address.company\"/>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\"\n" +
    "                    ng-model=\"user.delivery_address.street\"\n" +
    "                    placeholder=\"Rue\"\n" +
    "                    class=\"form-control\" />\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\"\n" +
    "                    ng-model=\"user.delivery_address.city\"\n" +
    "                    placeholder=\"Ville\"\n" +
    "                    class=\"form-control\" />\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\"\n" +
    "                    ng-model=\"user.delivery_address.zipcode\"\n" +
    "                    placeholder=\"Code Postal\"\n" +
    "                    class=\"form-control\" />\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\"\n" +
    "                    ng-model=\"user.delivery_address.country\"\n" +
    "                    placeholder=\"Pays\"\n" +
    "                    class=\"form-control\" />\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <pre>{{ user | json }}</pre>\n" +
    "\n" +
    "          <!-- <button type=\"button\" class=\"btn btn-primary\"  ng-disabled=\"form_commander.$invalid\" ng-click=\"Send(user)\">Valider !</button> -->\n" +
    "          <a class=\"btn btn-primary\" href=\"#/questionnaire\">Valider</a>\n" +
    "\n" +
    "        </form>\n" +
    "      <!-- Col -->\n" +
    "      </div>\n" +
    "    <!-- ROW -->\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("mrelay/mrelay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("mrelay/mrelay.tpl.html",
    "<nav class=\"navbar\" role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "       <a href=\"\"><img alt=\"\" src=\"assets/LogoVinifycoBlanc.png\" style=\"height:45px\"/></a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li><a href=\"\"><img alt=\"\" src=\"assets/dolly.png\" style=\"height:45px\"/></a></li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "  </div>\n" +
    "</nav>\n" +
    "<div class=\"container\" id=\"mondialrelay\">\n" +
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
    "         <p>Vous ne trouvez pas de point relais qui vous convient ? Cliquez sur changer la livraison</p>\n" +
    "        <button class=\"btn\" ng-click=\"changeDelivery()\" id=\"change_delivery\">Changer la livraison</button>\n" +
    "      </div>\n" +
    "</div> <!-- container delivery -->");
}]);

angular.module("offrir/offrir.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("offrir/offrir.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "        <form novalidate name=\"form_commander\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"first_name\">Prénom</label>\n" +
    "            <input type=\"text\"\n" +
    "                placeholder=\"John\"\n" +
    "                name=\"prenom\"\n" +
    "                ng-model=\"user.first_name\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"first_name\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"last_name\">Nom</label>\n" +
    "            <input type=\"text\"\n" +
    "                placeholder=\"Doe\"\n" +
    "                name=\"nom\"\n" +
    "                ng-model=\"user.last_name\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"last_name\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"email\" name=\"email\">Email</label>\n" +
    "            <input type=\"email\"\n" +
    "                name=\"email\"\n" +
    "                ng-model=\"user.email\"\n" +
    "                placeholder=\"john@vinify.co\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"email\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"phone\">Téléphone</label>\n" +
    "            <input type=\"tel\"\n" +
    "                placeholder=\"+33 6 XX XX XX XX\"\n" +
    "                name=\"tel\"\n" +
    "                ng-model=\"user.phone\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"phone\"/>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <label for=\"birthday\">Date de Naissance</label>\n" +
    "            <input type=\"date\"\n" +
    "                ng-model=\"user.birthday\"\n" +
    "                required\n" +
    "                class=\"form-control\"\n" +
    "                id=\"birthday\"/>\n" +
    "          </div>\n" +
    "\n" +
    "                <!-- ADRESSE AUTOCOMPLETE -->\n" +
    "         <!--    <label>Adresse de Facturation</label>\n" +
    "              <div class=\"adresse\">\n" +
    "               <input type=\"text\"\n" +
    "                  id=\"adresse\"\n" +
    "                  ng-autocomplete\n" +
    "                  ng-model=\"user.billing_address\"\n" +
    "                  options = {\n" +
    "                    country: 'fr'\n" +
    "                  } />\n" +
    "              </div> -->\n" +
    "          <div class=\"form-group\">\n" +
    "              <label for=\"delivery_address.company\">Adresse de Facturation</label>\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.delivery_address.company\"\n" +
    "                  placeholder=\"Société\"\n" +
    "                  class=\"form-control\"\n" +
    "                  id=\"delivery_address.company\"/>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.delivery_address.street\"\n" +
    "                  placeholder=\"Rue\"\n" +
    "                  class=\"form-control\" />\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.delivery_address.city\"\n" +
    "                  placeholder=\"Ville\"\n" +
    "                  class=\"form-control\" />\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.delivery_address.zipcode\"\n" +
    "                  placeholder=\"Code Postal\"\n" +
    "                  class=\"form-control\" />\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "              <input type=\"text\"\n" +
    "                  ng-model=\"user.delivery_address.country\"\n" +
    "                  placeholder=\"Pays\"\n" +
    "                  class=\"form-control\" />\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <h3>Si vous voulez glisser un mot dans le Vinibar :</h3>\n" +
    "            <textarea class=\"form-control\" rows=\"3\" ng-model=\"questionnaire.infos\" placeholder=\"Joyeux Anniversaire Michael !\"></textarea>\n" +
    "          </div>\n" +
    "\n" +
    "          <pre>{{ user | json }}</pre>\n" +
    "\n" +
    "          <!-- <button type=\"button\" class=\"btn btn-primary\"  ng-disabled=\"form_commander.$invalid\" ng-click=\"Send(user)\">Valider !</button> -->\n" +
    "          <a class=\"btn btn-primary\" href=\"#/paiement\">Valider</a>\n" +
    "\n" +
    "        </form>\n" +
    "      <!-- Col -->\n" +
    "      </div>\n" +
    "    <!-- ROW -->\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("order/order.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/order.tpl.html",
    "<div class=\"background-order\">\n" +
    "    <nav class=\"navbar\" role=\"navigation\">\n" +
    "      <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "           <a href=\"\"><img alt=\"\" src=\"assets/LogoVinifycoBlanc.png\" style=\"height:45px\"/></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "          <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li><a href=\"\"><img alt=\"\" src=\"assets/oclipboard.png\" class=\"opacity-link\" style=\"height:45px\"/></a></li>\n" +
    "            <li ng-show=\"state == 'order.userinfos'\"><a href=\"\"><img alt=\"\" src=\"assets/dolly.png\" style=\"height:45px\"/></a></li>\n" +
    "            <li ng-show=\"!(state == 'order.userinfos')\"><a href=\"\"><img alt=\"\" class=\"opacity-link\" src=\"assets/odolly.png\" style=\"height:45px\"/></a></li>\n" +
    "            <li ng-show=\"state == 'order.confirmation'\"><a href=\"\"><img alt=\"\" src=\"assets/creditcard.png\" style=\"height:45px\"/></a></li>\n" +
    "            <li ng-show=\"!(state == 'order.confirmation')\"><a href=\"\"><img alt=\"\" class=\"opacity-link\" src=\"assets/ocreditcard.png\" style=\"height:45px\"/></a></li>\n" +
    "          </ul>\n" +
    "        </div><!-- /.navbar-collapse -->\n" +
    "      </div>\n" +
    "    </nav>\n" +
    "\n" +
    "    <div class=\"main-container page-wrap\" ui-view autoscroll=\"false\"></div>\n" +
    "\n" +
    "  <footer class=\"site-footer\">\n" +
    "        <p>\n" +
    "          Une question ? Contactez <a href=\"mailto:charlotte@vinify.co\">charlotte@vinify.co</a>.\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          Copyright &copy; <b>Vinify</b> 2014 &middot; L'abus d'alcool est dangereux pour la santé, à consommer avec modération.\n" +
    "        </p>\n" +
    "  </footer>\n" +
    "</div>");
}]);

angular.module("order/parts/order.confirmation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/parts/order.confirmation.tpl.html",
    "      <div class=\"col-lg-12 col-md-12 col-sm-12 bouchons\">\n" +
    "        <div class=\"order-button-container\">\n" +
    "          <button stripe-checkout class=\"btn btn-order\">Commander mon Vinibar !</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "<div class=\"container container-delivery-confirmation\">\n" +
    "  <h3 class=\"confirmation-first-title\">Merci de vérifier vos informations</h3>\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"col-lg-6 col-md-6 col-sm-12 bill\">\n" +
    "  <!--           <ul>\n" +
    "              <li><h3>Vinibar - 99€</h3></li>\n" +
    "              <li><h3>{{delivery_mode}} - {{delivery_price}}€</h3></li>\n" +
    "              <li><h3>Total - 109,90</h3></li>\n" +
    "            </ul> -->\n" +
    "                <h4 class=\"confirmation-first-title\">{{currentClient.userinfos.first_name}} {{currentClient.userinfos.last_name}}</h4>\n" +
    "                <h4>{{currentClient.email}}</h4>\n" +
    "                <h4>{{currentClient.userinfos.delivery_address.street}}<br>\n" +
    "                {{currentClient.userinfos.delivery_address.zipcode}} {{currentClient.userinfos.delivery_address.city}}</h4>\n" +
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

angular.module("order/parts/order.userinfos.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/parts/order.userinfos.tpl.html",
    "<div class=\"container container-delivery\">\n" +
    "    <div class=\"bg-danger fader\" ng-show=\"formInvalid\"><p>Oops, un ou plusieurs champs sont incomplets ou erronés.</p></div>\n" +
    "    <div class=\"bg-danger fader\" ng-show=\"couponError\"><p>{{couponError}}</p></div>\n" +
    "    <div class=\"row\">\n" +
    "        <h3 class=\"container-title\">Livraison & Facturation</h3>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <form novalidate name=\"form_commander\">\n" +
    "            <div class=\"col-lg-3 col-md-3 col-sm-4\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"first_name\">Prénom *</label>\n" +
    "                    <input type=\"text\"\n" +
    "                        placeholder=\"John\"\n" +
    "                        name=\"first_name\"\n" +
    "                        ng-model=\"currentClient.userinfos.first_name\"\n" +
    "                        required\n" +
    "                        class=\"form-control\"\n" +
    "                        id=\"first_name\"/>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"last_name\">Nom *</label>\n" +
    "                    <input type=\"text\"\n" +
    "                        placeholder=\"Snow\"\n" +
    "                        name=\"last_name\"\n" +
    "                        ng-model=\"currentClient.userinfos.last_name\"\n" +
    "                        required\n" +
    "                        class=\"form-control\"\n" +
    "                        id=\"last_name\"/>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"phone\">Téléphone *</label>\n" +
    "                    <input type=\"tel\"\n" +
    "                        placeholder=\"+33 6 XX XX XX XX\"\n" +
    "                        name=\"phone\"\n" +
    "                        ng-model=\"currentClient.userinfos.phone\"\n" +
    "                        required\n" +
    "                        class=\"form-control\"\n" +
    "                        id=\"phone\"/>\n" +
    "                </div>\n" +
    "\n" +
    "                <label for=\"birthday\">Date de Naissance*</label>\n" +
    "\n" +
    "                  <div class=\"birthdate\">\n" +
    "                    <div class=\"\">\n" +
    "                      <select class=\"form-control col-lg-4 col-md-4 col-sm-4 col-xs-4\" ng-model=\"b.birthday\" name=\"birthday\">\n" +
    "                        <option value=\"\">JJ</option>\n" +
    "                        <option value=\"1\">1</option>\n" +
    "                        <option value=\"2\">2</option>\n" +
    "                        <option value=\"3\">3</option>\n" +
    "                        <option value=\"4\">4</option>\n" +
    "                        <option value=\"5\">5</option>\n" +
    "                        <option value=\"6\">6</option>\n" +
    "                        <option value=\"7\">7</option>\n" +
    "                        <option value=\"8\">8</option>\n" +
    "                        <option value=\"9\">9</option>\n" +
    "                        <option value=\"10\">10</option>\n" +
    "                        <option value=\"11\">11</option>\n" +
    "                        <option value=\"12\">12</option>\n" +
    "                        <option value=\"13\">13</option>\n" +
    "                        <option value=\"14\">14</option>\n" +
    "                        <option value=\"15\">15</option>\n" +
    "                        <option value=\"16\">16</option>\n" +
    "                        <option value=\"17\">17</option>\n" +
    "                        <option value=\"18\">18</option>\n" +
    "                        <option value=\"19\">19</option>\n" +
    "                        <option value=\"20\">20</option>\n" +
    "                        <option value=\"21\">21</option>\n" +
    "                        <option value=\"22\">22</option>\n" +
    "                        <option value=\"23\">23</option>\n" +
    "                        <option value=\"24\">24</option>\n" +
    "                        <option value=\"25\">25</option>\n" +
    "                        <option value=\"26\">26</option>\n" +
    "                        <option value=\"27\">27</option>\n" +
    "                        <option value=\"28\">28</option>\n" +
    "                        <option value=\"29\">29</option>\n" +
    "                        <option value=\"30\">30</option>\n" +
    "                        <option value=\"31\">31</option>\n" +
    "                      </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"\">\n" +
    "                      <select class=\"form-control col-lg-4 col-md-4 col-sm-4 col-xs-4\" ng-model=\"b.birthmonth\" name=\"birthmonth\">\n" +
    "                        <option value=\"\">MM</option>\n" +
    "                        <option value=\"1\">Janvier</option>\n" +
    "                        <option value=\"2\">Février</option>\n" +
    "                        <option value=\"3\">Mars</option>\n" +
    "                        <option value=\"4\">Avril</option>\n" +
    "                        <option value=\"5\">Mai</option>\n" +
    "                        <option value=\"6\">Juin</option>\n" +
    "                        <option value=\"7\">Juillet</option>\n" +
    "                        <option value=\"8\">Aout</option>\n" +
    "                        <option value=\"9\">Septembre</option>\n" +
    "                        <option value=\"10\">Octobre</option>\n" +
    "                        <option value=\"11\">Novembre</option>\n" +
    "                        <option value=\"12\">Décembre</option>\n" +
    "                      </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"\">\n" +
    "                      <select class=\"form-control col-lg-4 col-md-4 col-sm-4 col-xs-4\" ng-model=\"b.birthyear\" name=\"birthmonth\">\n" +
    "                        <option value=\"\">AAAA</option>\n" +
    "                        <option value=\"1920\">1920</option>\n" +
    "                        <option value=\"1921\">1921</option>\n" +
    "                        <option value=\"1922\">1922</option>\n" +
    "                        <option value=\"1923\">1923</option>\n" +
    "                        <option value=\"1924\">1924</option>\n" +
    "                        <option value=\"1925\">1925</option>\n" +
    "                        <option value=\"1926\">1926</option>\n" +
    "                        <option value=\"1927\">1927</option>\n" +
    "                        <option value=\"1928\">1928</option>\n" +
    "                        <option value=\"1929\">1929</option>\n" +
    "                        <option value=\"1930\">1930</option>\n" +
    "                        <option value=\"1931\">1931</option>\n" +
    "                        <option value=\"1932\">1932</option>\n" +
    "                        <option value=\"1933\">1933</option>\n" +
    "                        <option value=\"1934\">1934</option>\n" +
    "                        <option value=\"1935\">1935</option>\n" +
    "                        <option value=\"1936\">1936</option>\n" +
    "                        <option value=\"1937\">1937</option>\n" +
    "                        <option value=\"1938\">1938</option>\n" +
    "                        <option value=\"1939\">1939</option>\n" +
    "                        <option value=\"1940\">1940</option>\n" +
    "                        <option value=\"1941\">1941</option>\n" +
    "                        <option value=\"1942\">1942</option>\n" +
    "                        <option value=\"1943\">1943</option>\n" +
    "                        <option value=\"1944\">1944</option>\n" +
    "                        <option value=\"1945\">1945</option>\n" +
    "                        <option value=\"1946\">1946</option>\n" +
    "                        <option value=\"1947\">1947</option>\n" +
    "                        <option value=\"1948\">1948</option>\n" +
    "                        <option value=\"1949\">1949</option>\n" +
    "                        <option value=\"1950\">1950</option>\n" +
    "                        <option value=\"1951\">1951</option>\n" +
    "                        <option value=\"1952\">1952</option>\n" +
    "                        <option value=\"1953\">1953</option>\n" +
    "                        <option value=\"1954\">1954</option>\n" +
    "                        <option value=\"1955\">1955</option>\n" +
    "                        <option value=\"1956\">1956</option>\n" +
    "                        <option value=\"1957\">1957</option>\n" +
    "                        <option value=\"1958\">1958</option>\n" +
    "                        <option value=\"1959\">1959</option>\n" +
    "                        <option value=\"1960\">1960</option>\n" +
    "                        <option value=\"1961\">1961</option>\n" +
    "                        <option value=\"1962\">1962</option>\n" +
    "                        <option value=\"1963\">1963</option>\n" +
    "                        <option value=\"1964\">1964</option>\n" +
    "                        <option value=\"1965\">1965</option>\n" +
    "                        <option value=\"1966\">1966</option>\n" +
    "                        <option value=\"1967\">1967</option>\n" +
    "                        <option value=\"1968\">1968</option>\n" +
    "                        <option value=\"1969\">1969</option>\n" +
    "                        <option value=\"1970\">1970</option>\n" +
    "                        <option value=\"1971\">1971</option>\n" +
    "                        <option value=\"1972\">1972</option>\n" +
    "                        <option value=\"1973\">1973</option>\n" +
    "                        <option value=\"1974\">1974</option>\n" +
    "                        <option value=\"1975\">1975</option>\n" +
    "                        <option value=\"1976\">1976</option>\n" +
    "                        <option value=\"1977\">1977</option>\n" +
    "                        <option value=\"1978\">1978</option>\n" +
    "                        <option value=\"1979\">1979</option>\n" +
    "                        <option value=\"1980\">1980</option>\n" +
    "                        <option value=\"1981\">1981</option>\n" +
    "                        <option value=\"1982\">1982</option>\n" +
    "                        <option value=\"1983\">1983</option>\n" +
    "                        <option value=\"1984\">1984</option>\n" +
    "                        <option value=\"1985\">1985</option>\n" +
    "                        <option value=\"1986\">1986</option>\n" +
    "                        <option value=\"1987\">1987</option>\n" +
    "                        <option value=\"1988\">1988</option>\n" +
    "                        <option value=\"1989\">1989</option>\n" +
    "                        <option value=\"1990\">1990</option>\n" +
    "                        <option value=\"1991\">1991</option>\n" +
    "                        <option value=\"1992\">1992</option>\n" +
    "                        <option value=\"1993\">1993</option>\n" +
    "                        <option value=\"1994\">1994</option>\n" +
    "                        <option value=\"1995\">1995</option>\n" +
    "                        <option value=\"1996\">1996</option>\n" +
    "                        <option value=\"1997\">1997</option>\n" +
    "                      </select>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "\n" +
    "<!--                 <div class=\"form-group\">\n" +
    "                    <label for=\"birthday\">Date de Naissance *</label>\n" +
    "                    <input type=\"date\"\n" +
    "                        ng-model=\"currentClient.userinfos.birthday\"\n" +
    "                        name=\"birthday\"\n" +
    "                        required\n" +
    "                        class=\"form-control\"\n" +
    "                        id=\"birthday\"/>\n" +
    "                </div> -->\n" +
    "\n" +
    "  <!-- <pre>{{currentClient.userinfos.birthday | json}}</pre> -->\n" +
    "                        <!-- ADRESSE AUTOCOMPLETE -->\n" +
    "                 <!--    <label>Adresse de Facturation</label>\n" +
    "                      <div class=\"adresse\">\n" +
    "                       <input type=\"text\"\n" +
    "                          id=\"adresse\"\n" +
    "                          ng-autocomplete\n" +
    "                          ng-model=\"currentClient.userinfos.billing_address\"\n" +
    "                          options = {\n" +
    "                            country: 'fr'\n" +
    "                          } />\n" +
    "                      </div> -->\n" +
    "            </div><!-- col-lg-3 col-md-3 col-sm-4 -->\n" +
    "\n" +
    "            <div class=\"col-lg-3 col-md-3 col-sm-4\">\n" +
    "                <label>Adresse de Facturation *</label>\n" +
    "                <!--           <div class=\"form-group\">\n" +
    "\n" +
    "                      <label for=\"billing_address.company\" class=\"sr-only\">Company</label>\n" +
    "                      <input type=\"text\"\n" +
    "                          ng-model=\"currentClient.userinfos.billing_address.company\"\n" +
    "                          placeholder=\"Société\"\n" +
    "                          class=\"form-control\"\n" +
    "                          id=\"billing_address.company\"/>\n" +
    "                  </div> -->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"billing_address.street\" class=\"sr-only\">Rue</label>\n" +
    "                    <input type=\"text\"\n" +
    "                      ng-model=\"currentClient.userinfos.billing_address.street\"\n" +
    "                      placeholder=\"Rue\"\n" +
    "                      class=\"form-control\"\n" +
    "                      id=\"billing_address.street\"\n" +
    "                      name=\"billing_address.street\"\n" +
    "                      required/>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"billing_address.zipcode\" class=\"sr-only\">CP</label>\n" +
    "                    <input type=\"text\"\n" +
    "                      ng-model=\"currentClient.userinfos.billing_address.zipcode\"\n" +
    "                      placeholder=\"Code Postal\"\n" +
    "                      class=\"form-control\"\n" +
    "                      id=\"billing_address.zipcode\"\n" +
    "                      name=\"billing_address.zipcode\"\n" +
    "                      required/>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"billing_address.city\" class=\"sr-only\">Ville</label>\n" +
    "                    <input type=\"text\"\n" +
    "                      ng-model=\"currentClient.userinfos.billing_address.city\"\n" +
    "                      placeholder=\"Ville\"\n" +
    "                      class=\"form-control\"\n" +
    "                      id=\"billing_address.city\"\n" +
    "                      name=\"billing_address.city\"\n" +
    "                      required/>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <!--           <div class=\"form-group\">\n" +
    "                      <label for=\"billing_address.country\" class=\"sr-only\">Pays</label>\n" +
    "                      <input type=\"text\"\n" +
    "                          ng-model=\"currentClient.userinfos.billing_address.country\"\n" +
    "                          placeholder=\"Pays\"\n" +
    "                          class=\"form-control\"\n" +
    "                          id=\"billing_address.country\"/>\n" +
    "                  </div> -->\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"billing_address.other_info\">Informations Complémentaires</label>\n" +
    "                    <textarea class=\"form-control\" rows=\"4\" ng-model=\"currentClient.userinfos.billing_address.other_info\" placeholder=\"Société, Bâtiment, Code, Interphone, Etage ...\" id=\"billing_address.other_info\"></textarea>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                      <input type=\"checkbox\" ng-model=\"currentClient.userinfos.same_billing\"> Adresse de Livraison identique\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "\n" +
    "            </div><!-- col-lg-3 col-md-3 col-sm-4 -->\n" +
    "\n" +
    "            <div class=\"col-lg-3 col-md-3 col-sm-4\">\n" +
    "                    <label>Mode de Livraison *</label>\n" +
    "<!--                     <button class=\"btn delivery-button\"\n" +
    "                            ng-class=\"{selecteddelivery: currentClient.userinfos.delivery_mode == 1}\"\n" +
    "                            ng-click=\"deliveryMethod(1)\"\n" +
    "                            tooltip=\"Hey Jude\">\n" +
    "                        <h4>Relais Colis</h4>\n" +
    "                        <p>Attention ! Colis Lourd (14kg) <span class=\"deliveryPrice\">15 €</span></p>\n" +
    "                    </button> -->\n" +
    "                    <button class=\"btn delivery-button\"\n" +
    "                            ng-class=\"{selecteddelivery: currentClient.userinfos.delivery_mode == 2}\"\n" +
    "                            ng-click=\"deliveryMethod(2)\"\n" +
    "                            tooltip=\"Colissimo / TNT avec suivi\">\n" +
    "                        <h4>Envoi par transporteur</h4>\n" +
    "                        <p>Préparation et Livraison <br> sous 10j ouvrables </p>\n" +
    "                        <p><span class=\"deliveryPrice\">17 €</span></p>\n" +
    "                    </button>\n" +
    "                    <button class=\"btn delivery-button\"\n" +
    "                            ng-class=\"{selecteddelivery: currentClient.userinfos.delivery_mode == 3}\"\n" +
    "                            ng-click=\"deliveryMethod(3)\"\n" +
    "                            tooltip=\"Nous prendrons rendez-vous avec vous pour une livraison sur-mesure \">\n" +
    "                        <h4>A la carte</h4>\n" +
    "                        <p>Livraison sur RDV (Lundi & Mardi) <br> le soir après 20h.</p>\n" +
    "                        <p><span class=\"deliveryPrice\">21 €</span></p>\n" +
    "                    </button>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-hide=\"currentClient.userinfos.same_billing\" class=\"fader col-lg-3 col-md-3 col-sm-4\">\n" +
    "                    <label for=\"delivery_address.company\">Adresse de Livraison</label>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"delivery_address.street\" class=\"sr-only\">Rue</label>\n" +
    "                        <input type=\"text\"\n" +
    "                            ng-model=\"currentClient.userinfos.delivery_address.street\"\n" +
    "                            placeholder=\"Rue\"\n" +
    "                            class=\"form-control\"\n" +
    "                            id=\"delivery_address.street\"/>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                      <label for=\"delivery_address.zipcode\" class=\"sr-only\">CP</label>\n" +
    "                      <input type=\"text\"\n" +
    "                          ng-model=\"currentClient.userinfos.delivery_address.zipcode\"\n" +
    "                          placeholder=\"Code Postal\"\n" +
    "                          class=\"form-control\"\n" +
    "                          id=\"delivery_address.zipcode\"/>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                      <label for=\"delivery_address.city\" class=\"sr-only\">Ville</label>\n" +
    "                      <input type=\"text\"\n" +
    "                          ng-model=\"currentClient.userinfos.delivery_address.city\"\n" +
    "                          placeholder=\"Ville\"\n" +
    "                          class=\"form-control\"\n" +
    "                          id=\"delivery_address.city\"/>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                      <label for=\"delivery_address.other_info\">Informations Complémentaires</label>\n" +
    "                      <textarea class=\"form-control\" rows=\"4\" ng-model=\"currentClient.userinfos.delivery_address.other_info\" placeholder=\"Société, Bâtiment, Code, Interphone, Etage ...\" id=\"delivery_address.other_info\"></textarea>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </form>\n" +
    "    </div>    <!-- ROW -->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-3 col-md-3 pull-right\">\n" +
    "              <a class=\"btn btn-proceed pull-right\" ng-click=\"addUserInfo(form_commander)\">Valider</a>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-3 col-md-3 pull-right\">\n" +
    "              <label for=\"first_name\">Votre code d'accès Vinify</label>\n" +
    "              <input type=\"text\"\n" +
    "                  placeholder=\"IWANTVY\"\n" +
    "                  name=\"coupon\"\n" +
    "                  ng-model=\"coupon.coupon\"\n" +
    "                  class=\"form-control\"\n" +
    "                  id=\"coupon\"/>\n" +
    "            <a class=\"pull-right\" href=\"mailto:charlotte@vinify.co?subject=Code%20Vinify%20&body=Bonjour%2C%0AJe%20voudrais%20r%C3%A9server%20un%20code%20vinify%0A%0ACordialement%2C%0A\">Demander un code</a>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>    <!-- ROW -->\n" +
    "\n" +
    "</div> <!-- container delivery -->\n" +
    "\n" +
    "");
}]);

angular.module("paiement/paiement.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("paiement/paiement.tpl.html",
    "<div class=\"background-paiement\">\n" +
    "  <div class=\"overlay-paiement\">\n" +
    "        <div class=\"vertical-align\" ui-view autoscroll=\"false\"></div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("paiement/parts/paiement.confirmation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("paiement/parts/paiement.confirmation.tpl.html",
    "\n" +
    "      <div class=\"centered bill\">\n" +
    "          <h3>Votre Commande</h3>\n" +
    "          <div class=\"col-lg-12\">\n" +
    "              <div class=\"col-lg-6 col-md-6\">\n" +
    "                <table class=\"table-centered\">\n" +
    "                  <tr>\n" +
    "                    <td><h4>{{currentClient.order.user.first_name}} {{currentClient.order.user.last_name}} </h4></td>\n" +
    "                  </tr>\n" +
    "                  <tr class=\"bordered-row\">\n" +
    "                    <td><h4>{{currentClient.order.info.delivery_address.street}}</h4></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td><h4>{{currentClient.order.info.delivery_address.zipcode}} {{currentClient.order.info.delivery_address.city}}</h4></td>\n" +
    "                  </tr>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "              <div class=\"col-lg-6 col-md-6\">\n" +
    "                <table class=\"table-centered\">\n" +
    "                  <tr>\n" +
    "                    <td><h4>{{currentClient.order.order_type}} </h4></td>\n" +
    "                    <td><h4>{{currentClient.order.amount}}€</h4></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td><h4>Livraison {{delivery_mode}} </h4></td>\n" +
    "                    <td><h4>{{currentClient.order.delivery_cost}}€</h4></td>\n" +
    "                  </tr>\n" +
    "                  <tr class=\"bordered-row\">\n" +
    "                    <td><h4 class=\"bill-total\">Total </h4></td>\n" +
    "                    <td><h4 class=\"bill-total\">{{currentClient.order.final_price}}€</h4></td>\n" +
    "                  </tr>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        <button stripe-checkout class=\"btn btn-blue btn-big\" id=\"btn-pay\">Payer</button>\n" +
    "    </div>\n" +
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
    "</div>\n" +
    "");
}]);

angular.module("questionnaire/parts/questionnaire.balance.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.balance.tpl.html",
    "<div class=\"background-balance\">\n" +
    "  <div class=\"overlay\">\n" +
    "    <div class=\"form-errors fader\" ng-show=\"answerAll\">\n" +
    "      Merci de choisir une préférence pour chaque type de vin, puis valider avec la flèche\n" +
    "    </div>\n" +
    "    <div class=\"vertical-align centered  vertical-align-mobile\">\n" +
    "        <div class=\"row\">\n" +
    "          <h3>Vos préférences de composition du Vinibar</h3>\n" +
    "          <p>(Indiquez les proportions que vous désirez pour votre Vinibar)</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\" id=\"quest_balance\">\n" +
    "          <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3\">\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "              <h4>Vin Rouge</h4>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.red == 2}\"\n" +
    "                      ng-click=\"newuser.survey.balance.red = 2;\">Beaucoup</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.red == 1}\"\n" +
    "                      ng-click=\"newuser.survey.balance.red = 1\">Un peu</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.red == 0}\"\n" +
    "                      ng-click=\"newuser.survey.balance.red = 0\">Pas</button><br>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "              <h4>Vin Blanc</h4>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.white == 2}\"\n" +
    "                      ng-click=\"newuser.survey.balance.white = 2\">Beaucoup</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.white == 1}\"\n" +
    "                      ng-click=\"newuser.survey.balance.white = 1\">Un peu</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.white == 0}\"\n" +
    "                      ng-click=\"newuser.survey.balance.white = 0\">Pas</button><br>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-lg-4 col-md-4 col-sm-4\">\n" +
    "              <h4>Vin Rosé</h4>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.rose == 2}\"\n" +
    "                      ng-click=\"newuser.survey.balance.rose = 2\">Beaucoup</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.rose == 1}\"\n" +
    "                      ng-click=\"newuser.survey.balance.rose = 1\">Un peu</button><br>\n" +
    "              <button class=\"btn button-overlay\"\n" +
    "                      ng-class=\"{selected: newuser.survey.balance.rose == 0}\"\n" +
    "                      ng-click=\"newuser.survey.balance.rose = 0\">Pas</button><br>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks\">\n" +
    "      <a ui-sref=\"questionnaire.starter\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks-right\">\n" +
    "      <a class=\"validateBalanceAnswer\" ng-click=\"validateBalanceAnswer()\"><i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("questionnaire/parts/questionnaire.coffee.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.coffee.tpl.html",
    "<div class=\"background-coffee\">\n" +
    "  <div class=\"overlay\">\n" +
    "    <div class=\"vertical-align centered\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3>Vous preferez votre café :</h3>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-12 col-md-12 col-sm-12 elements-quest\" id=\"quest_coffee\">\n" +
    "\n" +
    "          <div class=\"col-lg-3 col-md-3\">\n" +
    "            <a ui-sref=\"questionnaire.juice\" ng-class=\"{selected: newuser.survey.coffee == 'Noir'}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.coffee = 'Noir'\">Noir</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-3 col-md-3\">\n" +
    "            <a ui-sref=\"questionnaire.juice\" ng-class=\"{selected: newuser.survey.coffee == 'Sucre'}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.coffee = 'Sucre'\">Avec du sucre</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-3 col-md-3\">\n" +
    "            <a ui-sref=\"questionnaire.juice\" ng-class=\"{selected: newuser.survey.coffee == 'Crème'}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.coffee = 'Crème'\">Avec de la crème ou du lait</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-3 col-md-3\">\n" +
    "            <a ui-sref=\"questionnaire.juice\" ng-class=\"{selected: newuser.survey.coffee == 'No'}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.coffee = 'No'\">Je ne prends pas de café</a>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "<!--     <div class=\"navlinks-right\">\n" +
    "      <a ui-sref=\"questionnaire.juice\"><i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "    </div> -->\n" +
    "  </div>\n" +
    "\n" +
    "        <script type=\"text/ng-template\" id=\"myModalContent.html\">\n" +
    "\n" +
    "            <div class=\"modal-body\">\n" +
    "                <h3 class=\"modal-title\">Démarrer l'aventure vinify</h3>\n" +
    "                <p>Merci de rentrer votre adresse email pour démarrer l'aventure :)</p>\n" +
    "                  <div class=\"input-group col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3\">\n" +
    "                    <input type=\"email\"\n" +
    "                        name=\"email\"\n" +
    "                        ng-model=\"selectedEmail.email\"\n" +
    "                        placeholder=\"Email\"\n" +
    "                        required\n" +
    "                        class=\"form-control\"\n" +
    "                        id=\"email\"/>\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                      <button class=\"btn btn-default\" type=\"button\" ng-click=\"ok()\">Go!</button>\n" +
    "                    </span>\n" +
    "                  </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </script>\n" +
    "\n" +
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
    "  <div class=\"overlay\">\n" +
    "    <div class=\"vertical-align centered\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3>Vous aimez les cuisines :</h3>\n" +
    "        <p>(Choisissez une ou plusieurs réponses, puis validez avec la flèche)</p>\n" +
    "      </div>\n" +
    "      <div class=\"row\" id=\"quest_cuisine\">\n" +
    "        <div class=\"col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2\">\n" +
    "\n" +
    "          <button class=\"btn button-overlay\"\n" +
    "                  ng-class=\"{selected: newuser.survey.cuisine.fr == true}\"\n" +
    "                  ng-click=\"newuser.survey.cuisine.fr = !newuser.survey.cuisine.fr\">Française</button><br>\n" +
    "          <button class=\"btn button-overlay\"\n" +
    "                  ng-class=\"{selected: newuser.survey.cuisine.it == true}\"\n" +
    "                  ng-click=\"newuser.survey.cuisine.it = !newuser.survey.cuisine.it\">Italienne</button><br>\n" +
    "          <button class=\"btn button-overlay\"\n" +
    "                  ng-class=\"{selected: newuser.survey.cuisine.as == true}\"\n" +
    "                  ng-click=\"newuser.survey.cuisine.as = !newuser.survey.cuisine.as\">Asiatique</button><br>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-lg-4 col-md-4\">\n" +
    "          <button class=\"btn button-overlay\" analytics-on=\"click\" analytics-event=\"Button 1\" analytics-category=\"Commands\"\n" +
    "                  ng-class=\"{selected: newuser.survey.cuisine.usa == true}\"\n" +
    "                  ng-click=\"newuser.survey.cuisine.usa = !newuser.survey.cuisine.usa\">Américaine</button><br>\n" +
    "          <button class=\"btn button-overlay\" analytics-on=\"click\" analytics-event=\"Button 2\" analytics-category=\"Commands\"\n" +
    "                  ng-class=\"{selected: newuser.survey.cuisine.veg == true}\"\n" +
    "                  ng-click=\"newuser.survey.cuisine.veg = !newuser.survey.cuisine.veg\">Végétarienne</button><br>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks\">\n" +
    "      <a ui-sref=\"questionnaire.juice\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a>\n" +
    "    </div>\n" +
    "    <div class=\"navlinks-right\">\n" +
    "      <a ui-sref=\"questionnaire.starter\" ><i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("questionnaire/parts/questionnaire.desert.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/parts/questionnaire.desert.tpl.html",
    "<div class=\"col-lg-6 col-md-6\">\n" +
    "  <h3>et pour le dessert ?</h3>\n" +
    "\n" +
    "  <a ui-sref=\"questionnaire.balance\" class=\"btn btn-quest-radio\" ng-click=\"newuser.survey.desert = 'mille-feuille'\">Un mille-feuille à la vanille</a><br>\n" +
    "  <a ui-sref=\"questionnaire.balance\" class=\"btn btn-quest-radio\" ng-click=\"newuser.survey.desert = 'chocolat-cannelle'\">Une ganache chocolat à la cannelle</a><br>\n" +
    "  <a ui-sref=\"questionnaire.balance\" class=\"btn btn-quest-radio\" ng-click=\"newuser.survey.desert = 'fruit-sorbet'\">Un carpaccio de fruit frais avec un sorbet</a><br>\n" +
    "  <a ui-sref=\"questionnaire.balance\" class=\"btn btn-quest-radio\" ng-click=\"newuser.survey.desert = 'No'\">Je ne prends jamais de dessert</a><br>\n" +
    "\n" +
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
    "  <div class=\"overlay\">\n" +
    "    <div class=\"vertical-align centered\">\n" +
    "      <div class=\"row\">\n" +
    "        <h3>Pour vous désaltérer, ce sera ... </h3>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"elements-quest\" id=\"quest_juice\">\n" +
    "\n" +
    "          <div class=\"col-lg-4 col-md-4\">\n" +
    "            <a ui-sref=\"questionnaire.cuisine\" ng-class=\"{selected: newuser.survey.juice == 'Pamplemousse'}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.juice = 'Pamplemousse'\">Un jus de pamplemousse</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-4 col-md-4\">\n" +
    "            <a ui-sref=\"questionnaire.cuisine\" ng-class=\"{selected: newuser.survey.juice == 'Pomme'}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.juice = 'Pomme'\">Un jus de pomme</a>\n" +
    "          </div>\n" +
    "          <div class=\"col-lg-4 col-md-4\">\n" +
    "            <a ui-sref=\"questionnaire.cuisine\" ng-class=\"{selected: newuser.survey.juice == 'Exotique'}\" class=\"btn button-overlay\" ng-click=\"newuser.survey.juice = 'Exotique'\">Un jus de fruits exotiques</a>\n" +
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
    "    <div class=\"overlay\">\n" +
    "        <div class=\"vertical-align centered\">\n" +
    "            <div class=\"row\">\n" +
    "                <h3>Quels plats vous font envie ?</h3>\n" +
    "                <p>(Choisissez tous les plats qui vous tentent, puis validez avec la flèche)</p>\n" +
    "            </div>\n" +
    "            <div class=\"row\" id=\"quest_starter\">\n" +
    "              <div class=\"col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2\">\n" +
    "                <h4>En entrée</h4>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.starter.huitres == true}\"\n" +
    "                        ng-click=\"newuser.survey.starter.huitres = !newuser.survey.starter.huitres\">Assiette d'huîtres</button><br>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.starter.tapenade == true}\"\n" +
    "                        ng-click=\"newuser.survey.starter.tapenade = !newuser.survey.starter.tapenade\">Pain toasté et tapenade d'olive</button><br>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.starter.foie_gras == true}\"\n" +
    "                        ng-click=\"newuser.survey.starter.foie_gras = !newuser.survey.starter.foie_gras\">Foie gras et pain d'épices</button><br>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"col-lg-4 col-md-4\">\n" +
    "                <h4>Au dessert</h4>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.desert.millefeuille == true}\"\n" +
    "                        ng-click=\"newuser.survey.desert.millefeuille = !newuser.survey.desert.millefeuille\">Mille-feuille à la vanille</button><br>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.desert.chocolatcannelle == true}\"\n" +
    "                        ng-click=\"newuser.survey.desert.chocolatcannelle = !newuser.survey.desert.chocolatcannelle\">Ganache chocolat à la cannelle</button><br>\n" +
    "                <button class=\"btn button-overlay\"\n" +
    "                        ng-class=\"{selected: newuser.survey.desert.fruitsorbet == true}\"\n" +
    "                        ng-click=\"newuser.survey.desert.fruitsorbet = !newuser.survey.desert.fruitsorbet\">Carpaccio de fruit frais & sorbet</button><br>\n" +
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

angular.module("questionnaire/questionnaire.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("questionnaire/questionnaire.tpl.html",
    "<div class=\"slide-container\">\n" +
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
    "        <p>Merci d'avoir créé votre profil de goûts</p>\n" +
    "        <p>Nous vous contacterons courant juillet pour la sortie des prochains Vinibars :)</p>\n" +
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

angular.module("remerciement_order/remerciement_order.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("remerciement_order/remerciement_order.tpl.html",
    "<div class=\"remerciement-container\">\n" +
    "  <div class=\"vertical-align centered\">\n" +
    "      <div class=\"container row-fluid\">\n" +
    "        <h2>Merci pour votre commande</h2>\n" +
    "        <p>Nous préparons votre sélection personnalisée.</p>\n" +
    "        <p>Vous aller recevoir un email contenant votre facture et votre numéro de commande.</p>\n" +
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
