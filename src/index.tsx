import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';  // 스타일 시트 import

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
~