import React from 'react';
import { useTodos, useUpdateTodo, useDeleteTodo } from '../api/mutations/todo';

const TodoList = () => {
  const { data: todos } = useTodos();
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const toggleCompletion = (id: string, completed: boolean) => {
    updateTodo({ id, completed: !completed });
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  return (
    <div>
      {todos?.map(todo => (
        <div key={todo.id}>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleCompletion(todo.id, todo.completed)} 
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <button onClick={() => handleDelete(todo.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

