import { useMutation, useQuery } from 'react-query';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services';

export const useTodos = () => {
  return useQuery('todos', getTodos);
};

export const useAddTodo = () => {
  return useMutation(addTodo);
};

export const useUpdateTodo = () => {
  return useMutation(updateTodo);
};

export const useDeleteTodo = () => {
  return useMutation(deleteTodo);
};
