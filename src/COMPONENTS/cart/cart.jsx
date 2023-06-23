/** @format */
import React from "react";
// import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import CartItem from "./cart-item";
const Cart = () => {
  const { cartItems, getTotalAmount, checkout, productItems } =
    useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="shopTitle">
        <h1>Pets Shop Cart</h1>
      </div>
      <div className="cartProduct">
        {productItems.map((product) => {
          if (cartItems[product.id] !== 0) {
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
      <div className="text-center mt-5">
        <p style={{ fontSize: "2rem" }}>
          SubTotal:{" "}
          <span style={{ fontSize: "1.5rem", color: " #ff642e" }}>
            ${totalAmount}
          </span>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/shop")}>
          Continue
        </button>

        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            checkout();
            navigate("/");
          }}>
          Checkout
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}></div>
    </div>
  );
};

export default Cart;
