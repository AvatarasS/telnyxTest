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

    it('ID#001 Test the Telnyx logo redirects to the Main page from Solution page.', () => {
        headerPage.clickSolutionsButton()
        headerPage.checkHeaderLogoButtonRedirection('https://telnyx.com/')
    })

    it('ID#002 Test the user receives an error message on LogIn page when logging in with an invalid email and password combination.', () => {
        headerPage.clickLoginButton()
        cy.fixture("testData.json").then((testData) => {
            loginPage.fillBussinesEmailField(testData.login.email)
            loginPage.fillPasswordField(testData.login.password)
        });
        loginPage.clickLoginSubmitButton()
        loginPage.errorMessage.should("be.visible")
                              .and("contain", "That email and password combination is not valid")
    });

    it('ID#003 Test the Signup form functionality on Signup page to be filled with credentials and checkbox to be checked.', () => {
        headerPage.clickSignupButton();
        cy.fixture("testData.json").then((testData) => {
            signupPage.checkFillEmailField(testData.signup.email)
            signupPage.checkFillNameField(testData.signup.name)
            signupPage.checkFillPasswordField(testData.signup.password)
        });
        signupPage.checkEnablingTermsCheckbox()
     });

    it('ID#004 Test the user receives an error message on Signup page when registry with empty required fields.', () => {
        headerPage.clickSignupButton()
        signupPage.clickSignupSubmitButton()
        signupPage.emailErrorMessage.should('be.visible')
                                    .and('have.text', 'errorThis field is required.')
        signupPage.nameErrorMessage.should('be.visible')
                                   .and('have.text', 'errorThis field is required.')
        signupPage.termsErrorMessage.should('be.visible')
                                    .and('have.text', 'errorPlease accept the terms and conditions')
    })

    it('ID#005 Test the displaying of buttons in Products dropdown menu in header.', () => {
        headerPage.clickProductsButton()
        headerPage.checkMenuitemButtons()
    });

    it('ID#006 Test the correct "href" attribute of social media buttons on Main page.', () => {
        mainPage.checkLinkedinButton()
        mainPage.checkTwitterButton()
        mainPage.checkFacebookButton()
    });

    it('ID#007 Test the Solutions button click and the pagination next button click functionality on Solutions page.', () => {
        headerPage.clickSolutionsButton()
        solutionsPage.checkPaginationNextButton()
    });

    it('ID#008 Test the dropdown reason choose functionality to select "Sales-Inquiry" on Contactus page.', () => {
        headerPage.clickContactusButton()
        contactusPage.checkDropdownReasonChoosing()
    })

    it('ID#009 Test the "Sender Types" tab list buttons on Messaging page switch between panels correctly.', () => {
        headerPage.clickPricingButton()
        headerPage.clickMenuitemButton(1)
        messagingPricingPage.checkTabListButtonsSwitch()
    })

    it('ID#010 Test the FAQ buttons on Messaging page expand and show the corresponding information correctly.', () => {
        headerPage.clickPricingButton()
        headerPage.clickMenuitemButton(1)
        messagingPricingPage.checkFaqButtons()
    })
}); 