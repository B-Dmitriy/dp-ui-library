import { clsx } from 'clsx';
import { memo } from 'react';
import { Theme, useTheme } from '07-shared/providers/themeProvider';
import SunIcon from '07-shared/assets/icons/sun.svg';
import MoonIcon from '07-shared/assets/icons/moon.svg';
import cls from './ThemeSwitcher.module.scss';

const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();

    const onClick = () => {
        toggleTheme();
    };

    return (
        <button
            type="button"
            className={cls.ThemeSwitcher}
            onClick={onClick}
        >
            <div className={clsx(cls.switcher, {
                [cls.light]: theme === Theme.LIGHT,
                [cls.dark]: theme === Theme.DARK,
            }, [])}
            />
            <MoonIcon />
            <SunIcon />
        </button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
