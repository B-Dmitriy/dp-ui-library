import { clsx } from 'clsx';
import { memo } from 'react';
import { Icon } from '../Icon/Icon';
import type { IconType } from '../Icon/Icon';
import cls from './IconLink.module.scss';

interface IconLinkProps {
    className?: string;
    type: IconType;
    href: string;
}

export const IconLink = memo(({ className, type, href }: IconLinkProps) => (
    <div className={clsx(cls.IconLink, {}, [className])}>
        <a href={href} aria-label="link"><Icon type={type} /></a>
    </div>
));
