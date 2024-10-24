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
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const userRole = user?.role;
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
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Shop
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </div>
        <Link to="/" className="logo">
          <strong>EldenRing</strong>
        </Link>
        {user && token ? (
          <>
            <div className="my-profile">
              <Link to="/cart">
                <i className="bx bx-cart"></i>
              </Link>
              <Link to="/setting/profile">
                <div className="info">
                  <i className="bx bx-user"></i>
                  <div>
                    <strong>{user.fullName}</strong>
                    <p>{user.email}</p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="auth">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
