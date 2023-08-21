import { memo } from 'react';
import { Theme, useTheme } from '../../../07-shared/providers/themeProvider';
import SunIcon from '../../../07-shared/assets/icons/sun.svg';
import MoonIcon from '../../../07-shared/assets/icons/moon.svg';
import classes from './ThemeSwitcher.module.scss';
import {clsx} from "clsx";

const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();

    const onClick = () => {
        toggleTheme();
    };

    return (
        <button
            type="button"
            className={classes.ThemeSwitcher}
            onClick={onClick}
        >
            <div className={clsx(classes.switcher, {
                [classes.light]: theme === Theme.LIGHT,
                [classes.dark]: theme === Theme.DARK,
            }, [])}
            />
            <MoonIcon />
            <SunIcon />
        </button>
    );
});
ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
