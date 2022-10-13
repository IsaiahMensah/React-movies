import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../sidebar/Sidebar'
import "./MainPage.css"
import MainArea from '../mainarea/MainArea'
import Trending from '../trending/Trending'

const Mainpage = () => {
  return (
    <div className='mainpage'>
        <Navbar/>
        <Sidebar/>
        <MainArea/>
        {/* <Trending/> */}
    </div>
  )
}

export default Mainpage