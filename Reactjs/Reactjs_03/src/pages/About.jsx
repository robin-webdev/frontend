import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  console.log(useLocation());
  return <div>About</div>;
};

export default About;
