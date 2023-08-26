import '07-shared/config/i18n/i18n.test.config';
import { ReactNode, Suspense } from 'react';

export const withTranslate = (
    children: ReactNode
) => <Suspense fallback={<span>Loading...</span>}>{children}</Suspense>;
