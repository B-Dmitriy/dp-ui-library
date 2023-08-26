import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '04-widgets/Navbar';
import { fetchMe } from '06-entities/auth';
import { useAppDispatch } from '07-shared/lib';
import cls from './Layout.module.scss';

export const Layout = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMe());
    }, []);

    return (
        <div className={cls.Layout}>
            <Navbar />
            <main className={cls.main}>
                <Outlet />
            </main>
        </div>
    );
};
