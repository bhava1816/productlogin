import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Welcome from './Welcome'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './users/Signup'
import Login from './users/Login'
import Dashbroad from './users/Dashbroad'
import ProtectedRoute from './routes/protectedroute'
import Helpme from './users/Helpme'
import Logout from './users/Logout'


function App() {
 let[name,setName]=useState('');
  return (
    <>
   <BrowserRouter>
   <Routes>
  <Route path='/' element={<Signup></Signup>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route element={<ProtectedRoute></ProtectedRoute>}><Route path='/dashbroad' element={<Dashbroad></Dashbroad>}></Route></Route>
  <Route path='/helpme' element={<Helpme ></Helpme>}></Route>
  <Route path='/logout' element={<Logout></Logout>} ></Route>
   </Routes>
   </BrowserRouter>
     
    </>
    
  )
}

export default App
