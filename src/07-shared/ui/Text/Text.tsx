import { clsx } from 'clsx';
import { memo, PropsWithChildren } from 'react';
import cls from './Text.module.scss';

type TextType = 'header' | 'paragraph' | 'error';

export type TextAlign = 'right' | 'left' | 'center';

interface TextProps {
    className?: string;
    view?: TextType;
    align?: TextAlign;
}

export const Text = memo(({
    className,
    align = 'left',
    view = 'paragraph',
    children,
}: PropsWithChildren<TextProps>) => {
    const mods = {
        [cls.error]: view === 'error',
        [cls.paragraph]: view === 'paragraph',
        [cls.header]: view === 'header',
        [cls[align]]: true,
    };
    switch (view) {
    case 'header':
        return (
            <h2
                data-testid="text_header_testid"
                className={clsx(cls.Text, mods, [className])}
            >
                {children}
            </h2>
        );
    case 'error':
    case 'paragraph':
    default:
        return (
            <p
                data-testid="text_paragraph_testid"
                className={clsx(cls.Text, mods, [className])}
            >
                {children}
            </p>
        );
    }
});
