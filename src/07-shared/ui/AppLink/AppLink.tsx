import { clsx } from 'clsx';
import { memo, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import LinkIcon from '../../assets/icons/link.svg';
import cls from './AppLink.module.scss';

export type AppLinkView = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    to: string;
    view?: AppLinkView;
    withIcon?: boolean;
    className?: string;
}

export const AppLink = memo(({
    to,
    view = 'primary',
    withIcon = false,
    className,
    children,
    ...otherProps
}: PropsWithChildren<AppLinkProps>) => (
    <Link
        to={to}
        data-testid="appLink_test_id"
        className={clsx(cls.AppLink, {
            [cls.withIcon]: withIcon,
        }, [className, cls[view]])}
        {...otherProps}
    >
        <span className={cls.title}>
            {children}
        </span>
        {withIcon && <LinkIcon />}
    </Link>
));
