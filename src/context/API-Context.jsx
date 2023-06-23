import { ajax } from "../libCustomAjax_v1";
import React, { createContext, useEffect, useState } from 'react'
import { setSession , getSession , removeSession ,  getCurrentTime } from "../helper";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ApiContext = createContext(null);
const apiUrl = "http://ah.khaledfathi.com/api/user"
const servicesUrl = "http://ah.khaledfathi.com/api/service"

const ApiContextProvider = (props) => {

    const [userData, setUserData] = useState()
    const [dataUpdated, setDataUpdated] = useState(false)
    const [createStatus,setCreateStatus] = useState()
    const redirect = useNavigate();

    const fetchData = async () => {
        const response = await ajax(apiUrl);
        const data = await response.json();
        setUserData(data.data)
    }

    const createData = async (data,ref) => {
        console.log(data);
        ref = (ref.value)? ref:null
        const response = await ajax(apiUrl, "post", data,ref);
        console.log(response);
        const newData = await response.json();
        console.log(newData);
        
        setCreateStatus(newData)
        setUserData((prevUserData) => [...prevUserData, newData]);
        setDataUpdated(true)
        if(newData.status){
            redirect("./login")
        }
        
    }

    // services data
    const addServiceData = async (data,ref) => {
        console.log(data);
        ref = (ref.value)? ref:null
        const response = await ajax(servicesUrl, "post", data,ref);
        console.log(response);
        const newData = await response.json();
        console.log(newData);
    }

    const updateData = async (id, data,ref) => {
        ref = (ref.value)? ref:null
        const response = await ajax(apiUrl + "/" + id + "/update", "POST", data,ref);
        const updatedData = await response.json();
        console.log(updatedData.status);
        const updatedUserData = userData.map((item) =>
            item.id == id ? updatedData : item
        );
        setUserData(updatedUserData)
        setDataUpdated(true)
        if(updatedData.status){
            axios.get(apiUrl+"/"+id).then((res)=>{
                console.log(res.data.data);
                setSession('auth' , res.data.data);
                // setUserData(updatedUserData)
                // setDataUpdated(true)
            })
        }
    }

    const deleteData = async (id) => {
        const response = await ajax(apiUrl + "/" + id, "delete");
        setUserData(userData.filter((item) => item.id !== id))
        setDataUpdated(true)
    }
    const login = async (data) => {
        const response = await ajax("http://ah.khaledfathi.com/api/auth/login","POST",data);
        console.log(response);
        const newData = await response.json();
        console.log(newData);
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
    }, [])

    useEffect(() => {
        if (dataUpdated) {
            fetchData();
            setDataUpdated(false)
        }
    }, [dataUpdated])


    const contextValues = {
        userData,
        createData,
        updateData,
        deleteData,
        createStatus,
        login,
        addServiceData,
        dataUpdated
    }

    return (
        <ApiContext.Provider value={contextValues}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider