import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../api/services';

export const useTodos = () => {
  const queryClient = useQueryClient();

  const { data: todos, isLoading, isError } = useQuery('todos', fetchTodos);

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
