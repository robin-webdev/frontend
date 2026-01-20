import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AboutAnything from "./pages/AboutAnything";

const App = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/:id" element={<AboutAnything />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
