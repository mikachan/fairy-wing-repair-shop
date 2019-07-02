import React, { useContext } from "react";
import { navigate } from "gatsby";
import StripeCheckout from "react-stripe-checkout";
import { CartContext } from "./CartProvider";
import icon from "../images/gatsby-icon.png";

const Checkout = () => {
    const { cart, count, total } = useContext(CartContext);

    const onToken = async (token, addresses) => {
        const items = Object.entries(cart).map(([skuId, quantity]) => ({
            type: "sku",
            parent: quantity[0].id,
            quantity: quantity[1]
        }));

        // TODO: Is this a permanent fix?

        let response;
        try {
            response = await fetch("/.netlify/functions/orderCreate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token,
                    order: {
                        currency: "gbp",
                        items,
                        shipping: {
                            name: addresses.shipping_name,
                            address: {
                                line1: addresses.shipping_address_line1,
                                line2: addresses.shipping_address_line2 || "",
                                city: addresses.shipping_address_city,
                                state: addresses.shipping_address_state,
                                postal_code: addresses.shipping_address_zip,
                                country: addresses.shipping_address_country_code
                            }
                        },
                        email: token.email
                    }
                })
            }).then(response => response.json());
        } catch (err) {
            alert(err.message);
        }

        localStorage.setItem("cart", "{}");

        if (response.source) {
            navigate(`/order?id=${response.source}`);
        }
    };

    return (
        <StripeCheckout
            token={onToken}
            stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
            name="Fairy Wing Repair Shop" // the pop-in header title
            description={`${count} Items`} // the pop-in header subtitle
            image={icon} // the pop-in header image (default none)
            panelLabel="Pay" // prepended to the amount in the bottom pay button
            amount={total} // cents
            currency="GBP"
            locale="en"
            shippingAddress
            billingAddress
            zipCode
            allowRememberMe
        >
            <button>Checkout for £{total / 100}</button>
        </StripeCheckout>
    );
};

export default Checkout;
