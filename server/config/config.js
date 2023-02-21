require("dotenv").config();
module.exports = {
    stripeSecreteKey: process.env.STRIPE_SECRETE_KEY,
    clientBaseUrl: process.env.CLIENT_BASE_URL,
};
