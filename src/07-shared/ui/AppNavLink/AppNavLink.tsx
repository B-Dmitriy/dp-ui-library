import { clsx } from 'clsx';
import { memo, PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cls from './AppNavLink.module.scss';

interface AppLinkProps extends NavLinkProps {
    to: string;
    className?: string;
}

export const AppNavLink = memo(({
    to,
    className,
    children,
    ...otherProps
}: PropsWithChildren<AppLinkProps>) => (
    <NavLink
        to={to}
        data-testid="navLink_test_id"
        className={({ isActive }) => clsx(cls.AppNavLink, {
            [cls.active]: isActive,
        }, [className])}
        {...otherProps}
    >
        {children}
    </NavLink>
));
