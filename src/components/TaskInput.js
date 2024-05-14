import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={handleChange}
      />
      <button style={{ backgroundColor: 'skyblue', color: '#333333', marginLeft: '10px'}} type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
