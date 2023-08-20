import React, {ChangeEvent} from 'react';
import cls from './Navbar.module.scss';
import {Link} from "react-router-dom";
import {useTheme} from "../../../07-shared/providers/themeProvider/lib/useTheme";
import {Theme} from "../../../07-shared/providers/themeProvider/lib/themeContext";
export const Navbar = () => {
    const { theme, setTheme, themeList } = useTheme();

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value as Theme);
    };

    return (
        <div className={cls.Navbar}>
            <Link to={"/todos"}>Todos</Link>
            <Link to={"/auth"}>Auth</Link>
            <select defaultValue={theme} onChange={onChange}>
                {themeList.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};
