import React from 'react';
import s from './Button.module.css';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
    title: string
    type?: 'primary' | 'secondary'
}

export const Button: React.FC<IProps> = props => {

    const {title, type, ...restProps} = props;

    return (
        <button
            className={`${s.btn} ${s[type || 'default']}`}
            {...restProps}
        >
            {title}
        </button>
    )
};