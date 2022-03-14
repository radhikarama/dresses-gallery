import React, { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import App from '../../../App';
import Home from '../Home.js/Home'
import './Signup.css';

const Signup = () => {
    const[sub , setSub]=useState(true);
    const submithandler=(e)=>{
     e.preventDefault();
     setSub(false);
     console.log(sub)

    }
  
  return (
    <div>
       { 
      sub==true &&(
        <form onSubmit={submithandler}>
        <div className='signup'>
            <label for='name'>Name</label>
            <input type='text' id='name' placeholder='Enter the user-Name'/></div>
            <div className='signup'>
                <label for='email'>Email id</label>
                <input type='email' id='email' placeholder='Enter the email'/></div>
           <div > <button className='signup1'>Submit</button>
        </div>
        </form>
        
      )}
     
      {
          sub==false &&(
              <div>
                  <h1 className='success'>Login successfull</h1>
              </div>
          )
      }
    </div>
  )
}

export default Signup