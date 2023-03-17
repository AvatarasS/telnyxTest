class MainPage {
    
    visitTelnyx() {
        cy.fixture('testData.json').then((testData) => {
            cy.visit(testData.telnyxUrl)
            cy.url().should('contain', testData.telnyxUrl)
        })

    }

    get socialButtons(){
        return cy.get('[class="c-cLfYON"] li a')
    }

    checkLinkedinButton(){
        this.socialButtons.eq(0)
                                 .should('be.visible')
                                 .invoke('removeAttr', 'target')
                                 .click()
        cy.url().should('contain', 'linkedin')
        cy.go('back')
    }

    checkTwitterButton(){
        this.socialButtons.eq(1)
                                 .should('be.visible')
                                 .invoke('removeAttr', 'target')
                                 .click()
        cy.url().should('contain', 'twitter')
        cy.go('back')
    }

    checkFacebookButton(){
        this.socialButtons.eq(2)
                                 .should('be.visible')
                                 .invoke('removeAttr', 'target')
                                 .click()
        cy.url().should('contain', 'facebook')
        cy.go('back')
    }
}  
  export default MainPage