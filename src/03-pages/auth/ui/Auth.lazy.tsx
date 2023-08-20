import { lazy } from 'react';

export const AuthLazy = lazy(async () => await import('./Auth'));
