describe('Sign-up page elements', () => {

    beforeEach(() => {
        cy.visit('/sign-up/create')
      })

    //Validate if the user is on the correct page and all elements are displayed
      it('Validate all page elements', () => {
        cy.title().should('be.equal', 'Create a company account')
        cy.get('[data-testid="logo-CEEZER"]').should("exist")
        cy.get("h2").contains("Create a company account")
        cy.get('[data-testid="select-buyer-button"]').should("exist")
        cy.get('[data-testid="select-supplier-button"]').should("exist")
        cy.get('[data-testid="company-name-input"]').should("exist")
        cy.get('[data-testid="email-input"]').should("exist")
        cy.get('[data-testid="first-name-input"]').should("exist")
        cy.get('[data-testid="last-name-input"]').should("exist")
        cy.get('[data-testid="signup-button"]').should("exist")
        cy.get('.chakra-heading').contains('The platform for catalyzing planetary progress—smarter.')

    })


    //Validate account type text
    it('Validate the message according to the selected account type', () => {
        cy.get('[data-testid="select-buyer-button"]').click()
        cy.get('.chakra-heading')
            .should('contain','Future-proof carbon credit portfolios—guided by data.')
        cy.get('[data-testid="select-supplier-button"]').click()
        cy.get('.chakra-heading')
            .should('contain','Join global net-zero portfolios—seamlessly.')
    })

})