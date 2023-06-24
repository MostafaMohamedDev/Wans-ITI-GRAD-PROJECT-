import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { faTrashAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { constants } from '../../constants';
import "./cart-item.css";

const URL = constants.API_HOST; 

//component
const CartItem = ({ data }) => {
  const { addToCart, removeFromCart, cartItems, updateCartItem } =
    useContext(ShopContext);

  const { id, name, price, image } = data;

  return (
    <div className="cartSection">
      <div className="container  ">
        <div className="row cart-card m-5  ">
          <div className="col-sm-12 col-md-4 cart-Item  ">
            <div className="preview">
              <img
                src={URL+"/" + image}
                alt="Item Preview"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-8 ">
            <div className="details">
              <h3 className="productName text-center">{name}</h3>
              <h5 className="productPrice text-center">{price}</h5>
              <div className="d-flex justify-content-center align-items-center cardCard ">
                <div className="picker">
                  <button
                    className="btnBTN btn-quantity"
                    onClick={() => addToCart(id)}
                  >
                    <FontAwesomeIcon icon={faPlus} color="#ff642e" />
                  </button>
                  <input
                    style={{
                      textAlign: "center",
                      color: "#ff642e",
                      border: "0.1rem solid #ccc",
                      borderRadius: "0.4rem",
                      margin: "5px",
                    }}
                    type="number"
                    className="form-control"
                    value={cartItems[id]}
                    onChange={(e) => updateCartItem(+e.target.value, id)}
                  />
                  <button
                    className="btn btn-quantity"
                    onClick={() => removeFromCart(id)}
                  >
                    <FontAwesomeIcon icon={faMinus} color="#ff642e" />
                  </button>
                  {/* <a href="#" className="btn btn-remove">
                    <FontAwesomeIcon icon={faTrashAlt} color="#ff642e" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
