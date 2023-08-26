import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '07-shared/api/api';
import { LoginParams } from '../../../types/auth.types';

export const login = createAsyncThunk(
    'authSlice/login',
    async (params: LoginParams, thunkAPI) => {
        try {
            const response = await $api.get('/api/v1/auth/login', {
                data: params
            });

            return response.data;
        } catch (e) {
            thunkAPI.rejectWithValue(e);
        }
    }
);
