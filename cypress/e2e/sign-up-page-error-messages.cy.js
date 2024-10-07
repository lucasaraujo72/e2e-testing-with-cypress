describe('Sign-up page elements', () => {

    beforeEach(() => {
        cy.visit('/sign-up/create')
      })


    //Validate all error messages
    it('Validate error messages when fields are not filled in - First screen', () => {
        cy.get('[data-testid="signup-button"]').click()
        
        cy.get('form.chakra-stack p')  
            .should('contain','Please select account type')

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(0)
            .invoke('text')
            .should('match', /^Please enter your company name$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(1)
            .invoke('text')
            .should('match', /^Please enter your email address$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(2)
            .invoke('text')
            .should('match', /^Please enter your first name$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(3)
            .invoke('text')
            .should('match', /^Please enter your last name$/)

    })


    it('Validate error messages when fields are not filled in - Buyer - Second screen', () => {
        cy.get('[data-testid="select-buyer-button"]').click()
        cy.fillFirstScreenDataAndSubmit();
        cy.get('[data-testid="create-account-button"]').click()

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(0)
            .invoke('text')
            .should('match', /^Please enter registration number$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(1)
            .invoke('text')
            .should('match', /^Enter company address and number$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(2)
            .invoke('text')
            .should('match', /^Please enter city$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(3)
            .invoke('text')
            .should('match', /^Please enter postal code$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(4)
            .invoke('text')
            .should('match', /^Please select country$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(5)
            .invoke('text')
            .should('match', /^Please select industry$/)   
    })


    it('Validate error messages when fields are not filled in - Supplier - Second screen', () => {
        cy.get('[data-testid="select-supplier-button"]').click()
        cy.fillFirstScreenDataAndSubmit();
        cy.get('[data-testid="create-account-button"]').click()

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(0)
            .invoke('text')
            .should('match', /^Enter company address and number$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(1)
            .invoke('text')
            .should('match', /^Please enter city$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(2)
            .invoke('text')
            .should('match', /^Please enter postal code$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(3)
            .invoke('text')
            .should('match', /^Please select country$/)

        cy.get('.chakra-form__error-message')
            .should('have.class', 'css-1s5ioin')
            .eq(4)
            .invoke('text')
            .should('match', /^Please enter company description$/)

    })


   
})