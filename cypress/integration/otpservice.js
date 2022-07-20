const otplib = require("otplib");
const getOTPcode = async(secret) => {
    const token = otplib.authenticator.generate(secret);
    cy.log(token)
    console.log(token);
    try {
        const tokenValid = otplib.authenticator.check(token, secret);
        if(tokenValid === true) {
            return token;
        }
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getOTPcode
};
