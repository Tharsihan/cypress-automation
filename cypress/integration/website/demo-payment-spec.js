
const mobile = "iphone-xr";
describe('Flow Payment', function () {

    before(() => {
        if(Cypress.env('platform') === "mobile"){
            cy.viewport(414,896);
            cy.loginMobile('qatharsi@yopmail.com','Rakuten2020');
        }
        if(Cypress.env('platform') === "desktop"){
            cy.login('qatharsi@yopmail.com','Rakuten2020');
        }
    });

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => false);
        Cypress.Cookies.preserveOnce('MEM_ID', 'JSESSIONID','gzgt_');
    });
    it(`Connect login page `, function () {
        cy.location("pathname").should("include", "/user");
    });
    it('Search a product', function () {
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
    it('Add product in cart', function () {
        if (Cypress.env('platform') === "desktop") {
            cy.wait(5000);
            cy.get('button[class="button_v2 buttonPrimary"]').eq(0).should('be.visible').click({force: true});
            cy.get('button[class="Button_rkt__btn_n-J Button_black_2CM "]').eq(0).should('be.visible').eq(0).click();
        }
        if (Cypress.env('platform') === "mobile") {
            cy.viewport(414,896);
            cy.get('button[class="ui-btn-hidden"]').eq(0).scrollIntoView().click();
            cy.wait(1000);
            cy.get('div[class="didomi_accept_button"]').scrollIntoView().click();
            cy.get('div[class="AddToCartNotification-module_productContainerWrapper__qdbpJ"]').eq(0).should('be.visible');
        }
    });

    it('Go to the cart', function () {
        if (Cypress.env('platform') === "desktop") {
            cy.get('button[class="Button_rkt__btn_n-J Button_black_2CM utils_ml_16_Dcz"]').eq(0).should('be.visible').click({force:true});
        }
        if (Cypress.env('platform') === "mobile") {
            cy.viewport(414,896);
            cy.get('button[data-qa="button-core"]').eq(1).should('be.visible').click();
            cy.wait(1000);
        }
    });

        it('The cart is displayed and choose the shipping expedition', function () {
        if (Cypress.env('platform') === "desktop") {
            cy.wait(10000);
            cy.get('button[class="button_v2 buttonPrimary width_100 spacerTopM"]').eq(0).should('be.visible').eq(0).click();
        }
        if (Cypress.env('platform') === "mobile") {
            cy.viewport(414,896);
            cy.wait(10000);
            cy.get('a[class="cart-summary_validation button_v2 buttonPrimary spacerTopM"]').eq(0).should('be.visible').click();
            cy.get('button[class="cart-summary_validation button_v2 buttonPrimary spacerBottomXs spacerTopXs"]').eq(1).should('be.visible').click();
        }
    });

    it('Click on the button proceed to payment', function () {
        if (Cypress.env('platform') === "desktop") {
            cy.wait(10000);
            cy.get('button[class="button_v2 buttonPrimary width_100 spacerTopM"]').eq(0).should('be.visible').eq(0).click();
        }
        if (Cypress.env('platform') === "mobile") {
            cy.viewport(414,896);
            cy.wait(1000);
            cy.get('div[class="didomi_accept_button"]').scrollIntoView().click();
            cy.get('button[class="button_v2 buttonPrimary"]').eq(0).should('be.visible').click();
        }
    });

    it('Enter the credit cart', function () {
        if (Cypress.env('platform') === "desktop") {
            cy.wait(10000);
            cy.get('button[class="button_v2 buttonPrimary width_100 spacerTopM"]').eq(0).should('be.visible').eq(0).click();
        }
        if (Cypress.env('platform') === "mobile") {
            cy.viewport(414,896);
            cy.wait(5000);
            cy.get('div[id="processout-card-number"]').should('be.visible').type('99298282828222222')
        }
    });


    /* it('Display warranty popin and clik on the button refuse', function () {
         cy.get('div[class="Button_rkt__btn_n-J Button_gray-o_2jr"]').eq(0).click();
     });
     it('Display warranty popin and clik add in the cart', function () {

     });*/

    after(() => {
        cy.clearLocalStorage();
       
    });

});