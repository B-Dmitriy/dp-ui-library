import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '07-shared/api/api';

export const fetchMe = createAsyncThunk(
    'authSlice/fetchMe',
    async (_, thunkAPI) => {
        try {
            const response = await $api.get('/api/v1/auth/me');

            return response.data;
        } catch (e) {
            thunkAPI.rejectWithValue(e);
        }
    }
);
