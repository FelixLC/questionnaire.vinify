describe('GiftCard Purchase Workflow', function () {
  'use strict';
  function waitForUrlToChangeTo (urlRegex) {
    var currentUrl;

    return browser.getCurrentUrl().then(function storeCurrentUrl (url) {
      currentUrl = url;
    })
    .then(function waitForUrlToChangeTo () {
      return browser.wait(function waitForUrlToChangeTo () {
        return browser.getCurrentUrl().then(function compareCurrentUrl (url) {
          return urlRegex === url;
        });
      });
    });
  }
  it('should load first screen', function () {
    browser.get('#/cadeau/vinibar/formule?test=true');
    expect(browser.getTitle()).toEqual('Cadeau | vinibar');
  });

  it('should choose gift_card and add some credit', function () {
    element(by.css('#init-vinibar')).click();
    element(by.model('gift.order.credits')).sendKeys('15');
    element(by.css('#delivery-post')).click();
    element(by.css('.btn-block-primary')).click();
  });

  it('should fill lucky boy & giver infos', function () {
    expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9001/#/cadeau/vinibar/infos?test=true');
    element(by.cssContainingText('option', 'Mme')).click();
    element(by.model('gift.order.receiver_first_name')).sendKeys('Félix');
    element(by.model('gift.order.receiver_last_name')).sendKeys('Le Chevallier');
    element(by.model('gift.order.receiver_email')).sendKeys('felix+test' + Math.random() * 1000 + '@vinify.co');
    element(by.model('gift.order.message')).sendKeys('un cadeau pour toi !');

    element.all(by.css('.gift-checkbox')).first().click();
    element(by.model('gift.order.receiver_address.first_name')).sendKeys('Félix');
    element(by.model('gift.order.receiver_address.last_name')).sendKeys('Le Chevallier');
    element(by.model('gift.order.receiver_address.street')).sendKeys('12 rue boinod');
    element(by.model('gift.order.receiver_address.zipcode')).sendKeys('75018');
    element(by.model('gift.order.receiver_address.city')).sendKeys('Paris');

    element(by.css('#is-not-client')).click();
    element(by.model('gift.giver.first_name')).sendKeys('John');
    element(by.model('gift.giver.last_name')).sendKeys('MacTest');
    element(by.model('gift.giver.email')).sendKeys('felix+test' + Math.random() * 1000 + '@vinify.co');
    element(by.model('gift.giver.password')).sendKeys('wineisgood');
    element(by.css('.btn-block-primary')).click();
  });

  it('should fill the quiz', function () {
    expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9001/#/cadeau/vinibar/quiz?test=true');

    element.all(by.css('.gift-checkbox')).get(2).click();
    element.all(by.css('.gift-checkbox')).get(5).click();
    element.all(by.css('.gift-checkbox')).get(7).click();
    element.all(by.css('.gift-checkbox')).get(8).click();
    element.all(by.css('.gift-checkbox')).get(12).click();
    element.all(by.css('.gift-checkbox')).get(14).click();
    element.all(by.css('.gift-checkbox')).get(19).click();
    element.all(by.css('.gift-checkbox')).get(22).click();
    element.all(by.css('.gift-checkbox')).get(25).click();
    element(by.css('.btn-block-primary')).click();
  });

  it('should pay', function () {
    // make payment
    element(by.model('number')).sendKeys('4242424242424242');
    element(by.model('cvc')).sendKeys('001');
    element(by.cssContainingText('option', 'Mai')).click();
    element(by.cssContainingText('option', '2017')).click();
    element.all(by.css('.btn-block-primary')).last().click();
    waitForUrlToChangeTo('http://0.0.0.0:9001/#/remerciement/cadeau?print=false');
  });

});