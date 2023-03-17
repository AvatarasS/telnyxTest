require('@cypress/xpath');

class HeaderPage{
    get headerLogoButton(){
        return cy.get('[class="c-buvHyO c-buvHyO-ikFbPuA-css"]')
    }

    get loginButton(){
        return cy.get('[class*="c-buvHyO-ideTXhm-css"] a[href*=portal]')
    }

    get signupButton(){
        return cy.get('[id="header-sign-up"]')
    }

    get productsButton(){
        return cy.xpath('//*[@id="radix-:R55jm:"]')
    }

    get menuitemButtons(){
        return cy.get('div[role="menuitem"]')
    }

    get solutionsButton(){
        return cy.xpath('//*[@class="c-ckejlg"][not(@id="navigation")]/a')
    }

    get contactusButton(){
        return cy.get('[class*="ideTXhm-css"] a[href*="contact"]')
    }

    get pricingButton(){
        return cy.xpath('//*[@id="radix-:R5djm:"]')
    }

    checkHeaderLogoButtonRedirection(link){
        Cypress.on('uncaught:exception', () => false)
        this.headerLogoButton.should('be.visible')
                             .click()
        cy.url().should('eq', link)
    }

    clickLoginButton(){
        this.loginButton.invoke('removeAttr', 'target')
                        .click()
        cy.url().should('contain', 'portal')
    }

    clickSignupButton(){
        this.signupButton.click()
        cy.url().should('contain', 'sign-up')
    }

    clickProductsButton(){
        this.productsButton.click()
                           .should('have.attr', 'data-state', 'open')
    }

    checkMenuitemButtons(){
        this.menuitemButtons.each(($el) => {
            cy.wrap($el).should('be.visible')
        })
            .its('length')
            .should('be.eq', 7)
    }

    clickSolutionsButton(){
        this.solutionsButton.click()
        cy.url().should('contain', 'solutions')
    }

    clickContactusButton(){
        this.contactusButton.click()
        cy.url().should('contain', 'contact')
    }

    clickMenuitemButton(i){
        this.menuitemButtons.eq(i - 1).find('a')
                                      .should('have.attr', 'href')
                                      .then((href) => {
                                        this.menuitemButtons.eq(i - 1).click()
                                        cy.url().should('contain', `${href}`)
                                      })
    }

    clickPricingButton(){
        this.pricingButton.click()
        this.menuitemButtons.should('be.visible')
    }
}

export default HeaderPage