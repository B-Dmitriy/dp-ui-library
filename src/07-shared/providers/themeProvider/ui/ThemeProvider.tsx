import React, {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme, THEME_LIST, ThemeContext } from '../lib/themeContext';
import {CURRENT_THEME_KEY} from "../../../constants/constants";

const defaultTheme = localStorage.getItem(CURRENT_THEME_KEY) as Theme || 'app_light_theme';

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const themeContextDefault = useMemo(() => ({
        theme,
        setTheme,
        themeList: THEME_LIST,
    }), [theme]);

    useEffect(() => {
        document.body.className = defaultTheme;
    }, []);

    return (
        <ThemeContext.Provider value={themeContextDefault}>
            {children}
        </ThemeContext.Provider>
    );
};
