import React, { useState } from 'react';

function NewTaskForm({ handleAddTask, categories }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Code');

  const newTask = {text, category}
  function onTaskFormSubmit(event) {
    event.preventDefault();
    handleAddTask(newTask);
    setText('');
    setCategory('Code');
  }
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {/* render <option> elements for each category here */}
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
