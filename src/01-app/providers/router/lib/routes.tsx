import { createBrowserRouter } from 'react-router-dom';
import { TodosLazy } from '03-pages/todos';
import { AuthLazy } from '03-pages/auth';
import { NotFound } from '03-pages/notFound';
import { ErrorBoundary } from '07-shared/ui/ErrorBoundary';
import { withSuspense } from '07-shared/lib/withSuspense/withSuspense';
import { Layout } from '../ui/Layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: '/todos',
                element: withSuspense(<TodosLazy />)
            },
            {
                path: '/auth',
                element: withSuspense(<AuthLazy />)
            },
            {
                path: '/*',
                element: withSuspense(<NotFound />)
            }
        ]
    }
]);
