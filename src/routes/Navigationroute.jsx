import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../users/Logout'

function Navigationroute() {
    
  return (
    <div>
        <Link to='/helpme'>Help me !</Link>
       <Link to='/logout'>logout</Link>
    </div>
  )
}

export default Navigationroute