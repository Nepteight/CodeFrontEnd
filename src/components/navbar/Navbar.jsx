import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Import styles
import "../../styles/components/navbar/navbar.css";
import logo from "../../assets/logonavbar.png";
import {
  toggleNavbarOn,
  toggleAnimateNavbarOn,
} from "../../redux/slices/navbar/navbar";
export const Navbar = () => {
  // dispatch
  const dispatch = useDispatch();
  // handle func
  const handleToggleAdvanceNavbar = () => {
    dispatch(toggleNavbarOn());
    setTimeout(() => {
      dispatch(toggleAnimateNavbarOn());
    }, 1);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="main">
          <i className="bx bx-menu" onClick={handleToggleAdvanceNavbar}></i>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
            Shop
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
            Blogs
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
        </div>
        <Link to="/" className="logo">
          <strong>EldenRing</strong>
        </Link>
        <div className="my-profile">
          <i className="bx bx-cart"></i>
          <div className="info">
            <i className="bx bx-user"></i>
            <div>
              <strong>Lon Khuong</strong>
              <p>lonkhuong2k4@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="auth">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div> */}
      </div>
    </div>
  );
};
