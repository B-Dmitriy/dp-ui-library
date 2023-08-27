import axios, { AxiosResponse } from 'axios';
import { TOKEN_KEY } from '07-shared/constants/constants';
import { RefreshResponse } from '06-entities/auth/types/auth.types';

export const $api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}` || '',
    },
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
    return config;
});

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalResponse = error.config;

    if(error.response.status === 401 && error.config &&!error.config._isRetry) {
        originalResponse._isRetry = true;

        try {
            const refreshResponse: AxiosResponse<RefreshResponse> = await $api.get('/api/v1/auth/refresh', originalResponse);

            localStorage.setItem(TOKEN_KEY, refreshResponse.data.accessToken);

            originalResponse.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;

            return $api.request(originalResponse);
        } catch (e) {
            console.error('Unauthorized: refresh token not valid');
        }
    }
});
