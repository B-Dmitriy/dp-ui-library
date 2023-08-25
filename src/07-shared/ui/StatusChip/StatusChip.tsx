import { clsx } from 'clsx';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './StatusChip.module.scss';

export type StatusChipState = 'done' | 'in_progress';

interface StatusChipProps {
    status: StatusChipState;
}

export const StatusChip = ({ status }: StatusChipProps) => {
    const { t } = useTranslation('ui');

    const title = useMemo(() => {
        switch (status) {
        case 'done':
            return t('done');
        case 'in_progress':
            return t('in_progress');
        default:
            return '';
        }
    }, []);

    return (
        <div 
            data-testid={'StatusChip_test_id'}
            className={clsx(cls.StatusChip, {
                [cls.done]: status === 'done',
                [cls.in_progress]: status === 'in_progress',
            })}>
            {title}
        </div>
    );
};
