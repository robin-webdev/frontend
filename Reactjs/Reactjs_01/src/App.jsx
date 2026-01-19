import React from "react";
import Marks from "./components/Marks";
import Axios from "./components/Axios";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Marks />} />
      </Routes>
      {/* <Marks /> */}
      <Axios />
    </div>
  );
};

export default App;
