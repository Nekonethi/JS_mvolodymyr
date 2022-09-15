let user = {
    firstName: 'Vova',
    lastName: 'Mytrokhin',
    password: 'admin',
    address: '906 South New Street Trussville',
    city: 'New City',
    state: 'Alabama',
    post: '54058',
    country: 'United States',
    phone: '+380635957535',
    alias: '906 South New Street Trussville',
};

Feature('store');

xScenario('test something', ({ I }) => {
    I.amOnPage('http://automationpractice.com/index.php');
    I.see('Women');
});


Scenario('test something', ({ I, homePage, authenticationPage, registrationPage, myAccountPage }) => {
    I.openStore();
    homePage.clickSignIn();
    authenticationPage.fillEmail(Date.now() + '@test.com');
    authenticationPage.clickCreateAccount();
    registrationPage.fillNewAccountFields(user);
    registrationPage.submitCreateAccount();
    myAccountPage.verifyPage();
    //pause();
    //myAccountPage.verifyPage();
}).tag('test');
