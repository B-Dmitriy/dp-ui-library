import { clsx } from 'clsx';
import {
    memo, MutableRefObject, PropsWithChildren, useRef, useState,
} from 'react';
import cls from './Dropdown.module.scss';

type DropdownItem = { label: string; value: string; };
type DropdownList = DropdownItem[];

interface DropdownProps {
    list: DropdownList;
    onSelect: (item: string) => void;
    className?: string;
}

const Dropdown = memo(({
    children,
    list,
    onSelect,
    className,
}: PropsWithChildren<DropdownProps>) => {
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const showDropdown = () => setIsOpen(true);

    const closeHandler = () => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            setIsClosing(false);
            setIsOpen(false);
        }, 150);
    };

    const hideDropdown = () => {
        closeHandler();
    };

    const onItemClick = (item: string) => {
        onSelect(item);
        closeHandler();
    };

    return (
        <div
            data-testid={'Dropdown-test-id'}
            onMouseOver={showDropdown}
            className={clsx(cls.Dropdown, {}, [className])}
        >
            <div
                className={cls.root}
                onMouseLeave={hideDropdown}
            >
                <span className={clsx(cls.children, {
                    [cls.open]: isOpen,
                })}
                >
                    {children}
                </span>
                <ul
                    className={clsx(cls.list, {
                        [cls.open]: isOpen,
                        [cls.mounted]: isClosing,
                    })}
                >
                    {list.map((item) => (
                        <li
                            key={item.value}
                            className={cls.listItem}
                            onClick={() => onItemClick(item.value)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

Dropdown.displayName = 'Dropdown';

export { Dropdown };
