const { I } = inject();

module.exports = {
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  passwordInput: { css: '#passwd' },
  firstNameAddressInput: { css: '#firstname' },
  lastNameAddressInput: { css: '#lastname' },
  companyAddressInput: { css: '#address1' },
  countryDropDown: { css: '#id_country' },
  stateDropDown: { css: '#id_state' },
  cityInput: { css: '#city' },
  postcodeInput: { css: '#postcode' },
  mobilePhoneInput: { css: '#phone_mobile' }, 
  aliasAddressInput: { css: '#alias' },
  submitAccountButton: { css: '#submitAccount' },

  fillNewAccountFields(user) {
    I.waitForVisible(this.firstNameInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.waitForVisible(this.passwordInput);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.firstNameAddressInput, user.firstName);
    I.fillField(this.lastNameAddressInput, user.lastName);
    I.fillField(this.companyAddressInput, user.address);
    I.fillField(this.cityInput, user.city);
    I.fillField(this.mobilePhoneInput, user.phone);
    I.fillField(this.postcodeInput, user.post);
    I.fillField(this.aliasAddressInput, user.alias);
    I.click(this.countryDropDown);
    I.selectOption(this.countryDropDown, user.country);
    I.click(this.stateDropDown);
    I.selectOption(this.stateDropDown, user.state);
  },
  submitCreateAccount() {
    I.click(this.submitAccountButton);
  }
  // insert your locators and methods here
}
