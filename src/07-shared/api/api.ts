import axios from 'axios';
import { TOKEN_KEY } from '07-shared/constants/constants';

export const $api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}` || '',
    },
});

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
//     return config;
// });

// $api.interceptors.response.use((config) => {
//     return config;
// }, async (error) => {
//     const originalResponse = error.config;
//
//     if(error.response.status == 401) {
//         originalResponse._isRetry = true;
//         try {
//
//             const refreshResponse = await $api.get('/api/v1/auth/refresh', { withCredentials: true });
//
//             localStorage.setItem(TOKEN_KEY, refreshResponse.data.accessToken);
//
//             return $api.request(originalResponse);
//         } catch (e) {
//             console.log('Not auth');
//         }
//     }
// });
