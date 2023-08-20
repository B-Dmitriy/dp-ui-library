import { useContext } from 'react';
import { type Theme, ThemeContext } from './themeContext';
import { CURRENT_THEME_KEY } from '../../../constants/constants';

interface UseThemeResult {
  theme: Theme
  setTheme: (theme: Theme) => void
  themeList: Theme[]
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme, themeList } = useContext(ThemeContext);

    const setNewTheme = (newTheme: Theme) => {
        if (setTheme) {
            setTheme(newTheme);
            document.body.className = newTheme;
            localStorage.setItem(CURRENT_THEME_KEY, newTheme);
        }
    };

    return {
        theme: theme || 'app_light_theme',
        setTheme: setNewTheme,
        themeList: themeList || []
    };
}
