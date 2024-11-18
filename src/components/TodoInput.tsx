// src/components/TodoInput.tsx
import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (title: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleAddClick = () => {
    if (title.trim()) {
      addTodo(title);
      setTitle(''); // 입력창 초기화
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAddClick}>추가</button>
    </div>
  );
};

export default TodoInput;
