import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={{ backgroundColor: 'bisque'}} className="App">
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
