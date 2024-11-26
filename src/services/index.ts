import axios from 'axios';

const API_URL = 'https://your-supabase-api-url.com';

export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

export const addTodo = async (todo: { text: string }) => {
  const response = await axios.post(`${API_URL}/todos`, todo);
  return response.data;
};

export const updateTodo = async (id: number, updates: { completed: boolean }) => {
  const response = await axios.patch(`${API_URL}/todos/${id}`, updates);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${API_URL}/todos/${id}`);
  return response.data;
};
