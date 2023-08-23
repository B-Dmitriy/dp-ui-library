import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '05-features/ThemeSwitcher';
import { LangSwitcher } from '05-features/LangSwitcher';
import cls from './Navbar.module.scss';
export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            <Link to={'/todos'}>Todos</Link>
            <Link to={'/auth'}>Auth</Link>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    );
};
