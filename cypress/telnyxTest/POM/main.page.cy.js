class MainPage {
    
    visitTelnyx() {
        cy.visit('https://telnyx.com/')
        cy.url().should('eq', 'https://telnyx.com/')
    }

    get socialButtons(){
        return cy.get('[class="c-cLfYON"] li a')
    }

    checkSocialButtons(){
        this.socialButtons.each(($el) => {
            cy.wrap($el).invoke('attr', 'href')
                        .then(href => {
                            cy.request({url:href, failOnStatusCode: false})
                              .its('status')
                              .should('match', /^(999|200)$/)
                        })
        })
    }
}  
  export default MainPage