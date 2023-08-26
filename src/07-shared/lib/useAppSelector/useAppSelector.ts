import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '01-app/providers/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
