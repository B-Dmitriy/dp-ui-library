import React from 'react';
import cls from './Navbar.module.scss';
import {Link} from "react-router-dom";
import {useTheme} from "../../../07-shared/providers/themeProvider/lib/useTheme";
export const Navbar = () => {
    const {  theme, themeList, setTheme} = useTheme()
    return (
        <div className={cls.Navbar}>
            <Link to={"/todos"}>Todos</Link>
            <Link to={"/auth"}>Auth</Link>

            <button ></button>
        </div>
    );
};
