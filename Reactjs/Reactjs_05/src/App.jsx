import React from "react";
import useBear from "./store";

const App = () => {
  const { bears, increasePopulation } = useBear();
  return (
    <div className=" flex h-screen w-screen gap-5 items-center justify-center flex-col">
      {/* <div>Bears Population : {bears}</div>
      <button onClick={increasePopulation} className="px-3 py-2 rounded-xl bg-gray-600 active:scale-95">Increase Population</button> */}
    </div>
  );
};

export default App;
