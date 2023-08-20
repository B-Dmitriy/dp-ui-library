import { lazy } from 'react';

export const TodosLazy = lazy(async () => await import('./Todos'));
