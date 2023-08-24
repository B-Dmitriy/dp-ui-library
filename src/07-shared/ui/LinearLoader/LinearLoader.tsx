import { clsx } from 'clsx';
import cls from './LinearLoader.module.scss';

interface LinearLoaderProps {
    isLoading: boolean;
    className?: string;
}

export function LinearLoader({ isLoading, className }: LinearLoaderProps) {
    return (
        <div className={cls.loader}>
            <div className={clsx(cls.block, {
                [cls.loading]: isLoading,
            }, [className])}
            />
        </div>
    );
}
