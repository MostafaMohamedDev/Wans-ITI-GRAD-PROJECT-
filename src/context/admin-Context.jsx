import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const adminContext = createContext();

const AdminContextProvider = (props) => {
  const [userData, setUserData] = useState(null);
  const [productData, setProductData] = useState(null);

  // Fetch users and products on component mount
  useEffect(() => {
    axios.get('/api/users').then((response) => setUserData(response.data));
    axios.get('/api/products').then((response) => setProductData(response.data));
  }, []);

  // CRUD operations for users
  const createData = async (newUser) => {
    const response = await axios.post('/api/users', newUser);
    setUserData([...userData, response.data]);
  };

  const updateData = async (id, updatedUser) => {
    const response = await axios.put(`/api/users/${id}`, updatedUser);
    setUserData(userData.map((user) => (user.id === id ? response.data : user)));
  };

  const deleteData = async (id) => {
    await axios.delete(`/api/users/${id}`);
    setUserData(userData.filter((user) => user.id !== id));
  };

  // CRUD operations for products
  const createProduct = async (newProduct) => {
    const response = await axios.post('/api/products', newProduct);
    setProductData([...productData, response.data]);
  };

  const updateProduct = async (id, updatedProduct) => {
    const response = await axios.put(`/api/products/${id}`, updatedProduct);
    setProductData(productData.map((product) => (product.id === id ? response.data : product)));
  };

  const deleteProduct = async (id) => {
    await axios.delete(`/api/products/${id}`);
    setProductData(productData.filter((product) => product.id !== id));
  };

  return (
    <adminContext.Provider
      value={{ userData, productData, createData, updateData, deleteData, createProduct, updateProduct, deleteProduct }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;