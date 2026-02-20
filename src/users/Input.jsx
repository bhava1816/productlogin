import React from 'react'

function Input({setName}) {
  return (
    <div>
        <input onChange={(e)=>{
         setName(e.target.value);
        }}></input>
    </div>
  )
}

export default Input