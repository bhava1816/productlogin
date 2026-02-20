import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom';
function Signup() {
  
        let firstNameref=useRef();
         let lastNameref=useRef();
         let emailref=useRef();
         let passwordref=useRef();
         
         let myfunction=async()=>{
            let mybody={
                firstName:firstNameref.current.value,
                lastName:lastNameref.current.value,
                email:emailref.current.value,
                password:passwordref.current.value
            }
         let respnse= await fetch("http://localhost:3333/user/signup",{method:"POST",headers:{
             "Content-Type": "application/json"
         },body:JSON.stringify(mybody)})
         let jsodata=await respnse.json();
         console.log(jsodata)
         firstNameref.current.value=""
         lastNameref.current.value=""
         emailref.current.value=""
          passwordref.current.value=""
         }
          return (
            <>
           <form>
            <h1>signup form</h1>
            <div>
              <label>
               firstName:
              </label>
              <input  ref={firstNameref}></input>
            </div>
            <div>
              <label>
               lastName:
              </label>
              <input ref={lastNameref}></input>
            </div>
            <div>
              <label>
               email:
              </label>
              <input type='email' ref={emailref}></input>
            </div>
            <div>
              <label>
               password:
              </label>
              <input type='password' ref={passwordref}></input>
            </div>
            <button type='button' onClick={myfunction} >click me !</button>
           </form>
           <Link to="/login"><button type='button'> clickme if already exist</button></Link>
           </>
    )
}

export default Signup