import React, { useState } from 'react';
import TodoInput from './TodoInput';       // TodoInput 컴포넌트 임포트
import TodoList from './TodoList';         // TodoList 컴포넌트 임포트
import { ITodo } from '../types/ITodo';    // ITodo 타입 임포트

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

  const addTodo = (text: string) => {
    const newTodo: ITodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos =
    filter === 'all'
      ? todos
      : filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setFilter={setFilter}
        deleteCompletedTodos={deleteCompletedTodos}
      />
    </div>
  );
};

export default TodoApp;
