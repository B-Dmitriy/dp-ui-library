export { todosReducer } from '06-entities/todos/model/slice/todos.slice';
export { fetchTodos } from '06-entities/todos/model/services/fetchTodos/fetchTodos';
export { getTodos, getTodosIsLoading } from '06-entities/todos/model/selectors/todosSelectors';

export type { Todo } from './types/todos.types';
