import React from 'react'    
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='App'>
        <div>This is Home</div>
        <Outlet/>
    </div>
  )
}

export default Home