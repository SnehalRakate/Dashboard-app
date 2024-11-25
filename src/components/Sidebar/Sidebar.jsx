import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { RxDashboard } from "react-icons/rx";
import { TbReport } from "react-icons/tb";
import { AiOutlineFileAdd } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import "../Sidebar/Sidebar.css";

function Sidebar({ openSidebarToggle }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/"> {/* Link to home page */}
            <RxDashboard className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/report"> {/* Example link for reports */}
            <TbReport className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
            <AiOutlineFileAdd className="icon" /> Add Invoice
      
        </li>
        <li className="sidebar-list-item">
            <FiUsers className="icon" /> Add User
        </li>
        <li className="sidebar-list-item">
            <HiOutlineNewspaper className="icon" /> Without PO
        </li>
        <li className="sidebar-list-item">
            <MdOutlineShoppingBag className="icon" /> Company
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
