

import { TodoApiService } from './Todo.service';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 실제 API URL로 변경
  headers: {
    'Content-Type': 'application/json',
  },
});

export const todoApiService = new TodoApiService(axiosInstance);
