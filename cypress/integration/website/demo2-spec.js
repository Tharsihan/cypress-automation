
const mobile = "iphone-xr";
describe('Flow Payment', function () {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => false);
    });

    const sizes = [mobile, [1024, 768]]
    sizes.forEach((size) => {
        it(`Connect login page ${size}`, function () {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            }
            else {
                cy.viewport(size);
            }
            cy.visit('https://www8.rakqa.fr/connect');
            cy.reload(true);
            cy.get('input[data-qa="user_identifier"]').type("qatharsi@yopmail.com");
            cy.get('input[data-qa="user_password"]').type("Rakuten2020").type("{enter}");
            //assertion to verify the login
            cy.location("pathname").should("include", "/user");
        });

        it('Search a product', function () {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
                cy.wait(1000);
                cy.get('div[data-qa="search_input"]').type("samsung").type("{enter}");
                cy.get('span[class="panelCta_labelCtaProduct_BsO  flex"]').eq(0).click();
            }
            else {
                cy.viewport(size);
                cy.wait(1000);
                cy.get('div[class="global-module_flex_2q1 global-module_helper_flex-occupy_3p9 global-module_relative_2Gv"]').eq(0).type("samsung").type("{enter}");
                cy.get('div[class="grid_col-12 pt-16 pb-16 col_nogutter bb productList_borderColor_0qD ph-8"]').eq(0).click();

            }
        });

        it('Add the product in the cart', function () {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            }
            else {
                cy.viewport(size);
                cy.wait(10000);
                cy.get('button[class="button_v2 buttonPrimary"]').eq(0).scrollIntoView().should('be.visible');
                cy.get('button[class="button_v2 buttonPrimary"]').eq(0).click({force:true});
                cy.get('div[class="MuiDialogContent-root jss6 MuiDialogContent-dividers"]').eq(0).should('be.visible');
                cy.get('button[data-qa="button-core"]').eq(0).should('be.visible').click();
            }

        });

       /* it('Display warranty popin and clik on the button refuse', function () {
            cy.get('div[class="Button_rkt__btn_n-J Button_gray-o_2jr"]').eq(0).click();
        });
        it('Display warranty popin and clik add in the cart', function () {

        });*/
    });
});