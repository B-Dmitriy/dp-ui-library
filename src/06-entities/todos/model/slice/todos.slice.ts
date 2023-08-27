import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from '06-entities/todos';
import type { TodosState } from '../../types/todos.types';

const initialState: TodosState = {
    isLoading: false,
    todos: [],
};

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload || [];
                state.isLoading = false;
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.isLoading = false;
            });

    }
});

export const todosReducer = todosSlice.reducer;
