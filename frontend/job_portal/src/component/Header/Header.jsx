import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaUserCircle, FaBriefcase } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setShowDropdown(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="">Job Portal</h2>
      </div>

      <div className="nav-right">
        <Link to="/home" className="nav-item">
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/about" className="nav-item">
          <FaInfoCircle className="icon" /> About
        </Link>
        <Link to="/jobs" className="nav-item">
          <FaBriefcase className="icon" /> Jobs
        </Link>

        <div className="profile-container">
          <FaUserCircle
            className="profile-icon"
            onClick={handleProfileClick}
          />
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
