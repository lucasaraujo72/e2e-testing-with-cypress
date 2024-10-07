describe('Sign-up page - Account creation - Supplier option', () => {

    beforeEach(() => {
        cy.visit('/sign-up/create')
      })

    it('Supplier - Account creation', () => {
     
      //First screen
      cy.get('[data-testid="select-supplier-button"]').click();
      cy.fillFirstScreenDataAndSubmit();

      //Second screen
      cy.fillSecondScreenSupplierDataAndSubmit();

      //Validate success message
      cy.validateSuccessMessageAccountCreation();

    })

})