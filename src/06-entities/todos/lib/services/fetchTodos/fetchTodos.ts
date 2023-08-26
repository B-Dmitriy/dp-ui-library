import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '07-shared/api/api';

export const fetchTodos = createAsyncThunk(
    'todosSlice/fetchTodos',
    async (_, thunkAPI) => {
        try {
            const response = await $api.get('/api/v1/todos');

            return response.data;
        } catch (e) {
            thunkAPI.rejectWithValue(e);
        }
    }
);
