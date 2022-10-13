import React from 'react'
import "./Navbar.css"
import { BiMoviePlay,  } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import img1 from "../images/img1.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <BiMoviePlay className='logo-img'/>
          <label>Popcorn<i>flix</i></label>
        </div>
        <div className="search">
            <input type="text" placeholder='search' />
            <FcSearch className='search-icon'/>
        </div>
        <div className="profile">
            <img src={img1} alt="" />
            <select className="Profile-selector" >
            <option value="">profile</option>
            </select>

        </div>
      </div>
    </div>
  );
}

export default Navbar