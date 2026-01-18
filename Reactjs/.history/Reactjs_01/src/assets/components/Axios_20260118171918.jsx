import axios from "axios";
import React from "react";

const Axios = () => {
  async function getData() {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(data.data);
  }
  return (
    <div
      onClick={getData}
      className="py-3 px-5 bg-red-400 active:scale-95 rounded-lg cursor-pointer select-none text-xl font-semibold"
    >
      Get Data
    </div>
  );
};

export default Axios;
