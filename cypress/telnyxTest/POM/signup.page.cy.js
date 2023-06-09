class SignupPage {
    

    get emailField() {
        return cy.get('#email')
    }

    get nameField() {
        return cy.get('#full_name')
    }

    get passwordField() {
        return cy.get('#password')
    }

    get termsCheckbox(){
        return cy.get('#terms_and_conditions')
    }

    get signupButton(){
        return cy.get('[class="c-WdFOE"] button')
    }

    get emailErrorMessage(){
        return cy.get('#email_message')
    }

    get nameErrorMessage(){
        return cy.get('#full_name_message')
    }

    get termsErrorMessage(){
        return cy.get('#terms_and_conditions_message')
    }
    

    fillEmailField(email) {
        this.emailField.type(email)
    }

    fillNameField(name) {
        this.nameField.type(name)
    }

    fillPasswordField(password) {
        this.passwordField.type(password)
    }

    checkEnablingTermsCheckbox(){
        this.termsCheckbox.click()
                          .should('be.enabled')
    }

    clickSignupSubmitButton(){
        this.signupButton.click()
    }
}
export default SignupPage