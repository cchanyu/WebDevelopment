import React from 'react'
import '../css/Register.scss';

const Login = () => {
  return (
    <div className='register'>
      <div className='register-wrapper'>
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Sign in</button>
        </form>
        <p>Do you want to create an account? Register</p>
      </div>
    </div>
  )
}

export default Login