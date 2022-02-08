import React, {ChangeEvent} from 'react';
import s from './Checkbox.module.css';

interface IProps extends React.HTMLProps<HTMLInputElement> {
    valueCheckbox?: boolean
    onChangeChecked?: (value: boolean) => void
    spanClassName?: string
}

export const Checkbox: React.FC<IProps> = props => {

    const {
        valueCheckbox,
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        label,
        checked,
        ...restProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    };

    return (
        <div className={s.checkbox}>
            <label className={s.checkbox__wrapper}>
                <input type={'checkbox'}
                       onChange={onChangeHandler}
                       checked={valueCheckbox || checked}
                       className={`
                           ${className ? className : ''} 
                           ${s.checkbox__input} 
                           ${checked
                           ? s.checkbox__input_select
                           : s.checkbox__input_not_select}
                           `}
                       {...restProps}/>
                <span className={`${s.checkbox__span} ${spanClassName}`}>{label}</span>
            </label>
        </div>
    );
};