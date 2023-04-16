import React from 'react'

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
          <input type='file' />
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register