import { clsx } from 'clsx';
import { memo } from 'react';
import cls from './Switch.module.scss';

interface SwitchProps {
    disabled?: boolean;
    className?: string;
    isActive: boolean;
    changeIsActiveStatus: () => void;
}

export const Switch = memo(({
    disabled = false,
    className,
    isActive,
    changeIsActiveStatus,
}: SwitchProps) => {
    const onClick = () => {
        changeIsActiveStatus();
    };

    return (
        <button
            type="button"
            disabled={disabled}
            data-testid="switch__test_id"
            className={clsx(cls.Switch, {
                [cls.active]: isActive,
                [cls.inactive]: !isActive,
            }, [className])}
            onClick={onClick}
        >
            <div className={cls.switcher} />
        </button>
    );
});
