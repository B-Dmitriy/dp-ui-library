import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '07-shared/api/api';
import { LoginParams } from '../../../types/auth.types';
import { TOKEN_KEY } from '07-shared/constants/constants';

export const login = createAsyncThunk(
    'authSlice/login',
    async (params: LoginParams, thunkAPI) => {
        try {
            const response = await $api.post('/api/v1/auth/login', params);

            localStorage.setItem(TOKEN_KEY, response.data.accessToken);

            return response.data.user;
        } catch (e) {
            thunkAPI.rejectWithValue(e);
        }
    }
);
