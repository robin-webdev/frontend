import axios from "axios";
import React, { useState } from "react";

const Axios = () => {
  const [first, setFirst] = useState([]);
  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/",
    );
    setFirst(response.data);
    console.log(response.data);
  }
   
  useEf
  return (
    <div
      onClick={getData}
      className="py-3 px-5 bg-red-400 active:scale-95 rounded-lg cursor-pointer select-none text-xl font-semibold"
    >
      Refresh Data
    </div>
  );
};

export default Axios;
