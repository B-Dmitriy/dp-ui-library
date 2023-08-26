import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '06-entities/auth';
import { todosReducer } from '06-entities/todos';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
