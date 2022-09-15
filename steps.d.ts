/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authenticationPage = typeof import('./pages/authentication.js');
type registrationPage = typeof import('./pages/registration.js');
type myAccountPage = typeof import('./pages/myAccount.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authenticationPage: authenticationPage, registrationPage: registrationPage, myAccountPage: myAccountPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
