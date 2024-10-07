describe('Validate email format with a regex function', () => {

    beforeEach(() => {
        cy.visit('/sign-up/create')
      })

//////////////////////// EMAILS SCRIPT ///////////////////////////

    //Define the value of the number of emails that the script will generate for the Negative and Positive scenarios
    const nTimes = 5;

    const emailsError = (num) => {
        var email = "";
        var possible = "qwer@.ty";
        for (var i = 0; i < num; i++){
            email += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return email;
    }

    function generateRandomEmail(numUsername, numDomain) {
        var possibleUsername = "abcdefghijklmnopqrstuvwxyz0123456789";
        var possibleDomain = "abcdefghijklmnopqrstuvwxyz";
        var email = "";
 
        for (var i = 0; i < numUsername; i++) {
            email += possibleUsername.charAt(Math.floor(Math.random() * possibleUsername.length));
        }
        email += "@";

        for (var i = 0; i < numDomain; i++) {
            email += possibleDomain.charAt(Math.floor(Math.random() * possibleDomain.length));
        }
    
        var topLevelDomains = [".com", ".pt", ".org", ".com.eu", ".web.co.uk"];
        email += topLevelDomains[Math.floor(Math.random() * topLevelDomains.length)];
    
        return email;
    }

    

    const validateEmail = (email) => {
        var rgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return rgx.test(email);
    }

//////////////////////// EMAILS SCRIPT ///////////////////////////

    for (let i = 0; i < nTimes; i++) {
        let TestEmail = emailsError(10)
        let EmailState = validateEmail(TestEmail)

    it("Email format validation - Negative -"+ TestEmail +" - " + EmailState,() => {
        cy.get('[data-testid="email-input"]').type(TestEmail)
        cy.get('[data-testid="signup-button"]').click()
            if(!EmailState){
                cy.get('.chakra-form__error-message')
                    .should('contain','Please enter a company email address')
            }else{
                cy.get('.chakra-form__error-message')
                .should('not.contain','Please enter a company email address')
            }
        })
    }

    for (let i = 0; i < nTimes; i++) {
        var TestEmail = generateRandomEmail(8, 5);
        let EmailState = validateEmail(TestEmail)
    it("Email format validation - Positive -"+ TestEmail +" - " + EmailState,() => {
            cy.get('[data-testid="email-input"]').type(TestEmail)
            cy.get('[data-testid="signup-button"]').click()
                if(EmailState){
                    cy.get('.chakra-form__error-message')
                        .should('not.contain','Please enter a company email address')
                }else{
                    cy.get('.chakra-form__error-message')
                    .should('contain','Please enter a company email address')
                }
    })       
    }
})