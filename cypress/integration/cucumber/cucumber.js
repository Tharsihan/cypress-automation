import { Given,When,Then, And } from "@badeball/cypress-cucumber-preprocessor"; // have to import these, so that cypress can recognise cucumber keywords

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
});
    Given("Connect Login page", () => {
        if(Cypress.env('platform') === "mobile"){
            cy.viewport(414,896);
            cy.loginMobile('qatharsi@yopmail.com','Rakuten2020');
        }
        if(Cypress.env('platform') === "desktop"){
            cy.login('qatharsi@yopmail.com','Rakuten2020');
        }
        cy.location("pathname").should("include", "/user");
    });

    When("Search a product", () => {
        if (Cypress.env('platform') === "desktop") {
            cy.wait(1000);
            cy.get('div[data-qa="search_input"]', {timeout: 5000}).should('be.visible').type("samsung").type("{enter}");
            cy.get('span[class="panelCta_labelCtaProduct_BsO  flex"]').eq(0).click();
        }
        if (Cypress.env('platform') === "mobile") {
            cy.viewport(414,896);
            cy.wait(1000);
            cy.get('div[data-qa="search_input"]', {timeout: 5000}).should('be.visible').type("iphone").type("{enter}");
            cy.get('div[class="grid_col-12 pt-16 pb-16 col_nogutter bb productList_borderColor_0qD ph-8"]').eq(0).click();
        }
    });

When(/^The cart is displayed and choose the shipping expedition$/, function () {
    
});
