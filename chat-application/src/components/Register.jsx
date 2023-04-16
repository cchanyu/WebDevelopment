import React from 'react'
import '../css/Register.scss';

import Add from '../img/addAvatar.png';

const Register = () => {
  return (
    <div className='register'>
      <div className='register-wrapper'>
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{display:"none"}} type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt='add' />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register