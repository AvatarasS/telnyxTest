class SignupPage {

    get emailField() {
        return cy.get('#email')
    }

    emailFieldFill(email) {
        this.emailField.type(email)
                       .should('have.value', email)
    }

    get nameField() {
        return cy.get('#full_name')
    }

    nameFieldFill(name) {
        this.nameField.type(name)
                      .should('have.value', name)
    }

    get passwordField() {
        return cy.get('#password')
    }

    passwordFieldFill(password) {
        this.passwordField.type(password)
                          .should('have.value', password)
    }

    get termsCheckbox(){
        return cy.get('#terms_and_conditions')
    }

    termsCheckboxCheck(){
        this.termsCheckbox.click()
                          .should('be.enabled')
    }

    get signupButton(){
        return cy.get('[class="c-WdFOE"] button')
    }

    signupSubmitButtonClick(){
        this.signupButton.click()
    }

    get signupMessage(){
        return cy.get('h1[class] span')
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
}
export default SignupPage