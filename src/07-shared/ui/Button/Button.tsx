import { clsx } from 'clsx';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export type ButtonType = 'clear' | 'outline' | 'primary' | 'secondary';
export type ButtonSize = 'small' | 'normal' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    view?: ButtonType;
    size?: ButtonSize;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export const Button = memo(({
    disabled = false,
    view = 'primary',
    size = 'normal',
    leftIcon,
    rightIcon,
    className,
    children,
    ...otherProps
}: ButtonProps) => (
    <button
        disabled={disabled}
        type="button"
        data-testid="button_test_id"
        className={clsx(cls.Button, {
            [cls.primary]: view === 'primary',
            [cls.secondary]: view === 'secondary',
            [cls.outline]: view === 'outline',
            [cls.clear]: view === 'clear',
            [cls.small]: size === 'small',
            [cls.normal]: size === 'normal',
            [cls.large]: size === 'large',
            [cls.disabled]: disabled,
        }, [className])}
        {...otherProps}
    >
        {leftIcon}
        <span className={cls.Button__children}>
            {children}
        </span>
        {rightIcon}
    </button>
));
