import React from "react";

function TaskList({ tasks, message }) {
  return (
    <div className="mt-4">
      <h5>Task List:</h5>
      <ul className="list-group mb-3">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No tasks yet</li>
        )}
      </ul>
      <p className="text-success fw-semibold">{message}</p>
    </div>
  );
}

export default TaskList;
