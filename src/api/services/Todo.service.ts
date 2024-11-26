// src/api/services/Todo.service.ts

import axios from 'axios';
import { API_ENDPOINTS } from './constants'; // 경로 상수들

export class TodoApiService {
  private axiosInstance;

  constructor(axiosInstance: any) {
    this.axiosInstance = axiosInstance;
  }

  // 할 일 목록 가져오기
  async fetchTodoList() {
    try {
      const response = await this.axiosInstance.get(API_ENDPOINTS.TODO_LIST);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 할 일 상세 가져오기
  async fetchTodoDetail(todoId: number) {
    try {
      const response = await this.axiosInstance.get(API_ENDPOINTS.TODO_DETAIL(todoId));
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 새로운 할 일 추가하기
  async addNewTodo(todoData: object) {
    try {
      const response = await this.axiosInstance.post(API_ENDPOINTS.TODO_LIST, todoData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 할 일 수정하기
  async modifyTodoList(todoId: number, todoData: object) {
    try {
      const response = await this.axiosInstance.put(API_ENDPOINTS.TODO_DETAIL(todoId), todoData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 할 일 삭제하기
  async removeTodoList(todoId: number) {
    try {
      const response = await this.axiosInstance.delete(API_ENDPOINTS.TODO_DETAIL(todoId));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
