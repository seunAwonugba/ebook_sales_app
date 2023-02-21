import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import service from "../service/service";
import { useNavigate } from "react-router-dom";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function PayWithCardModal(props) {
    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [billingAddress, setBillingAddress] = React.useState("");
    const [shippingAddress, setShippingAddress] = React.useState("");

    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value);
    };
    const navToStripeCheckout = (stripeCheckoutUrl) => {
        window.location.replace(stripeCheckoutUrl);
    };

    const onCheckout = async (e) => {
        e.preventDefault();
        const userResponse = {
            name,
            email,
            phoneNumber,
            billingAddress,
            shippingAddress,
            price: 2500,
            quantity: 1,
        };

        try {
            const response = await service.post(
                "/create-checkout-session",
                userResponse
            );
            if (response.data.success === true) {
                navToStripeCheckout(response.data.data.url);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Modal
                open={props.showModalProps}
                onClose={props.closeModalProps}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <span class="close" onClick={props.closeModalProps}>
                        &times;
                    </span>

                    <form>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="firstname lastname"
                                onChange={(e) => inputChangeHandler(setName, e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@example.com"
                                onChange={(e) =>
                                    inputChangeHandler(setEmail, e)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                placeholder="phone number"
                                onChange={(e) =>
                                    inputChangeHandler(setPhoneNumber, e)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="address"
                                onChange={(e) =>
                                    inputChangeHandler(setBillingAddress, e)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="deliveryAddress">
                                Delivery Address
                            </label>
                            <input
                                type="text"
                                id="deliveryAddress"
                                placeholder="delivery address"
                                onChange={(e) =>
                                    inputChangeHandler(setShippingAddress, e)
                                }
                            />
                        </div>
                        <div className="modal-button">
                            <div></div>
                            <button
                                class="pay"
                                type="submit"
                                onClick={onCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
