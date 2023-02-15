const express = require("express");
const checkoutRouter = express.Router();
const { checkout } = require("../controller/checkout");

checkoutRouter.post("/create-checkout-session", checkout);

module.exports = { checkoutRouter };
