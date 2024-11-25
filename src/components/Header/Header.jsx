import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import Sidebar from "../Sidebar/Sidebar"; 
import "../Header/Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev); // Toggle sidebar state
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <IoMenu className="menu-icon" onClick={toggleSidebar} /> {/* Toggle Sidebar */}
          <span>Logo</span>
        </div>
        <input type="text" id="fname" name="fname" placeholder="Search" />
        <div className="header-icons">
          <GoBell />
          <AiOutlineQuestionCircle />
          <div className="profile">JA</div>
        </div>
      </div>

      {/* Conditionally render Sidebar based on the state */}
      {isSidebarOpen && <Sidebar openSidebarToggle={true} />}
    </div>
  );
};

export default Header;

