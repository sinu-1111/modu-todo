import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://your-project-id.supabase.co', 'your-public-anon-key');

export const getTodos = async () => {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('createdAt', { ascending: false });

  if (error) throw error;
  return data;
};

export const addTodo = async (title: string) => {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, completed: false }]);

  if (error) throw error;
  return data;
};

export const updateTodo = async (id: string, completed: boolean) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ completed })
    .match({ id });

  if (error) throw error;
  return data;
};

export const deleteTodo = async (id: string) => {
  const { data, error } = await supabase
    .from('todos')
    .delete()
    .match({ id });

  if (error) throw error;
  return data;
};
