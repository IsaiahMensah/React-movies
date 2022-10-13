import React from "react";
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BiMoviePlay, BiSlideshow,BiCategoryAlt,BiTrendingUp } from "react-icons/bi";
import { MdFiberNew } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="sidebar-links">
          
          <div className="s-links" >
            <AiFillHome className="images"/>
            <span>Home</span>
          </div>
          <div className="s-links">
            <BiMoviePlay className="images" />
            <span>Movies</span>
          </div>
          <div className="s-links">
            <BiSlideshow className="images" />
            <span>Series</span>
          </div>
          <div className="s-links">
            <MdFiberNew className="images" />
            <span>New Release</span>
          </div>
          <div className="s-links">
            <BiCategoryAlt className="images"/>
            <span>Category</span>
          </div>
          <div className="s-links">
            <BiTrendingUp className="images" />
            <span>Trending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
