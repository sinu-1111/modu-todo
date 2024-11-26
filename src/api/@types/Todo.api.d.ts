/* eslint-disable @typescript-eslint/no-empty-object-type */

// 할일 목록 조회와 관련된 타입들
interface TodoListQueryParams {
  /** 쿼리 파라미터 */
  body?: Record<string, unknown>;
  params?: Record<string, unknown>;
  path?: Record<string, unknown>;
}

interface TodoListResponse {
  totalItems: number;
  previousPage: string | null;
  nextPage: string | null;
  todos: ITodo[];
}

// 할일 상세 조회 관련 타입들
interface TodoDetailPathParams {
  todoId: string;
}

interface TodoDetailQueryParams {
  /** 쿼리 파라미터 */
}

interface TodoDetailBody {}

interface TodoDetailRequest {
  body?: TodoDetailBody;
  params?: TodoDetailQueryParams;
  path: TodoDetailPathParams;
}

type TodoDetailResponse = ITodo;

// 할일 생성 관련 타입들
interface TodoCreateBody {
  title: string;
}

interface TodoCreateRequest {
  body: TodoCreateBody;
  params?: Record<string, unknown>;
  path?: Record<string, unknown>;
}

type TodoCreateResponse = ITodo;

// 할일 수정 관련 타입들
interface TodoUpdatePathParams {
  todoId: string;
}

interface TodoUpdateBody {
  title: string;
  completed: boolean;
}

interface TodoUpdateRequest {
  body: TodoUpdateBody;
  params?: Record<string, unknown>;
  path: TodoUpdatePathParams;
}

type TodoUpdateResponse = void;

// 할일 삭제 관련 타입들
interface TodoDeletePathParams {
  todoId: string;
}

interface TodoDeleteRequest {
  body?: Record<string, unknown>;
  params?: Record<string, unknown>;
  path: TodoDeletePathParams;
}

type TodoDeleteResponse = void;
