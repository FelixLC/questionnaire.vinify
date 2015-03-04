/**
 * Mock resources module of the application
 *
 * lists and requires as dependencies all the mockresources of the app
 */
(function (app) {

  'use strict';

  /**
   * We do not use $httpBackend, however it is loaded by $httpBackend and will
   * have the unwanted behavior of failing tests if any unhandled request is made.
   * This is problematic for asset-like requests such as translations.
   *
   * These are $httpBackend responders that take care of such scenarios -- while still
   * ensuring errors are reported when unwanted requests happen
   */
  app.run(function ($httpBackend) {
    $httpBackend.whenGET(/\/assets\/.*/).respond(200, {});
  });

}(angular.module('vinibar.mockresources', [
  'vinibar.mockresources.winemaker'
])));