import React, { useState } from "react";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setMessage(`Task added: ${task}!`);
    setTask("");
    setBgColor("lightblue");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: bgColor }}
    >
      <div className="card p-4 shadow w-50">
        <h3 className="text-center mb-4">Task Planner</h3>
        <form onSubmit={handleAddTask}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Task
          </button>
        </form>

        <TaskList tasks={tasks} message={message} />
      </div>
    </div>
  );
}

export default App;

