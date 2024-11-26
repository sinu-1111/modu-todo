import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void; // 부모로부터 받은 addTodo 함수
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
