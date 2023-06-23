import React from 'react'

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setSession , getSession , removeSession ,  getCurrentTime } from "../../helper";



const Logout = () => {

    /***********************/
    const redirect = useNavigate();
    const routeToLogin = () => {
        redirect("/login");
    }
    useEffect(()=>{
        removeSession('login'); 
        removeSession('auth'); 
        routeToLogin(); 
    },[]); 
    /***********************/
  return (
    <>
    </>
  )
}

export default Logout