import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src="" alt="" />
        <span>User</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar