import React from 'react';
import {BiDonateBlood ,BiUserCircle} from 'react-icons/bi';
import { useNavigate, useLocation, Link} from "react-router-dom";
import {useSelector} from 'react-redux';

const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const location = useLocation();
    // logout handler
    const handleLogout = () => {
      localStorage.clear();
      alert("Logout Successfully");
      navigate("/login");
    };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-brand">
                <BiDonateBlood color='black'/> BloodGuardian
            </div>
            <ul className="navbar-nav flex-row">
                <li className="nav-item mx-3">
                <p className="nav-link">
                    <BiUserCircle color='black' /> Welcome {user?.name || user?.hospitalName || user?.organisationName}{" "} &nbsp;
                </p>
                </li>
                {(location.pathname === "/" ||
                  location.pathname === "/user" ||
                  location.pathname === "/hospital" ||
                  location.pathname === "/organisation" ) ? (
                    <li className="nav-item mx-3">
                      <Link to="/analytics" className="nav-link text-dark" >
                        Analytics
                      </Link>
                    </li>
                  ) : (
                    
                    <li className="nav-item mx-3">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                  )}
                <li className="nav-item ">
                    <button className="btn btn-dark" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
