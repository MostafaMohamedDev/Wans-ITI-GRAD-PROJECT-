import { ajax } from "../libCustomAjax_v1";
import React, { createContext, useEffect, useState } from 'react'
import { setSession , getSession} from "../helper";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { constants } from '../constants';

export const ApiContext = createContext(null);

const URL = constants.API_HOST; 

const apiUrl = URL+"/api/user"
const servicesUrl = URL+"/api/service"
const productUrl = URL+"/api/product"

//Context Provider
const ApiContextProvider = (props) => {
    // site states
    const [userData, setUserData] = useState()
    const [dataUpdated, setDataUpdated] = useState(false)
    const [createStatus,setCreateStatus] = useState()
    const redirect = useNavigate();
// /////////////////////product////////////////////

     // site states product
     const [productData, setProductData] = useState(null);
     const [productUpdated, setProductUpdated] = useState(false)


       // CRUD operations for products
       const fetchProductData = async () => {
        const response = await ajax(productUrl);
        const data = await response.json();
        setProductData(data.data)  
    }

  const createProduct = async (Product) => {
    const response = await ajax(productUrl,"post",Product);
    const newProduct = await response.json();
    setProductData((productData) => [...productData, newProduct]);
    setProductUpdated(true)
  };

  const updateProductData = async (id, updatedPro) => {
    const response = await ajax(`${productUrl}/${id}`, updatedPro);
    const updatedProduct = await response.json();
    const updatedProductData = productData.map((product) => (product.id === id ? updatedProduct : product));
    setProductData(updatedProductData)
    setProductUpdated(true)
  };

  const deleteProduct = async (id) => {
    await ajax(`${productUrl}/${id}`,"delete");
    setProductData(productData.filter((product) => product.id !== id));
    setProductUpdated(true)
  };





    const fetchData = async () => {
        const response = await ajax(apiUrl);
        const data = await response.json();
        setUserData(data.data)  
    }

    const createData = async (data,file) => {
        file = (file.value)? file:null
        const response = await ajax(apiUrl, "post", data,file);
        const newData = await response.json();
        
        setCreateStatus(newData)
        setUserData((prevUserData) => [...prevUserData, newData]);
        setDataUpdated(true)
        if(newData.status){
            redirect("./login")
        }
        
    }

    // services data
    const addServiceData = async (data,file) => {
        file = (file.value)? file:null
        const response = await ajax(servicesUrl, "post", data,file);
        const newData = await response.json();
        console.log(newData);
    }

const updateData = async (id, data,file) => {
        file = (file.value)? file:null
        const response = await ajax(apiUrl + "/" + id + "/update", "POST", data,file);
        const updatedData = await response.json();
        const updatedUserData = userData.map((item) =>
            item.id == id ? updatedData : item
        );
        setUserData(updatedUserData)
        setDataUpdated(true)
        if(updatedData.status){
            axios.get(apiUrl+"/"+id).then((res)=>{
                setSession('auth' , res.data.data);
                setDataUpdated(true)
            })
        }
    }

    const deleteData = async (id) => {
        await ajax(apiUrl + "/" + id, "delete");
        setUserData(userData.filter((item) => +item.id !== +id))
        setDataUpdated(true)
    }
    const login = async (data) => {
        const response = await ajax(URL+"/api/auth/login","POST",data);
        const newData = await response.json();
        if(newData.status){
            setSession('login' , true); 
            setSession('auth' , newData.record); 
        } 
        /*************/ 
        const routeToHome = () => {
            redirect("/");
            window.location.reload();

        }
        if (getSession('login')){
            routeToHome();
        }
        /*************/ 
    }
    useEffect(() => {
        fetchData();
        fetchProductData();
    }, [])

    useEffect(() => {
        if (dataUpdated) {
            fetchData();
            setDataUpdated(false)
        }else if(productUpdated){
            fetchProductData();
            setProductUpdated(false)
        }
    }, [dataUpdated,productUpdated])
// //////////////////////////////////////admin/////////////////////////////////////////////////
///////////////users/////////////////
const createAdminData = async (data) => {
    const response = await ajax(apiUrl, "post", data);
    const newData = await response.json()   ;
    setUserData((prevUserData) => [...prevUserData, newData]);
    setDataUpdated(true)
}

const updateAdminData = async (id, data) => {
    const response = await ajax(apiUrl + "/" + id + "/update", "POST", data);
    const updatedData = await response.json();
    const updatedUserData = userData.map((item) =>
        item.id == id ? updatedData : item
    );
    setUserData(updatedUserData)
    setDataUpdated(true)
}

    const contextValues = {
        userData,
        createData,
        updateData,
        deleteData,
        createStatus,
        login,
        addServiceData,
        dataUpdated,
        // admin
        // users
        createAdminData,
        updateAdminData,
        // products
        productData,
        createProduct,
        updateProductData,
        deleteProduct


        

    }

    return (
        <ApiContext.Provider value={contextValues}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider