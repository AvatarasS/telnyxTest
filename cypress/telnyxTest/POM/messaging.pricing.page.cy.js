require('@cypress/xpath');

class MessagingPricingPage{

    get tabListButtons(){
        return cy.get('[class="c-PJLV"] button[role="tab"]')
    }

    get firstPanelTitle(){
        return cy.get('#Services > caption')
    }

    get secondPanelTitle(){
        return cy.get('[id*="outbound-carriers"] caption')
    }

    get thirdPanelTitle(){
        return cy.get('[id*="inbound-carriers"] caption')
    }

    checkTabListButtonsSwitch(){
        this.tabListButtons.each(($el) => {
            cy.wrap($el).should('be.visible')
                        .click()
                        .should('have.attr', 'aria-selected', 'true')
                        this.firstPanelTitle.should('be.visible')
                                            .and('have.text', 'Services')
                        this.secondPanelTitle.should('be.visible')
                                             .and('have.text', 'Carrier fees for outbound messages')
                        this.thirdPanelTitle.should('be.visible')
                                            .and('have.text', 'Carrier fees for inbound messages')
                    })
    }
    
    get faqButtons(){
        return cy.get('[class="c-cfzSIN"]')
    }

    checkFaqButtons(){
        this.faqButtons.each(($el) => {
            if (cy.wrap($el).find('button')
                            .should('have.attr', 'aria-expanded')
                            .then((aria) => {return aria}) === 'true'){
                cy.wrap($el).find('p').should('be.visible')
            } else {
                cy.wrap($el).click().find('p').should('be.visible')
            }
        })
    }
}
export default MessagingPricingPage
