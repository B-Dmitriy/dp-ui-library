import type { RootState } from '01-app/providers/store';

export const getTodos = (state: RootState) => state.todos.todos;
export const getTodosIsLoading = (state: RootState) => state.todos.isLoading;
