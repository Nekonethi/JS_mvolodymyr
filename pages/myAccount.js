const { I } = inject();

module.exports = {
  verifyPage(){
    I.waitForVisible('#slider_row');
    I.see('My account');
  }
  // insert your locators and methods here
}
