
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../api/services';

export const useTodos = () => {
  const queryClient = useQueryClient();

  // Todos 불러오기
  const { data: todos = [], isLoading } = useQuery('todos', fetchTodos);

  // Todo 추가하기
  const { mutate: createTodo } = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  // Todo 완료 상태 토글하기
  const { mutate: toggleTodoStatus } = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  // Todo 삭제하기
  const { mutate: removeTodo } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  return {
    todos,
    isLoading,
    createTodo,
    toggleTodoStatus,
    removeTodo,
  };
};
