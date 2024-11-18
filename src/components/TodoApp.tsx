import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { ITodo } from '../types/ITodo';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: String(Date.now()), 
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

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;

// src/components/TodoApp.tsx
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { ITodo } from '../types/ITodo';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // 할 일 추가
  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: String(Date.now()), // 간단히 시간을 이용해 ID 생성
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Todo 완료 상태 토글
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Todo 삭제
  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 남은 Todo 갯수 계산
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <div className="todo-footer">
        <span>{remainingTodos} 남은 할 일</span>
      </div>
    </div>
  );
};

export default TodoApp;


// src/components/TodoApp.tsx
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { ITodo } from '../types/ITodo';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // 할 일 추가
  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: String(Date.now()), // 간단히 시간을 이용해 ID 생성
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Todo 완료 상태 토글
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Todo 삭제
  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 완료된 항목만 삭제하는 함수
  const deleteCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // 남은 Todo 갯수 계산
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <div className="todo-footer">
        <span>{remainingTodos} 남은 할 일</span>
        <button onClick={deleteCompletedTodos} disabled={remainingTodos === todos.length}>
          완료된 할 일 모두 삭제
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
