import { Given,When,Then, And } from "@badeball/cypress-cucumber-preprocessor"; // have to import these, so that cypress can recognise cucumber keywords

Then("I should see web audit results", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    cy.lighthouse(
        {
            performance: 15,
            accessibility: 90,
            'best-practices': 80,
            seo: 80,
        },
        {
            formFactor: 'desktop',
            screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config('viewportWidth'),
                height: Cypress.config('viewportHeight'),
                deviceScaleRatio: 1,
            },
        },
    );
});