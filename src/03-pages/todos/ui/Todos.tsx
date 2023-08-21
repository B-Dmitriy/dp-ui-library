import React from 'react';
import cls from './Todos.module.scss';
import {useTranslation} from "react-i18next";

const Todos = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.Todos}>
            {t('todos')}
        </div>
    );
};

export default Todos;
