import { AxiosInstance } from "axios";
import { convertPathToUrl } from "../../utils/util";

// TODO API 경로 상수
const API_ENDPOINTS = {
  GET_TODO_LIST: "/todo",
  GET_TODO_DETAIL: "/todo/:todoId",
  CREATE_TODO: "/todo",
  UPDATE_TODO: "/todo/:todoId",
  DELETE_TODO: "/todo/:todoId",
} as const;

export class TodoApiService {
  constructor(private axiosInstance: AxiosInstance) {}

  /** 할일 목록 가져오기 */
  async fetchTodoList(request: GetTodosRequest) {
    const { path, params, body } = request;

    const { data } = await this.axiosInstance.get<GetTodosResponse>(
      convertPathToUrl(API_ENDPOINTS.GET_TODO_LIST, path),
      {
        params,
        data: body,
      }
    );

    return data;
  }

  /** 할일 상세 정보 가져오기 */
  async fetchTodoDetail(request: GetTodoDetailRequest) {
    const { path } = request;
    const todoPath = {
      todoId: `eq.${path.todoId}`,
    };

    const { data } = await this.axiosInstance.get<GetTodoDetailResponse>(
      convertPathToUrl(API_ENDPOINTS.GET_TODO_DETAIL, todoPath)
    );

    return data;
  }

  /** 할일 생성 */
  async createTodoItem(request: CreateTodoRequest) {
    const { path, params, body } = request;
    const { data } = await this.axiosInstance.post<CreateTodoResponse>(
      convertPathToUrl(API_ENDPOINTS.CREATE_TODO, path),
      body,
      {
        params,
      }
    );

    return data;
  }

  /** 할일 수정 */
  async modifyTodoItem(request: UpdateTodoRequest) {
    const { path, body } = request;
    const todoPath = {
      todoId: `eq.${path.todoId}`,
    };

    const { data } = await this.axiosInstance.patch<UpdateTodoResponse>(
      convertPathToUrl(API_ENDPOINTS.UPDATE_TODO, todoPath),
      body
    );

    return data;
  }

  /** 할일 삭제 */
  async removeTodoItem(request: DeleteTodoRequest) {
    const { path, params, body } = request;
    const todoPath = {
      todoId: `eq.${path.todoId}`,
    };

    const { data } = await this.axiosInstance.delete<DeleteTodoResponse>(
      convertPathToUrl(API_ENDPOINTS.DELETE_TODO, todoPath),
      {
        params,
        data: body,
      }
    );

    return data;
  }
}
