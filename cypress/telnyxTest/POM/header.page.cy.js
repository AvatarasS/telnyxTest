require('@cypress/xpath');

class HeaderPage{

    get headerLogoButton(){
        return cy.get('header').find('[class="c-buvHyO c-buvHyO-ikFbPuA-css"]')
                               .find('svg')
    }

    checkHeaderLogoButtonLocation(){
        this.headerLogoButton.should('have.css', 'position', 'static')
                             .and('have.css', 'margin-right', '0px')
                             .and('have.css', 'margin-left', '0px')
    }

    checkHeaderLogoButtonRedirection(link){
        this.headerLogoButton.should('be.visible')
                             .click()
        cy.url().should('eq', link)
    }

    get loginButton(){
        return cy.get('[class*="c-buvHyO-ideTXhm-css"] a[href*=portal]')
    }

    loginButtonClick(){
        this.loginButton.invoke('removeAttr', 'target')
                        .click()
        cy.url().should('contain', 'portal')
    }

    get signupButton(){
        return cy.get('[id="header-sign-up"]')
    }

    signupButtonClick(){
        this.signupButton.click()
        cy.url().should('contain', 'sign-up')
    }

    get productsButton(){
        return cy.xpath('//*[@id="radix-:R55jm:"]')
    }

    productsButtonClick(){
        this.productsButton.click()
                           .should('have.attr', 'data-state', 'open')
    }

    get menuitemButtons(){
        return cy.get('div[role="menuitem"]')
    }

    checkMenuitemButtons(){
        this.menuitemButtons.each(($el) => {
            cy.wrap($el).should('be.visible')
        })
            .its('length')
            .should('be.eq', 7)
    }

    get solutionsButton(){
        return cy.xpath('//*[@class="c-ckejlg"][not(@id="navigation")]/a')
    }

    solutionsButtonClick(){
        this.solutionsButton.click()
        cy.url().should('contain', 'solutions')
    }

    get contactusButton(){
        return cy.get('[class*="ideTXhm-css"] a[href*="contact"]')
    }

    contactusButtonClick(){
        this.contactusButton.click()
        cy.url().should('contain', 'contact')
    }

    get pricingButton(){
        return cy.xpath('//*[@id="radix-:R5djm:"]')
    }

    menuitemButtonClick(i){
        this.menuitemButtons.eq(i - 1).find('a')
                                      .should('have.attr', 'href')
                                      .then((href) => {
                                        this.menuitemButtons.eq(i - 1).click()
                                        cy.url().should('contain', `${href}`)
                                      })
    }

    pricingButtonClick(){
        this.pricingButton.click()
        this.menuitemButtons.should('be.visible')
    }
}

export default HeaderPage