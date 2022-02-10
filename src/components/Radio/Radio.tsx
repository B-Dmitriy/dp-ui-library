import React, {ChangeEvent} from 'react';
import s from './Radio.module.css';

interface IProps extends React.HTMLProps<HTMLInputElement> {
    checked: boolean
    onChangeChecked?: (value: boolean) => void
}

export const Radio: React.FC<IProps> = props => {

    const {
        type,
        label,
        checked,
        onChange,
        onChangeChecked,
        ...restProps
    } = props;

    const checkedStyle = checked ? s.superRadio__input_select : s.superRadio__input_not_select;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    };

    return (
        <label className={s.radio}>
            <input
                type={'checkbox'}
                checked={checked}
                onChange={onChangeHandler}
                className={`${s.radio__input} ${checkedStyle}`}
                {...restProps}
            />
            {label}
        </label>
    );
};