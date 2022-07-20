import { Given,When,Then, And } from "@badeball/cypress-cucumber-preprocessor"; // have to import these, so that cypress can recognise cucumber keywords

Given("a seller who is logged in", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    if(Cypress.env('platform') === "desktop"){
        cy.login('vendeurtest1','Rakuten2020');
        cy.location("pathname").should("include", "/user");
    }
});

When("he navigates to {string}", (url) => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    cy.visit("https://www8.rakqa.fr"+url+"");
    cy.percySnapshot('Home Page');
});

When("the {string} GTM should be sent", (gtmtag) => {
    cy.window().its('dataLayer');
});

