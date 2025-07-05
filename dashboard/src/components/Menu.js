import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedOption, setSelectedOption] = useState(0); // index of the menu is the state
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (idx) => {
    setSelectedOption(idx);
  };
  let handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const handleLogout = () => {
    window.location.href = "http://localhost:3000";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ height: "50%", width: "4%" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedOption === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedOption === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedOption === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedOption === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedOption === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => handleMenuClick(5)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedOption === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <div className="avatar">ZU</div>

          {isProfileDropdownOpen && (
            <div
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "60px",
                right: "0px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                padding: "10px",
                width: "140px",
                zIndex: 10,
              }}
            >
              <p
                style={{ margin: "8px 0", color: "red", cursor: "pointer" }}
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
