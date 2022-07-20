describe('Check device token is trusted', function () {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => false);
    });
    it(`Send the request`, function () {
        cy.request({
            method: 'POST',
            url: 'http://172.21.101.86:33500/restprivate/authentication/device/check',
            body: {
                userId: '136251593',
                token:'eyJhbGciOiJIUzUxMiJ9.eyJEZXZpY2VUb2tlbiI6IjYxMjlhZjEzYWM3NzRjMjJiN2RiY2Q2ZWE4NDkxNjRkMTY1MzkxMTYzMjMyMiJ9.PVijLV0PFqxpqE-IBhAmuaRq-EjOjCOj80QKdJrhjc6CilPRatG7Qm5RrhE0ssDHhH6S9bDFTtNp3eE-RD5I0g',
                ipAddress:'62.23.27.114'
            },
            headers: {
                accept: 'application/json'
            }
        }).then( ({status}) => {
            expect(status).to.eq(201);
        });
    });
});