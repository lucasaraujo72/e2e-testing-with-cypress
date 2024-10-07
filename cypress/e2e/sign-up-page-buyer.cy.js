describe('Sign-up page - Account creation - Buyer option', () => {

    beforeEach(() => {
        cy.visit('/sign-up/create')
      })

    it('Buyer - Account creation', () => {
     
      //First screen
      cy.get('[data-testid="select-buyer-button"]').click()
      cy.fillFirstScreenDataAndSubmit();

      //Second screen
      cy.fillSecondScreenBuyerDataAndSubmit();

      //Validate success message
      cy.validateSuccessMessageAccountCreation();


    })

})