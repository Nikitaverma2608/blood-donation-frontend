import React from 'react';
// import { userMenu } from './Menus/userMenu';
import { useLocation, Link } from 'react-router-dom';
import '../../../styles/Layout.css'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    //GET USER STATE
    const { user } = useSelector((state) => state.auth);

    const location = useLocation();
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
        {user?.role === "organisation" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventory</Link>
              </div>
              <div
                className={`menu-item ${location.pathname === "/user" && "active"}`}
              >
                <i className="fa-solid fa-user"></i>
                <Link to="/user">User</Link>
              </div>
              <div className={`menu-item ${location.pathname === "/hospital" && "active"}`}
              >
                <i className="fa-regular fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/user-list" && "active"
                }`}
              >
                <i className="fa-solid fa-user"></i>
                <Link to="/user-list">User List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-list" && "active"
                }`}
              >
                <i className="fa-regular fa-hospital"></i>
                <Link to="/hospital-list">Hospital List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/org-list" && "active"
                }`}
              >
                <i className="fa-sharp fa-solid fa-building-ngo"></i>
                <Link to="/org-list">Organisation List</Link>
              </div>
            </>
          )}

          {(user?.role === "user" || user?.role === "hospital") && (
            <div
              className={`menu-item ${
                location.pathname === "/organisation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/organisation">Organisation</Link>
            </div>
          )}
          
          {user?.role === "hospital" && (
            <div
              className={`menu-item ${
                location.pathname === "/consumer" && "active"
              }`}
            >
              <i className="fa-solid fa-republican"></i>
              <Link to="/consumer">Consumer</Link>
            </div>
          )}
          
          {user?.role === "user" && (
            <div
              className={`menu-item ${
                location.pathname === "/donation" && "active"
              }`}
            >
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <Link to="/donation">Donation</Link>
            </div>
          )}

          
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
