import { createSlice } from '@reduxjs/toolkit';
import { fetchMe } from '06-entities/auth';
import { AuthState } from '../../types/auth.types';

const initialState: AuthState = {
    user: null
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.user = action.payload;
            });

    }
});

export const authReducer= authSlice.reducer;
