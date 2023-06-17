import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CONSTANTS } from '../constants';
export const ShopContext = createContext(null);
const jsonPort = CONSTANTS.JSON_SERVER.PORT; 

const baseURL = 'http://localhost:'+jsonPort+'/products';
const cartURL = 'http://localhost:'+jsonPort+'/cart';

const defaultCart = (items) => {
  let cart = {};
  for (let i = 0; i < items.length; i++) {
    cart[items[i].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    axios.get("http://ah.khaledfathi.com/api/product").then((res) => {
      console.log(res.data.data);
      setProductItems(res.data.data);
      // console.log(productItems);
    });

    axios.get(cartURL).then((res) => {
      if (res.data) {
        setCartItems(res.data);
      } else {
        setCartItems(defaultCart(productItems));
      }
    });
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    axios.post(cartURL, { ...cartItems, [itemId]: cartItems[itemId] + 1 })
      .then((response) => {
        // handle successful response
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    axios.post(cartURL, { ...cartItems, [itemId]: cartItems[itemId] - 1 })
      .then((response) => {
        // handle successful response
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const updateCartItem = (newValue, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newValue }));
    axios.post(cartURL, { ...cartItems, [itemId]: newValue })
      .then((response) => {
        // handle successful response
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const checkout = () => {
    axios.post(cartURL, {});
    const newCartItems = {};
    for (let i = 1; i <= productItems.length + 1; i++) {
      newCartItems[i.toString()] = 0;
    }
    axios.post(cartURL, newCartItems)
      .then((response) => {
        console.log("Cart updated successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error updating cart:", error.response.data);
      });
    setCartItems(newCartItems);
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productItems.find((product) => product.id === +item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  if (!cartItems) {
    return <div>Loading...</div>;
  }

  const contextValues = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalAmount,
    checkout,
    productItems,
  };

  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;