import { clsx } from 'clsx';
import { memo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src: string;
    alt: string;
    size: 'small' | 'large';
    className?: string;
}

export const Avatar = memo(({
    src,
    alt,
    size,
    className,
}: AvatarProps) => (
    <img
        className={clsx(cls.Avatar, {}, [className, cls[size]])}
        src={src}
        alt={alt}
    />
));
