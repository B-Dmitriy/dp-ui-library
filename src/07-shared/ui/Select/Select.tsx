import { clsx } from 'clsx';
import {
    memo, useEffect, useRef, useState,
} from 'react';
import { SelectItem } from '07-shared/ui/Select/SelectItem/SelectItem';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import cls from './Select.module.scss';

interface SelectProps {
    disabled?: boolean;
    readOnly?: boolean;
    value: string;
    options: string[];
    error?: string | null | undefined;
    label?: string;
    labelPosition?: 'top' | 'left';
    onSelect?: (item: string) => void;
    className?: string;
}

export const Select = memo(({
    disabled = false,
    readOnly = false,
    value,
    options,
    error,
    label,
    labelPosition = 'top',
    onSelect,
    className,
}: SelectProps) => {
    const listRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onValueClick = () => {
        setIsOpen((prev) => !prev);
    };

    const setIsClose = () => setIsOpen(false);

    useEffect(() => {
        const clickListener = (e: MouseEvent) => {
            if (isOpen && !listRef?.current?.contains(e.target as Node)) {
                setIsClose();
            }
        };
        document.body.addEventListener('click', clickListener);

        return () => {
            document.body.removeEventListener('click', clickListener);
        };
    }, [isOpen]);

    return (
        <div
            data-testid="select_wrapper"
            className={clsx(cls.Select, {}, [className])}
        >
            <label
                data-testid="select_label"
                className={clsx(cls.label, {
                    [cls.topLabel]: labelPosition === 'top',
                })}
                htmlFor="select_button"
            >
                {label && <span className={cls.text}>{label}</span>}
                <div className={cls.root}>
                    <button
                        data-testid="select_button"
                        disabled={readOnly || disabled}
                        type="button"
                        name="select_button"
                        className={clsx(cls.value, {
                            [cls.open]: isOpen,
                            [cls.readOnly]: readOnly,
                            [cls.errorValue]: !!error,
                        })}
                        onClick={onValueClick}
                    >
                        <span
                            data-testid="select_title"
                            className={cls.title}
                        >
                            {value}
                        </span>
                        {!readOnly && <ArrowDown />}
                    </button>
                    <div
                        ref={listRef}
                        data-testid="select_list"
                        className={clsx(cls.list, {
                            [cls.open]: isOpen,
                            // [classes.closes]: isClosing,
                        })}
                    >
                        {options.map((item) => (
                            <SelectItem
                                data-testid={`select_${item}`}
                                key={item}
                                item={item}
                                isOpen={isOpen}
                                setIsClose={setIsClose}
                                onSelect={onSelect}
                            />
                        ))}
                    </div>
                    {error && !readOnly && (
                        <span
                            data-testid="select_error"
                            className={clsx(cls.error, {
                                [cls.topLabel]: labelPosition === 'top',
                            })}
                        >
                            {error}
                        </span>
                    )}
                </div>
            </label>
        </div>
    );
});
