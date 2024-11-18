// src/types/ITodo.ts
export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: string;
    updatedAt?: string | null;
  }
  