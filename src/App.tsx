import React from 'react';
import TodoList from './components/TodoList';
import '/src/style.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
