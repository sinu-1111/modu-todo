// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App 컴포넌트를 가져옵니다.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
