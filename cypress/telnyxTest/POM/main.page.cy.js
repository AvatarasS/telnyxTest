class MainPage {
    
    get socialButtons(){
        return cy.get('[class="c-cLfYON"] li a')
    }

    visitTelnyx() {
        cy.fixture('testData.json').then((testData) => {
            cy.visit(testData.telnyxUrl)
            cy.url().should('contain', testData.telnyxUrl)
        })

    }

    checkLinkedinButton(){
        this.socialButtons.eq(0)
                          .scrollIntoView()
                          .should('be.visible')
                          .and('have.attr', 'href', 'https://www.linkedin.com/company/telnyx/')
    }

    checkTwitterButton(){
        this.socialButtons.eq(1)
                          .scrollIntoView()
                          .should('be.visible')
                          .and('have.attr', 'href', 'https://twitter.com/telnyx')
    }

    checkFacebookButton() {
        this.socialButtons.eq(2)
                          .scrollIntoView()
                          .should('be.visible')
                          .and('have.attr', 'href', 'https://www.facebook.com/Telnyx/')
    }
}  
  export default MainPage