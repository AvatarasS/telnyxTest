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
        this.socialLinkedinButton.eq(0)
                                 .should('be.visible')
                                 .invoke('removeAttr', 'target')
                                 .click()
        cy.url().should('contain', 'linkedin')
    }

    checkTwitterButton(){
        this.socialTwitterButton.eq(1)
                                 .should('be.visible')
                                 .invoke('removeAttr', 'target')
                                 .click()
        cy.url().should('contain', 'twitter')
    }

    checkFacebookButton(){
        this.socialFacebookinButton.eq(2)
                                 .should('be.visible')
                                 .invoke('removeAttr', 'target')
                                 .click()
        cy.url().should('contain', 'facebook')
    }
}  
  export default MainPage