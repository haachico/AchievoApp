import TasksContextProvider, { TasksContext } from "./context/tasksContext";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export { TasksContext };
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
