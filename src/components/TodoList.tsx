import React, { useState } from 'react';
import { ITodo } from '../types';  // ITodo 타입 임포트

const TodoList: React.FC = () => {
  // useState로 할일 목록 관리
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');  // 필터 상태

  // 할일 추가 함수
  const addTodo = () => {
    if (!newTodo) return;  // 입력값이 없으면 추가하지 않음
    const newTodoItem: ITodo = {
      id: new Date().toISOString(),
      title: newTodo,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');  // 입력창 초기화
  };

  // 할일 완료 상태 변경 함수
  const toggleCompletion = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  // 할일 삭제 함수
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 전체 선택/해제 함수
  const handleSelectAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })));
  };

  // 필터링된 할일 목록
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;  // 'all'인 경우 모든 항목을 보여줌
  });

  // 남은 할일 갯수
  const remainingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-list">
      {/* 할일 입력 */}
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      {/* 필터 버튼 */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>전체</button>
        <button onClick={() => setFilter('completed')}>완료</button>
        <button onClick={() => setFilter('incomplete')}>미완료</button>
      </div>

      {/* 남은 할일 갯수 */}
      <div>{remainingCount} 개 남음</div>

      {/* 전체 선택 체크박스 */}
      <div>
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={todos.every(todo => todo.completed)}
        />
        <label>전체 선택</label>
      </div>

      {/* 할일 목록 */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span>{todo.title}</span>
            <button onClick={() => toggleCompletion(todo.id)}>
              {todo.completed ? '미완료' : '완료'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
