import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';

const Home = () => {
  return (
    <div>
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default Home;
