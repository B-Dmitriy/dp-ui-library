import { clsx } from 'clsx';
import {
    ChangeEvent, InputHTMLAttributes, memo, ReactNode, useState,
} from 'react';
import Cross from '07-shared/assets/icons/cross.svg';
import EyeOpen from '07-shared/assets/icons/eye-open.svg';
import EyeClose from '07-shared/assets/icons/eye-closed.svg';
import cls from './Input.module.scss';

type InputTypes = 'primary' | 'clear';
type LabelPosition = 'top' | 'left';
type InputModification = 'counter' | 'icon' | 'cleaner' | 'secret';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    disabled?: boolean;
    value: string;
    onChangeValue?: (newValue: string) => void;
    error?: string | null | undefined;
    label?: string;
    placeholder?: string;
    icon?: ReactNode;
    maxLength?: number;
    modification?: InputModification;
    className?: string;
    view?: InputTypes;
    labelPosition?: LabelPosition;
}

export const Input = memo(({
    readOnly = false,
    disabled = false,
    // type, // Достаём значение, что бы оно не перезаписало type внутри
    view = 'primary',
    labelPosition = 'top',
    value,
    error = '',
    label = '',
    placeholder = '',
    icon,
    maxLength = undefined,
    modification,
    onChange,
    onChangeValue,
    className,
    ...restProps
}: InputProps) => {
    const STRING_LENGTH = value.length;

    const [isFieldOpen, setIsFieldOpen] = useState(modification !== 'secret');
    const toggleIsFieldOpen = () => setIsFieldOpen((prev) => !prev);

    const resetValue = () => {
        if (onChange) {
            onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
        }
        if (onChangeValue) {
            onChangeValue('');
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
        if (onChangeValue) {
            onChangeValue(e.target.value);
        }
    };

    return (
        <div className={clsx(cls.Input, {}, [className])}>
            <label
                htmlFor="text_input"
                className={clsx(cls.label, {
                    [cls.topLabel]: labelPosition === 'top',
                })}
            >
                {label && <span className={cls.text}>{label}</span>}
                <div className={cls.root}>
                    <input
                        data-testid="text_input_id"
                        readOnly={readOnly}
                        disabled={disabled || readOnly}
                        name="text_input"
                        type={isFieldOpen ? 'text' : 'password'}
                        className={clsx(cls.input, {
                            [cls.clear]: view === 'clear',
                            [cls.disabled]: disabled,
                            [cls.rootError]: !!error,
                            [cls.readOnly]: readOnly,
                        })}
                        maxLength={maxLength}
                        autoComplete="new-password"
                        value={value}
                        onChange={onChangeHandler}
                        placeholder={placeholder}
                        {...restProps}
                    />
                    {modification === 'icon' && <span className={cls.modification}>{icon}</span>}
                    {modification === 'secret' && (
                        <span
                            className={clsx(cls.modification, {}, [cls.activeIcon])}
                        >
                            {isFieldOpen
                                ? (
                                    <EyeOpen
                                        onClick={toggleIsFieldOpen}
                                    />
                                )
                                : (
                                    <EyeClose
                                        onClick={toggleIsFieldOpen}
                                    />
                                )}
                        </span>
                    )}
                    {modification === 'cleaner' && (
                        <span
                            className={clsx(cls.modification, {}, [cls.activeIcon])}
                        >
                            <Cross onClick={resetValue} />
                        </span>
                    )}
                    {modification === 'counter' && (
                        <span
                            data-testid="input_counter"
                            className={clsx(cls.modification, {}, [cls.counter])}
                        >
                            {maxLength && `${STRING_LENGTH}/${maxLength}`}
                        </span>
                    )}
                </div>
            </label>
            {error && !readOnly && (
                <span
                    data-testid="input_error_block"
                    className={clsx(cls.error, {
                        [cls.topLabel]: labelPosition === 'top',
                    })}
                >
                    {error}
                </span>
            )}
        </div>
    );
});
