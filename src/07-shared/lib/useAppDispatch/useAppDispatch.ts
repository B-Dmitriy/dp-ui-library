import { useDispatch } from 'react-redux';
import type { AppDispatch } from '01-app/providers/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
