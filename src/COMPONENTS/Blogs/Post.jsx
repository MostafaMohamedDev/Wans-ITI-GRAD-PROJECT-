import React, { useEffect, useState } from 'react'
import { ajax } from '../../libCustomAjax_v1'
import { useParams } from 'react-router-dom'
import { constants } from '../../constants'

//current FQDN 
const URL = constants.API_HOST; 

//component
const Post = () => {
    //get post id from previous page  /Blogging
    const {id} =useParams(); 

    //set post data from database 
    const [postData , setPostData]= useState({}); 

    //fetch data  
    useEffect(()=>{
        const request = async ()=>{
            const response = await fetch(URL+"/api/blog/"+id ); 
           return await response.json(); 
        }
        const data = request().then((res)=>{
            setPostData(res.data);  
        });
    },[]); 

  //render return 
  return (
        <div>
            <hr/>
            <div>
                <h1>{postData.title} </h1>
                <img style={{width:"300px"}} src={URL+"/"+postData.image} alt="blog-image" />
                <p>Author : {postData.author}</p>
                <p>{postData.time}</p>
            </div>
            <hr/>
            <div>
                <div dangerouslySetInnerHTML={{ __html:postData.article }}/>
            </div>
        </div>
        )
}

export default Post