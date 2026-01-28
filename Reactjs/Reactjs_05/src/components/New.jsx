import React from "react";
import useTaskStore from "../store";

const New = () => {
  const { tasks, addTask, removeTask } = useTaskStore();

  // console.log(tasks);
  return <div></div>;
};

export default New;
