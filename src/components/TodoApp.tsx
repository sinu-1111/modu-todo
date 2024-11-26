import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { ITodo } from '../types/ITodo';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: String(Date.now()), // 간단히 시간을 이용해 ID 생성
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 남은 Todo 갯수 계산
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  const filteredTodos =
    filter === 'all'
      ? todos
      : filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <div className="todo-footer">
        <span>{remainingTodos} 남은 할 일</span>
        <button onClick={() => setTodos(todos.filter(todo => !todo.completed))} disabled={remainingTodos === todos.length}>
          완료된 할 일 모두 삭제
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setFilter={setFilter}
      />
    </div>
  );
};

export default TodoApp;
