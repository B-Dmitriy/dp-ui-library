import { createBrowserRouter } from 'react-router-dom';
import { TodosLazy } from '03-pages/todos';
import { AuthLazy } from '03-pages/auth';
import { withSuspense } from '07-shared/lib/withSuspense/withSuspense';
import { Layout } from '../ui/Layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/todos',
                element: withSuspense(<TodosLazy />)
            },
            {
                path: '/auth',
                element: withSuspense(<AuthLazy />)
            }
        ]
    }
]);
