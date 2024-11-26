import React, { useEffect, useState } from "react";
import { fetchTodoList } from "./api/services/todo";  // 수정된 함수명

function App() {
  const [todos, setTodos] = useState<ITodo[] | undefined>(undefined); // 상태 이름 수정

  // 컴포넌트 마운트 시 할일 목록 데이터를 가져옵니다.
  useEffect(() => {
    const loadTodoList = async () => {  // 함수명 변경
      try {
        const fetchedTodos = await fetchTodoList();  // 함수명 변경
        setTodos(fetchedTodos);  // 상태 업데이트
      } catch (error) {
        console.error("할일 목록을 가져오는 데 실패했습니다:", error);  // 에러 처리 추가
      }
    };

    loadTodoList();
  }, []);  // 의존성 배열은 비어 있음 (컴포넌트 마운트 시 한 번만 실행)

  console.log(todos);  // 데이터를 콘솔에 출력

  return <div>할일 목록이 로딩되었습니다.</div>;  // 화면에 텍스트 추가
}

export default App;
