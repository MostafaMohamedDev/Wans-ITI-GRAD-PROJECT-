import { ajax } from "../libCustomAjax_v1";
import React, { createContext, useEffect, useState } from 'react'
import { setSession , getSession , removeSession ,  getCurrentTime } from "../helper";
import { useNavigate } from "react-router-dom";
export const ApiContext = createContext(null);
const apiUrl = "http://ah.khaledfathi.com/api/user"

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

    const createData = async (data) => {
        console.log(data);
        const response = await ajax(apiUrl, "post", data);
        console.log(response);
        const newData = await response.json();
        // console.log(newData);
        setCreateStatus(newData)
        setUserData((prevUserData) => [...prevUserData, newData]);
        setDataUpdated(true)
    }
    const updateData = async (id, data) => {
        const response = await ajax(apiUrl + "/" + id + "/update", "POST", data);
        const updatedData = await response.json();
        const updatedUserData = userData.map((item) =>
            item.id == id ? updatedData : item
        );
        setUserData(updatedUserData)
        setDataUpdated(true)
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
        login
    }

    return (
        <ApiContext.Provider value={contextValues}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider