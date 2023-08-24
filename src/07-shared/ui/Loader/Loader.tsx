import React from 'react';
import cls from './Loader.module.scss';

export const Loader = () => (
    <div className={cls.Loader}>
        <div className={cls.ldsDualRing} />
    </div>
);
