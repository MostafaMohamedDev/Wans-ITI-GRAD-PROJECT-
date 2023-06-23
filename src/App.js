import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './COMPONENTS/Home/Home';
import Shelters from './COMPONENTS/Shelters/Shelter';
import Login from './COMPONENTS/Login/Login';
import Blogging from './COMPONENTS/Blogging/Blogging';
import User from './COMPONENTS/User/User';
import Clinc from './COMPONENTS/Clinc/Clinc';
import ClientForm from './COMPONENTS/ClientForm/ClientForm';
import UserForm from './COMPONENTS/UserForm/UserForm';
import Shop from './COMPONENTS/Shop/Shop';
import ShopContextProvider from './context/shop-context';
import Cart from "./COMPONENTS/cart/cart";
import Navtest from './COMPONENTS/NavBar/NavBar';
import Navbar from './COMPONENTS/NavBar/NavBar';
import ShelterProfile from"./COMPONENTS/Profile/Profile"
import ApiContextProvider from './context/API-Context';
import Admin from './COMPONENTS/Admin/Admin';
import Logout from './COMPONENTS/Logout/logout';
import Footer from './COMPONENTS/Footer/Footer';


const App = () => {
  return (
    <div className="background-container">
      <Navbar/>
      <ApiContextProvider>
      <ShopContextProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogging" element={<Blogging />} />
        <Route path="/clinc" element={<Clinc />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/user" element={<User />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/clientform" element={<ClientForm />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/profile" element={<ShelterProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Admin" element={<Admin/>} />
      </Routes>  
      <Footer/>

      </ShopContextProvider>
      </ApiContextProvider>
      {/* <ShelterProfile/> */}
    </div>
  );
};

export default App;
