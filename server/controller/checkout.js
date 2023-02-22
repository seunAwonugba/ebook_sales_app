const config = require("../config/config");
const stripe = require("stripe")(config.stripeSecreteKey);
const validator = require("validator");
const { BadRequest } = require("../errors");

const checkout = async (req, res, next) => {
    const {
        name,
        email,
        phoneNumber,
        product,
        billingAddress,
        shippingAddress,
        price,
        quantity,
    } = req.body;

    if (validator.default.isEmpty(name)) {
        return next(new BadRequest("Name field cannot be empty"));
    }

    if (!validator.default.isEmail(email)) {
        return next(new BadRequest("Kindly provide a valid email address"));
    }

    if (validator.default.isEmpty(phoneNumber)) {
        return next(new BadRequest("Phone number field cannot be empty"));
    }

    if (validator.default.isEmpty(billingAddress)) {
        return next(new BadRequest("Address field cannot be empty"));
    }

    if (validator.default.isEmpty(shippingAddress)) {
        return next(new BadRequest("Delivery address cannot be empty"));
    }

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    unit_amount: price * 100,
                    product_data: {
                        name: product,
                        description: product,
                    },
                },
                quantity: quantity,
            },
        ],
        mode: "payment",
        success_url: `${config.clientBaseUrl}/success`,
        cancel_url: `${config.clientBaseUrl}/`,
    });

    res.status(201).json({
        success: true,
        data: session,
    });
};

module.exports = { checkout };
