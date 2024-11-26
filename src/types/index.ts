export interface ITodo {
    id: string;            // 할일 고유 id
    title: string;         // 할일 제목
    completed: boolean;    // 완료 여부
    createdAt: string;     // 생성 일자
    updatedAt?: string | null;  // 수정 일자 (선택적)
  }
  