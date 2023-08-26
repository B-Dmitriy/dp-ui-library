import axios from 'axios';
import { TOKEN_KEY } from '07-shared/constants/constants';

export const $api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}` || '',
    },
});
