import {
    memo, MutableRefObject, PropsWithChildren, useRef, useState,
} from 'react';
import classes from './Dropdown.module.scss';
import { clsx } from 'clsx';

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
            onMouseOver={showDropdown}
            className={clsx(classes.Dropdown, {}, [className])}
        >
            <div
                className={classes.root}
                onMouseLeave={hideDropdown}
            >
                <span className={clsx(classes.children, {
                    [classes.open]: isOpen,
                })}
                >
                    {children}
                </span>
                <ul
                    className={clsx(classes.list, {
                        [classes.open]: isOpen,
                        [classes.mounted]: isClosing,
                    })}
                >
                    {list.map((item) => (
                        <li
                            key={item.value}
                            className={classes.listItem}
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
