import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '04-widgets/Navbar';
import cls from './Layout.module.scss';

export const Layout = () => (
    <div className={cls.Layout}>
        <Navbar />
        <main className={cls.main}>
            <Outlet />
        </main>
    </div>
);
