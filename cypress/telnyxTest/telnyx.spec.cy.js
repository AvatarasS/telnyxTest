/// <reference types="cypress" />

import ContactusPage from "./POM/contactus.page.cy";
import HeaderPage from "./POM/header.page.cy";
import LoginPage from "./POM/logIn.page.cy";
import MainPage from "./POM/main.page.cy";
import MessagingPricingPage from "./POM/messaging.pricing.page.cy";
import SignupPage from "./POM/signup.page.cy";
import SolutionsPage from "./POM/solutions.page.cy";


describe("Telnyx", () => {
    let mainPage = new MainPage
    let loginPage = new LoginPage
    let signupPage = new SignupPage
    let headerPage = new HeaderPage
    let solutionsPage = new SolutionsPage
    let contactusPage = new ContactusPage
    let messagingPricingPage = new MessagingPricingPage

    beforeEach(() => {
        mainPage.visitTelnyx()
        cy.get(".c-knFmwm.c-jVWmKv").click()
    })

    it('ID#001', () => {
        headerPage.checkHeaderLogoButtonLocation()
        headerPage.checkHeaderLogoButtonRedirection('https://telnyx.com/')
    })

    it('ID#002', () => {
        headerPage.loginButtonClick()
        loginPage.bussinesEmailFieldFill("qwe@gmail.vom")
        loginPage.passwordFieldFill("1*1gf3lb4*_ga*")
        loginPage.loginSubmitButtonClick()
        loginPage.errorMessage.should('be.visible')
                              .and('contain', 'That email and password combination is not valid')
    });

    it('ID#003', () => {
        headerPage.signupButtonClick()
        signupPage.emailFieldFill('qwe@gmail.vom')
        signupPage.nameFieldFill('Dan Dan')
        signupPage.passwordFieldFill('1*1gf3lb4*_ga*W')
        signupPage.termsCheckboxCheck()
        signupPage.signupSubmitButtonClick()
        signupPage.signupMessage.should('be.visible')
                                .and('contain', 'One last step')
    });

    it('ID#004', () => {
        headerPage.signupButtonClick()
        signupPage.signupSubmitButtonClick()
        signupPage.emailErrorMessage.should('be.visible')
                                    .and('have.text', 'errorThis field is required.')
        signupPage.nameErrorMessage.should('be.visible')
                                   .and('have.text', 'errorThis field is required.')
        signupPage.termsErrorMessage.should('be.visible')
                                    .and('have.text', 'errorPlease accept the terms and conditions')
    })

    it('ID#005', () => {
        headerPage.productsButtonClick()
        headerPage.checkMenuitemButtons()
    });

    it('ID#006', () => {
        mainPage.checkSocialButtons()
    });

    it('ID#007', () => {
        headerPage.solutionsButtonClick()
        solutionsPage.paginationNextButtonClick()
    });

    it('ID#008', () => {
        headerPage.contactusButtonClick()
        contactusPage.dropdownReasonChoose()
    })

    it('ID#009', () => {
        headerPage.pricingButtonClick()
        headerPage.menuitemButtonClick(1)
        messagingPricingPage.checkTabListButtonsSwitch()
    })

    it('ID#010', () => {
        headerPage.pricingButtonClick()
        headerPage.menuitemButtonClick(1)
        messagingPricingPage.checkFaqButtons()
    })
}); 