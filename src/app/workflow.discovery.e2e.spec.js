// describe('Discovery Purchase Workflow', function () {
//   'use strict';
//   function waitForUrlToChangeTo (urlRegex) {
//     var currentUrl;

//     return browser.getCurrentUrl().then(function storeCurrentUrl (url) {
//       currentUrl = url;
//     }
//     ).then(function waitForUrlToChangeTo () {
//         return browser.wait(function waitForUrlToChangeTo () {
//           return browser.getCurrentUrl().then(function compareCurrentUrl (url) {
//             return urlRegex === url;
//           });
//         });
//       }
//     );
//   }
//   it('should load gift screen and set test mode', function () {
//     browser.get('#/welcome?r=test');
//     expect(browser.getTitle()).toEqual('Démarrer l\'aventure | vinibar');
//   });

//   it('should display the email login form', function () {
//     element(by.css('.button')).click();
//     expect(browser.getTitle()).toEqual('Questionnaire | vinibar');
//   });

//   it('should select answers in the quizz', function () {
//     // quiz
//     element.all(by.css('.btn')).get(0).click();
//     expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9001/#/questionnaire/juice');
//     element.all(by.css('.btn')).get(1).click();
//     expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9001/#/questionnaire/cuisine');
//     element.all(by.css('.btn')).get(0).click();
//     element.all(by.css('.btn')).get(1).click();
//     element.all(by.css('.btn')).get(2).click();
//     element.all(by.css('.btn')).get(3).click();
//     element.all(by.css('.btn')).get(4).click();

//     element(by.css('.icon-chevron-right')).click();
//     expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9001/#/questionnaire/starter');

//     element.all(by.css('.btn')).get(0).click();
//     element.all(by.css('.btn')).get(1).click();
//     element.all(by.css('.btn')).get(2).click();
//     element.all(by.css('.btn')).get(3).click();
//     element.all(by.css('.btn')).get(4).click();
//     element.all(by.css('.btn')).get(5).click();
//     element(by.css('.icon-chevron-right')).click();
//     expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9001/#/questionnaire/balance');

//     element.all(by.css('.btn')).get(0).click();
//     element.all(by.css('.btn')).get(4).click();
//     element(by.css('.icon-chevron-right')).click();
//     expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9001/#/questionnaire/balance');

//     // simulate uncomplete preferences
//     element.all(by.css('.btn')).get(8).click();
//     element(by.css('.icon-chevron-right')).click();
//     expect(browser.getCurrentUrl()).toEqual('http://0.0.0.0:9001/#/questionnaire/winemap');
//   });

//   it('should create a user and go to preview', function () {
//     // create user
//     element(by.model('newuser.survey.quest_8.answ')).sendKeys('J\'aime les poulets');
//     element(by.model('newuser.first_name')).sendKeys('Johnny');
//     element(by.model('newuser.last_name')).sendKeys('Mc Test');
//     element(by.model('newuser.email')).sendKeys('felix+test' + Math.random() * 1000 + '@vinify.co');
//     element(by.model('newuser.password')).sendKeys('wineisgood');

//     element(by.css('.button-createuser')).click();
//   });

//   it('should choose discovery', function () {
//     element(by.css('.button.btn-square-o')).click();
//   });

//   it('should fill user infos', function () {
//     // fill userinfos
//     element(by.cssContainingText('option', 'Mme')).click();
//     element(by.model('client.userinfos.first_name')).sendKeys('John');
//     element(by.model('client.userinfos.last_name')).sendKeys('Mc Test');
//     element(by.model('client.userinfos.phone')).sendKeys('0683620433');
//     element.all(by.css('option')).get(5).click();
//     element.all(by.css('option')).get(41).click();
//     element.all(by.css('option')).get(70).click();
//     element(by.model('client.userinfos.delivery_address.street')).sendKeys('12 rue boinod');
//     element(by.model('client.userinfos.delivery_address.zipcode')).sendKeys('75018');
//     element(by.model('client.userinfos.delivery_address.city')).sendKeys('Paris');
//     element(by.css('.btn-block-primary')).click();
//   });

//   it('should pay', function () {
//     element.all(by.css('.btn-block-primary')).first().click();
//     // make payment
//     element(by.model('number')).sendKeys('4242424242424242');
//     element(by.model('cvc')).sendKeys('001');
//     element(by.cssContainingText('option', 'Mai')).click();
//     element(by.cssContainingText('option', '2017')).click();
//     element.all(by.css('.btn-block-primary')).last().click();
//     waitForUrlToChangeTo('http://0.0.0.0:9001/#/remerciement/3');
//   });

// });