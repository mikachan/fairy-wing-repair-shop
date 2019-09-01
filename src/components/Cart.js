import React, { useContext } from "react";

import { Button } from "react-bootstrap";
import { CartContext } from "./CartProvider";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
    const { cart, count, mode, toggle } = useContext(CartContext);
    return (
        <>
            <Button
                onClick={() => toggle()}
                style={{
                    position: "fixed",
                    right: "2rem",
                    top: "1.4rem",
                    zIndex: "2"
                }}
            >
                {mode ? "→" : "Shopping Bag"}
            </Button>
            <div
                style={{
                    display: mode ? "initial" : "none",
                    position: "fixed",
                    right: 0,
                    top: 0,
                    height: "100vh",
                    padding: "2rem",
                    backgroundColor: "white",
                    maxWidth: 400,
                    width: "100%",
                    zIndex: 1
                }}
            >
                <h3>Shopping Bag</h3>
                {cart.map(([sku, quantity]) => (
                    <CartItem key={sku.id} sku={sku} quantity={quantity} />
                ))}
                <Checkout />
            </div>
        </>
    );
};

export default Cart;
