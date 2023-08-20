import { type ReactNode, Suspense } from 'react';

export const withSuspense = (
    children: ReactNode
) => <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
