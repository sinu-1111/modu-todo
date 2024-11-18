// src/api/services/index.ts
import axios from 'axios';

const API_URL = 'https://your-supabase-url.com'; // Supabase API URL

export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

export const addTodo = async (title: string) => {
  const response = await axios.post(`${API_URL}/todos`, { title });
  return response.data;
};

export const updateTodo = async (id: string, completed: boolean) => {
  const response = await axios.patch(`${API_URL}/todos/${id}`, { completed });
  return response.data;
};

export const deleteTodo = async (id: string) => {
  await axios.delete(`${API_URL}/todos/${id}`);
};
