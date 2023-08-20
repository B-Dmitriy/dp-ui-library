import React from 'react';
import cls from './Navbar.module.scss';
import {Link} from "react-router-dom";
export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            <Link to={"/todos"}>Todos</Link>
            <Link to={"/auth"}>Auth</Link>
        </div>
    );
};
