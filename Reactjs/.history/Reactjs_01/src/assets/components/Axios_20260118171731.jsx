import React from "react";

const Axios = () => {
  async function getData() {
    const data = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(data);
  }
  return <div className="py-3 px-5 bg-red-400 active:scale-95 rounded-lg curs">Get Data</div>;
};

export default Axios;
