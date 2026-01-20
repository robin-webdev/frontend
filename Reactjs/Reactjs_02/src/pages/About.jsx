import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutAnything from "./AboutAnything";

const About = () => {
  return (
    <div className="text-5xl font-semibold ">
      About
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<AboutAnything />} /> // Not suggested
        // Will create a infinite loop and you can't really go deeper in this.
      </Routes> */}
      <Outlet />
    </div>
  );
};

export default About;
