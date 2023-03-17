class LoginPage {
    get bussinesEmailField() {
      return cy.get(
        '[class="TextField__InputWrapper-sc-r5o2cn-4 fCOoik"] input[name="email"]'
      );
    }
  
    get passwordField() {
      return cy.get(
        '[class="TextField__InputWrapper-sc-r5o2cn-4 fCOoik"] input[name="password"]'
      );
    }
  
    get loginSubmitButton() {
      return cy.get('form[aria-label="loginForm"] button');
    }
  
    get errorMessage() {
      return cy.get('.Message__MessageCopy-sc-1lbs5ge-2.ilxvtf');
    }
  
    fillBussinesEmailField(email) {
      this.bussinesEmailField.type(email).should("have.value", email);
    }
  
    fillPasswordField(password) {
      this.passwordField
        .click()
        .type(password)
        .should("have.value", password);
    }
  
    clickLoginSubmitButton() {
      this.loginSubmitButton.click();
    }
  }
  
  export default LoginPage;
  