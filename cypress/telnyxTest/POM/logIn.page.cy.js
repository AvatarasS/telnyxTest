class LoginPage {
    
    get bussinesEmailField(){
        return cy.get('[class="TextField__InputWrapper-sc-r5o2cn-4 fCOoik"] input[name="email"]')
    }

    bussinesEmailFieldFill(email){
        this.bussinesEmailField.type(email)
                               .should("have.value", email)
    }

    get passwordField(){
        return cy.get('[class="TextField__InputWrapper-sc-r5o2cn-4 fCOoik"] input[name="password"]')
    }

    passwordFieldFill(password){
        this.passwordField.click()
                          .type(password)
                          .should("have.value", password)
    }

    get loginSubmitButton(){
        return cy.get('form[aria-label="loginForm"] button')
    }

    loginSubmitButtonClick(){
        this.loginSubmitButton.click()
    }

    get errorMessage(){
        return cy.get('.Message__MessageCopy-sc-1lbs5ge-2.ilxvtf')
    }
}  
  export default LoginPage