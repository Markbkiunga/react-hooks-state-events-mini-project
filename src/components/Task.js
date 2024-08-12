import React from 'react';

function Task({ tasks, onDelete }) {
  
  const displayTasks = tasks.map((task) => {
    return (
      <div className="task" key={task.text}>
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button className="delete" onClick={() => onDelete(task.text)}>
          X
        </button>
      </div>
    );
  });
  return <>{displayTasks}</>;
}

export default Task;
