import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App"; // 컴포넌트 이름 및 임포트 방식을 바꿔보았습니다
import "./styles.css";  // styles.css로 파일 이름을 변경

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
