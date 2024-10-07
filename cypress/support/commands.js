/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('fillFirstScreenDataAndSubmit', () => {

    ////////////////////////////////////////////////////////

    // Generate a random data using faker.js
    let companyName = faker.company.catchPhrase() + ' '+ faker.location.countryCode('numeric');
    var dateNow = Date.now();
    let emailAddress = 'user'+dateNow+'@mail.com';
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();

    ////////////////////////////////////////////////////////
    
    cy.get('[data-testid="company-name-input"]').type(companyName)
    cy.get('[data-testid="email-input"]').type(emailAddress)
    cy.get('[data-testid="first-name-input"]').type(firstName)
    cy.get('[data-testid="last-name-input"]').type(lastName)
    cy.get('[data-testid="signup-button"]').click()
})


Cypress.Commands.add('fillSecondScreenBuyerDataAndSubmit', () => {
    
    ////////////////////////////////////////////////////////

    // Generate a random data using faker.js
    let registrationNumber = faker.number.int({ min: 500000, max: 999999 })
    let vatId = faker.number.int({ min: 50000, max: 99999 })
    let streetAddress = faker.location.streetAddress(true);
    let city = faker.location.city();
    let postalCode = faker.location.zipCode()
    let industry = ['Aerospace', 'Insurance', 'Construction', 'Other', 'Technology & IT', 'Services'];
    let randomIndustry = industry[Math.floor(Math.random() * industry.length)];

    ////////////////////////////////////////////////////////

    cy.get('[data-testid="registration-number-input"]').type(registrationNumber)
    cy.get('[data-testid="vat-number-input"]').type(vatId)
    cy.get('[data-testid="address-input"]').type(streetAddress)
    cy.get('[data-testid="city-input"]').type(city)
    cy.get('[data-testid="zip-input"]').type(postalCode)
    cy.get('[data-testid="country-select"]').click()
    cy.get('[data-testid="country-select"] p.chakra-text').contains('Portugal').click();
    cy.get('[data-testid="industry-select"]').click()
    cy.get('[data-testid="industry-select"] p.chakra-text').contains(randomIndustry).click();
    cy.get('[data-testid="create-account-button"]').click()
})

Cypress.Commands.add('fillSecondScreenSupplierDataAndSubmit', () => {

    ///////////////////////////////////////////////////////

    // Generate a random data using faker.js
    let streetAddress = faker.location.streetAddress(true);
    let city = faker.location.city();
    let postalCode = faker.location.zipCode();
    let vatId = faker.number.int({ min: 50000, max: 99999 });
    let description = faker.lorem.sentences(3, '\n');

    ////////////////////////////////////////////////////////

    cy.get('[data-testid="address-input"]').type(streetAddress)
    cy.get('[data-testid="city-input"]').type(city)
    cy.get('[data-testid="zip-input"]').type(postalCode)
    cy.get('[data-testid="country-select"]').click()
    cy.get('[data-testid="country-select"] p.chakra-text').contains('Portugal').click();
    cy.get('[data-testid="vat-number-input"]').type(vatId)
    cy.get('[data-testid="description-textarea"]').type(description)
    cy.get('[data-testid="create-account-button"]').click()
})

Cypress.Commands.add('validateSuccessMessageAccountCreation', () => {
    cy.get('.chakra-stack > .chakra-heading')
        .invoke('text')
        .should('match', /^Thanks for signing up to CEEZER./)

      cy.get('.chakra-stack > .chakra-text')
        .invoke('text')
        .should('match', /^We are reviewing your company information and will get back to you shortly with an invitation to access the platform./)
})