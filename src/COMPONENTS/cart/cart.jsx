/** @format */
import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"
import React from "react";
// import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import CartItem from "./cart-item";
const Cart = () => {
  const { cartItems, getTotalAmount, checkout,productItems } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  console.log(cartItems);
  return (
    <div className="cart">
      <div className="shopTitle">
        <h1>Pets Shop Cart</h1>
      </div>
      <div className="cartProduct">
        {productItems.map((product) => {
          if (cartItems[product.id] !== 0) {
            // console.log(productItems);
            return (
              <CartItem
                key={product.id}
                data={{ ...product }}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <p>subTotal: ${totalAmount}</p>
      <button onClick={() => navigate("/")}>Continue Shopping</button>
      <button
        onClick={() => {
          checkout();
          navigate("/");
        }}>
        Checkout
      </button>
        <PayPalScriptProvider options={{"client-id":"AdhDbKF_Lov12WaVtt1dRbyhS4W3Np2M9SfjGlY5vrs4q8NOwMjG8icMqBxlvvdsOWjTilS-iVYyWdpD"}}>
            <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalAmount,
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                const name = details.payer.name.given_name;
                alert("Transaction completed by " + name);
              }}
            />
        </PayPalScriptProvider>
    </div>
  );
};

export default Cart;
