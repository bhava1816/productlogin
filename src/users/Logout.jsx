import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/AuthSlice';
function Logout() {
    let navigate=useNavigate();
   let dispatch=useDispatch()
    useEffect(()=>{
     localStorage.removeItem("token")
        navigate('/login',{replace:true})
        dispatch(logout())
    },[navigate])
  return (
    <div>
loagingout.........
    </div>
  )
}

export default Logout