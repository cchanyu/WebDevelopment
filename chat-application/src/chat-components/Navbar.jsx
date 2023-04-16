import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src="" alt="" />
        <span>User</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar