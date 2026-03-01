import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchdata ,setCredentials} from '../features/auth/AuthSlice';
import { useSelector } from "react-redux";
import { LOGIN_REQUEST } from '../features/auth/Authtype';
 

function Login() {
   let dispatch=useDispatch();
    let [email,setemail]=useState('');
    let [password,setpassword]=useState('')
    let navigate=useNavigate();
    let user=useSelector((store)=>{
     return store.auth.user
    })
    console.log(user);
    useEffect(()=>{
     if(user!=null){
      navigate('/dashbroad');
    }
    
    },[user])
    useEffect(()=>{
   let token=localStorage.getItem("token")
   console.log(token)
    if(token!==null){
     onload(token)
    }
  },[])
     
let onload=async(token)=>{
  let response=await fetch("http://localhost:3333/user/load",{method:"POST",headers:{
      "content-type":"application/json"
    },
  body:JSON.stringify({token})})
  let jsodata=await response.json();
  console.log(jsodata)

  if(!jsodata || !jsodata.data){
    navigate('/login')
  }
  else{
    dispatch(setCredentials(jsodata.data))
    navigate('/dashbroad');
  }
  if(jsodata.msg=="tokenexpired"){
    let token=localStorage.getItem("token")
    let response=await fetch("http://localhost:3333/user/refreshtoken",{
      method:"GET",
       headers: {
          Authorization: `Bearer ${token}`
        },
      credentials:"include"
    })
    let jsodata=await response.json();
    
  }
  console.log(jsodata.data)
  
}
let myfunction = async () => {
  console.log(email)
  console.log(password)
  try {
    // await dispatch(fetchdata({ email, password })).unwrap();
    await dispatch({type:LOGIN_REQUEST,payload:{ email, password }})
   
  } catch (err) {
   alert("invalid credentials");
  }

  setemail('');
  setpassword('');

 
 
};

  return (
    <div>
<form>
    <h1>login form</h1>
    <div>
     <label>email: </label>
     <input type='email'  onChange={(e)=>{
      setemail(e.target.value)
     }}></input>
    </div>
    <div>
    <label>password:</label>
    <input type='password'  onChange={(e)=>{
      setpassword(e.target.value)
     }}></input>
    </div>
    <button type='button' onClick={myfunction}>clickme !</button>
</form>

    </div>
  )
}

export default Login