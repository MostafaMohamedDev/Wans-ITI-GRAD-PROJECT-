import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { faTrashAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./cart-item.css";
const CartItem = ({ data }) => {
  const { addToCart, removeFromCart, cartItems, updateCartItem } =
    useContext(ShopContext);

  const { id, name, price, image } = data;

  return (
    <div className="container">
      <div className="items">
        <div className="grid_4 item">
          <a href="#" className="btn-remove">
            <FontAwesomeIcon icon={faTrashAlt} />
          </a>
          <div className="preview">
            <img src={image} alt="Item Preview" />
          </div>
          <div className="details">
            <h3 className="productName">{name}</h3>
            <h6 className="productPrice">{price}</h6>
          </div>
          <div className="inner_container">
            <div className="col_1of2 align-center picker">
              <button
                className="btn-quantity plus"
                onClick={() => addToCart(id)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <div className="col_1of2 quantity-text">
                <input
                  style={{
                    textAlign: "center",
                    color: "red",
                    borderRadius: "7%",
                  }}
                  type="number"
                  value={cartItems[id]}
                  onChange={(e) => updateCartItem(+e.target.value, id)}
                />{" "}
              </div>
              <button
                className="btn-quantity minus"
                onClick={() => removeFromCart(id)}
              >
                {" "}
                <FontAwesomeIcon icon={faMinus} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
