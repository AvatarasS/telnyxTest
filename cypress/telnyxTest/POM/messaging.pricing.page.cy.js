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

    get faqButtons(){
        return cy.get('[class="c-cfzSIN"]')
    }

    checkTabListButtonsSwitch(){
        this.tabListButtons.each(($el) => {
            if ( cy.wrap($el).invoke('attr', 'aria-selected').then((aria) => {return aria}) === 'true') {
                cy.wrap($el).scrollIntoView()
                            .should('be.visible')
                            .should('have.attr', 'aria-selected', 'true')
                cy.fixture("testData.json").then((testData) => {
                    this.firstPanelTitle.should('be.visible')
                                        .and('have.text', testData.panelTitle.first)
                    this.secondPanelTitle.should('be.visible')
                                        .and('have.text', testData.panelTitle.second)
                    this.thirdPanelTitle.should('be.visible')
                                        .and('have.text', testData.panelTitle.third)
                })
            } else {
                cy.wrap($el).scrollIntoView()
                            .should('be.visible')
                            .click()
                            .should('have.attr', 'aria-selected', 'true')
                cy.fixture("testData.json").then((testData) => {
                    this.firstPanelTitle.should('be.visible')
                                        .and('have.text', testData.panelTitle.first)
                    this.secondPanelTitle.should('be.visible')
                                        .and('have.text', testData.panelTitle.second)
                    this.thirdPanelTitle.should('be.visible')
                                        .and('have.text', testData.panelTitle.third)
                })
            }
        })
    }

    checkFaqButtons(){
        this.faqButtons.each(($el) => {
            if (cy.wrap($el).find('button')
                            .should('have.attr', 'aria-expanded')
                            .then((aria) => {return aria}) === 'true'){
                cy.wrap($el).find('p')
                            .should('be.visible')
            } else {
                cy.wrap($el).click()
                            .find('p')
                            .should('be.visible')
            }
        })
        .its('length')
        .should('be.eq', 7)
    }
}
export default MessagingPricingPage
