import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '07-shared/api/api';
import { TOKEN_KEY } from '07-shared/constants/constants';

export const logout = createAsyncThunk(
    'authSlice/logout',
    async (_, thunkAPI) => {
        try {
            const response = await $api.get('/api/v1/auth/logout');

            localStorage.setItem(TOKEN_KEY, '');

            return response.data;
        } catch (e) {
            thunkAPI.rejectWithValue(e);
        }
    }
);
