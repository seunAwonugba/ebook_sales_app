const config = require("../config/config");
const stripe = require("stripe")(config.stripeSecreteKey);
require("dotenv").config({ path: "../.env" });
// console.log(config.clientBaseUrl);

const checkout = async (req, res) => {
    const { product } = req.body;
    const productName = product.name;
    const productPrice = product.price;
    const productQuantity = product.quantity;
    const session = await stripe.checkout.sessions.create({
        customer_details: {
            address: null,
            email: "example@example.com",
            name: null,
            phone: null,
            tax_exempt: "none",
            tax_ids: null,
        },
        customer_email: "seunawonugba@gmail.com",
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: productPrice,
                quantity: productQuantity,
            },
        ],
        mode: "payment",
        success_url: `${config.clientBaseUrl}/success`,
        cancel_url: `${config.clientBaseUrl}/failure`,
        submit_type: "checkout",
    });

    res.json({ id: session.id });
};

module.exports = { checkout };
