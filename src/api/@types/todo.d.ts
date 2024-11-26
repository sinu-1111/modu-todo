// 할일 항목을 나타내는 타입 정의
interface TodoItem {
  /** 할일 완료 여부 */
  isCompleted: boolean;
  /** 할일 생성 날짜 */
  createdAt: string;
  /** 할일 고유 ID */
  id: string;
  /** 할일 제목 */
  title: string;
  /** 할일 마지막 수정 날짜 (없을 수 있음) */
  updatedAt?: string | null;
}
