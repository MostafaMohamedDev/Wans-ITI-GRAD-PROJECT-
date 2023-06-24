import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProductsTable from './products-table';
import UsersTable from './users-table';
// import Blogs from './COMPONENTS/Admin/Blogs';

const Admin = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button className='btn btn-danger'><Link to="users">Users</Link></button>
      <button className='btn btn-danger'><Link to="products">products</Link></button>
      <Routes>
        <Route path="products" element={<ProductsTable/>} />
        <Route path="users" element={<UsersTable/>} />
        {/* <Route path="/admin/blogs" element={<Blogs />} /> */}
      </Routes>
    </div>
  );
};

export default Admin;