import React from "react";
import "./Shop.css";
import shopimage from "../../images/shelter.jpg";
import Product from "./product";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import MultiActionAreaCard from "./product";
import "./Shop.css";

//component
const Shop = () => {
  const { productItems } = useContext(ShopContext);
  return (
    <>
      <div className="Shop">
        <div>
          <div>
            <img
              src={shopimage}
              alt="Header"
              className="responsive-image w-100"
            />
          </div>
        </div>
        <div className="container">
          <h1 className="HEADER">Pets Shop</h1>
          <div className="row justify-content-around my-4">
            {productItems &&
              productItems.map((product) => (
                <MultiActionAreaCard
                  key={product.id}
                  data={{ ...product }}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
