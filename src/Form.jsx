import React from 'react'
import  { useState } from 'react'
import   './Form.css'
function Form() {
 
  const [login ,setlogin] = useState(true)
  return (
    <>
    
    <div className='container'>
<div className='box'> 
<div className='button'>
  <center> <button className={login ? "active" : ""} onClick={()=> setlogin(true)}>Login</button>
  <button className= {!login ? "active" : ""} onClick={()=> setlogin(false)}>Signup </button>
  </center>
</div>
{ login ? <>
<div className='form'>
  <h2>Login Form</h2>
  <input type="text" placeholder='Enter Username' />
  <input type="email" placeholder='Enter your email' /> <br />
  <input type="password" placeholder='Enter Password'/>
  <a  href="#">Forgot Password</a> <br />
   <center> <button>Submit</button> </center> <br />
   

</div>
</> : <>
<div className='form'> 
<h2>Sign-up Form</h2>
<input type="text" placeholder='Enter Your Name' />
<input type="n" placeholder='Enter Roll Number'/>
  <input type="email" placeholder='Enter your email' /> <br />
  <input type="password" placeholder='Enter Password'/>
  <input type="password" placeholder='Confirm Password'/> <br />  <br />
 <center>  <button>Submit</button> </center>
  </div>
</>

}

</div>
    </div>
    
  
    </>
  )
}

export default Form
    
   