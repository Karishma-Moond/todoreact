import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../actions';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (id) => {
    dispatch(editTask(id, editText));
    setEditText('');
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.editing ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleEditSubmit(task.id)}>
                  Save
                </button>
              </>
            ) : (
              <>
                {task.text}
                <button style={{ backgroundColor: '#90EE90', color: '#333333', marginLeft: '10px'}} onClick={() => handleDelete(task.id)}> Delete</button>
                <button style={{ backgroundColor: '#DC143C', color: '#333333', marginLeft: '10px' }} onClick={() => dispatch({ type: 'EDIT_TASK', id: task.id })}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <h2>All Tasks:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
