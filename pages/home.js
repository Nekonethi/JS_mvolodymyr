const { I } = inject();

module.exports = {
  // insert your locators and methods here
  signInButton: { css: 'div.header_user_info' },
  clickSignIn() {
    I.click(this.signInButton);
  }
}
