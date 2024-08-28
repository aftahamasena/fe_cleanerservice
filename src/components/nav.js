import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Make sure the path to the logo is correct

const Navigation = () => {
  const location = useLocation();
  const hideNav =
    location.pathname === "/login" || location.pathname === "/signup";
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white p-4 ${hideNav ? "hidden" : "block"} ${
        isScrolled ? "fixed top-0 left-0 w-full z-10 shadow-md" : ""
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 transition-transform duration-300 transform hover:scale-110"
          />
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className="text-blue-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-700 transition-all duration-300"
              activeClassName="border-b-2 border-blue-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourservice"
              className="text-blue-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-700 transition-all duration-300"
              activeClassName="border-b-2 border-blue-700"
            >
              Our Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourcleaner"
              className="text-blue-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-700 transition-all duration-300"
              activeClassName="border-b-2 border-blue-700"
            >
              Our Cleaner
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricelist"
              className="text-blue-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-700 transition-all duration-300"
              activeClassName="border-b-2 border-blue-700"
            >
              Price List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/formorder"
              className="text-blue-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-700 transition-all duration-300"
              activeClassName="border-b-2 border-blue-700"
            >
              Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className="text-blue-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-700 transition-all duration-300"
              activeClassName="border-b-2 border-blue-700"
            >
              Help
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
