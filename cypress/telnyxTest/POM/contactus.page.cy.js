class ContactusPage{

    get dropdownReason(){
        return cy.get('[id="Reason_for_Contact__c"]')
    }

    dropdownReasonChoose(){
        this.dropdownReason.select(1)
                           .should('have.value', 'Sales-Inquiry')
    }

}
export default ContactusPage