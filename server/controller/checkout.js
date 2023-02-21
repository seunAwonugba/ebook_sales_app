const config = require("../config/config");
const stripe = require("stripe")(config.stripeSecreteKey);

const checkout = async (req, res) => {
    console.log(req.body);
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    unit_amount: req.body.price,
                    product_data: {
                        name: "Web Development Ebook",
                        description: "Web Development Ebook",
                    },
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `${config.clientBaseUrl}/success`,
        cancel_url: `${config.clientBaseUrl}/failure`,
    });

    res.status(201).json({
        success: true,
        data: session,
    });
};

module.exports = { checkout };
