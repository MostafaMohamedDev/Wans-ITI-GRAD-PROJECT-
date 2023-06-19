
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setSession , getSession , removeSession ,  getCurrentTime } from "../../helper";


//check login for each page
/***********************/
  const redirect = useNavigate();
  const routeLogin = () => {
      redirect("/login");
  }
   useEffect(()=>{
    if (! getSession('login')){
      routeLogin(); 
    }
   },[]); 
/***********************/