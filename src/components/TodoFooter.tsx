import React from 'react';
import { useTodos } from '../api/mutations/todo';

const TodoFooter = () => {
  const { data: todos } = useTodos();
  const activeCount = todos?.filter(todo => !todo.completed).length;

  return (
    <div>
      <span>남은 할일: {activeCount}</span>
      <div>
        <button>모두</button>
        <button>완료</button>
        <button>미완료</button>
      </div>
    </div>
  );
};

export default TodoFooter;
