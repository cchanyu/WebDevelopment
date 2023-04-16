import React from 'react'
import Sidebar from '../chat-components/Sidebar'
import Chat from '../chat-components/Chat'
import '../css/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className="home-container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home