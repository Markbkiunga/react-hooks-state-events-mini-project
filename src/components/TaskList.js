import React from 'react';
import Task from './Task';

function TaskList({ tasks , onDelete}) {
  return (
    <div className="tasks">
      <Task tasks ={tasks} onDelete={onDelete}/>
    </div>
  );
}

export default TaskList;
