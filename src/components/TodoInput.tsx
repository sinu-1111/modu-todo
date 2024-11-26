import React, { useState } from 'react';
import { useAddTodo } from '../api/mutations/todo';

const TodoInput = () => {
  const [title, setTitle] = useState('');
  const { mutate } = useAddTodo();

  const handleAddTodo = () => {
    if (title.trim()) {
      mutate(title);
      setTitle('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="할일을 입력하세요" 
      />
      <button onClick={handleAddTodo}>추가</button>
    </div>
  );
};

export default TodoInput;
