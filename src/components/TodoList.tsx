import React from 'react';
import { ITodo } from '../types/ITodo';  // ITodo 타입 임포트

interface TodoListProps {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'completed' | 'active'>>;
  deleteCompletedTodos: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  setFilter,
  deleteCompletedTodos,
}) => {
  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={deleteCompletedTodos}>Delete Completed</button>
    </div>
  );
};

export default TodoList;
