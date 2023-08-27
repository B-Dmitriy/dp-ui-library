import { clsx } from 'clsx';
import { nanoid } from '@reduxjs/toolkit';
import { memo } from 'react';
import cls from './SelectItem.module.scss';

interface SelectItemProps {
    item: string;
    isOpen: boolean;
    setIsClose: () => void;
    onSelect?: (item: string) => void;
    className?: string;
}

export const SelectItem = memo(({
    item,
    isOpen,
    setIsClose,
    onSelect,
    className,
}: SelectItemProps) => (
    <button
        data-testid="select_item"
        className={clsx(cls.SelectItem, {}, [className])}
        disabled={!isOpen}
        key={nanoid()}
        type="button"
        tabIndex={0}
        onClick={() => {
            if (onSelect) {
                onSelect(item);
            }
            setIsClose();
        }}
    >
        {item}
    </button>
));
