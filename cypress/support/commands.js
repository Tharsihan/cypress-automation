// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })



import 'cypress-audit/commands';
import 'cypress-iframe';

Cypress.Commands.add('login', (username, password) => {
    cy.visit("https://www8.rakqa.fr/connect");
    cy.get('input[data-qa="user_identifier"]').type(username);
    cy.get('input[data-qa="user_password"]').type(password).type("{enter}");
});
Cypress.Commands.add('loginMobile', (username, password) => {
    cy.visit("https://www8.rakqa.fr/connect");
    cy.wait(1000);
    cy.get('input[name="j_username"]').type(username);
    cy.get('input[name="j_password"]').type(password);
    cy.get('div[name="submitLogin"]').click();
});
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
});

/*
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit("https://www8.rakqa.fr/connect");
        cy.get('input[data-qa="user_identifier"]').type(username);
        cy.get('input[data-qa="user_password"]').type(password).type("{enter}");
        cy.location("pathname").should("include", "/user");
    });*/
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




