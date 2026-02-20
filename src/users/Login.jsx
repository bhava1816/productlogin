import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchdata ,setCredentials} from '../features/auth/AuthSlice';


 

function Login() {
   let dispatch=useDispatch();
    let [email,setemail]=useState('');
    let [password,setpassword]=useState('')
    let navigate=useNavigate();

    useEffect(()=>{
   let token=localStorage.getItem("token")
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
  console.log(jsodata.data)
  
}
let myfunction = async () => {
  try {
    await dispatch(fetchdata({ email, password })).unwrap();
    navigate('/dashbroad');
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