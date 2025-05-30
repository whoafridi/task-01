import React, { useState } from "react";
import { TaskContext } from "./TaskContext";
import { taskInitialData } from "../data/taskInitialData";

export const TaskProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState(taskInitialData);

  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
