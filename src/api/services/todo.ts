import { supabaseClient } from "./supabase";

// 할일 목록 조회
export async function fetchTodoList() {
  try {
    const { data, error } = await supabaseClient.from("todo").select("*");
    if (error) throw error;
    console.log("Successfully fetched todo list:", data);
    return data;
  } catch (err) {
    console.error("Error fetching todo list:", err);
    return [];
  }
}

// 할일 목록 생성
export async function addNewTodo(title: string) {
  try {
    const { data, error } = await supabaseClient.from("todo").insert([
      {
        title,
        createdAt: new Date().toISOString(),
        updatedAt: null,
        completed: false,
      },
    ]);
    if (error) throw error;
    console.log("Todo created successfully:", data);
    return data;
  } catch (err) {
    console.error("Error creating todo:", err);
    return [];
  }
}

// 할일 목록 수정
export async function modifyTodoList(id: string, title: string, completed: boolean) {
  try {
    const { data, error } = await supabaseClient
      .from("todo")
      .update({
        title,
        completed,
        updatedAt: new Date().toISOString(),
      })
      .eq("id", id);
    if (error) throw error;
    console.log("Todo updated successfully:", data);
    return data;
  } catch (err) {
    console.error("Error updating todo:", err);
    return [];
  }
}

// 할일 목록 삭제
export async function removeTodoList(id: string) {
  try {
    const { data, error } = await supabaseClient.from("todo").delete().eq("id", id);
    if (error) throw error;
    console.log("Todo deleted successfully:", data);
    return data;
  } catch (err) {
    console.error("Error deleting todo:", err);
    return [];
  }
}
