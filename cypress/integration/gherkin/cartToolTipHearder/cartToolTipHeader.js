import { Given,When,Then, And } from "@badeball/cypress-cucumber-preprocessor"; // have to import these, so that cypress can recognise cucumber keywords

Given("a user who is not logged in", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    cy.visit("https://www8.rakqa.fr/");
    cy.get('#header > div > div > div > header > div.mt2.mb2.z-10').should('exist');
    cy.percySnapshot('Header Rakuten',{ scope: '#header > div > div > div > header > div.mt2.mb2.z-10' });
    cy.get('#footer > div > div > div > footer').should('exist').scrollIntoView();
    cy.wait(10000);
    cy.percySnapshot('Footer Rakuten',{ scope: '#footer > div > div > div > footer' });
    cy.login('qatharsi@yopmail.com','Rakuten2020');
    cy.location("pathname").should("include", "/user");
    cy.get('#struct_left > div > div:nth-child(13) > ul > li:nth-child(3) > a').should('be.visible').click();
    cy.get('#tfaSettingHypernovaContainer > div > div > div > div > div > div > div').should('exist');
    cy.percySnapshot('TFA settings component',{ scope: '#tfaSettingHypernovaContainer > div > div > div > div > div > div > div' });

});
/*When("he has 1 item with warranty in the cart", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    cy.get('div[data-qa="search_input"]', {timeout: 5000}).should('be.visible').type("airpods").type("{enter}");
    cy.get('div[class="grid_col grid_col-12 col_nogutter desktopNavAndSearch_searchClo_kNu"]', {timeout: 5000}).should('be.visible');
    cy.get('div[class="panelCta_layoutBtn_RBj "]').eq(0).should('be.visible').click();
    cy.wait(1000);
    cy.get('button[class="button_v2 buttonPrimary "]').eq(0).should('be.visible').click();
    cy.get('button[class="Button_rkt__btn_n-J Button_black_2CM "]').eq(0).should('be.visible').click();
    cy.get('button[class="Button_rkt__btn_n-J Button_black_2CM utils_ml_16_Dcz"]').eq(0).should('be.visible').click();
});

When("he opens the monolith cart tooltip", () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    cy.wait(5000);
    cy.get('.navItem-module_root_1mX:nth-child(7) > .global-module_no-underline_fIr').should('be.visible').trigger('mouseover');
});


When("he clicks on the warranty's recycle bin icon", () => {
    cy.wait(1000);
    cy.get('div[class="global-module_pointer_2B7 global-module_ml4_fhx global-module_mr3_28R cartTooltip-module_deleteIcon_pym global-module_db_3Jc"]').eq(0).should('be.visible').click();
});

When("the warranty is deleted from the tooltip and the item is still displayed", () => {
    cy.wait(1000);
    cy.get('div[class="global-module_flex_2q1 global-module_items-center_11F"]').eq(0).should('be.visible');
});*/

after(() => {
    cy.clearLocalStorage();

});