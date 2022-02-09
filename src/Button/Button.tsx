import React from 'react';
import s from './Button.module.css';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
    title: string
    type?: 'primary' | 'secondary'
    sizebtn?: 'small' | 'large'
}

export const Button: React.FC<IProps> = props => {

    const {title, type, sizebtn, ...restProps} = props;

    const colorStyle = s[type || 'default'];

    const sizeStyle = s[sizebtn || 'medium'];

    return (
        <button
            className={`${s.btn} ${colorStyle} ${sizeStyle}`}
            {...restProps}
        >
            {title}
        </button>
    )
};