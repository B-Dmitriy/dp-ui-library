import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../ui/Layout/Layout';
import { TodosLazy } from '../../../../03-pages/todos';
import { AuthLazy } from '../../../../03-pages/auth';
import { withSuspense } from '../../../../07-shared/lib/withSuspense/withSuspense';

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
