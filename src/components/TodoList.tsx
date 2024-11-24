import React, { useState } from 'react';
import { ITodo } from '../types';

const TodoList = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (title: string) => {
        const newTodo = {
            id: generateId(),
            title,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos([...todos, newTodo]);
    };

    const toggleCompleted = (id: string) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id: string, newTitle: string) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, title: newTitle, updatedAt: new Date().toISOString() } : todo
        ));
    };

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <span>{todo.title}</span>
                    <button onClick={() => toggleCompleted(todo.id)}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;

