import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex gap-3">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "text-red-400 underline underline-offset-4" : "";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => {
            return isActive ? "text-red-400 underline underline-offset-4" : "";
          }}
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => {
            return isActive ? "text-red-400 underline underline-offset-4" : "";
          }}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
