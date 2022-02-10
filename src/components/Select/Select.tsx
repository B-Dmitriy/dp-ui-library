import React, {ChangeEvent} from 'react';
import s from './Select.module.css';

interface IProps extends React.HTMLProps<HTMLSelectElement> {
    value: string
    childrenArray: string[]
    className?: string
    onChangeSelect?: (value: string) => void
}

export const Select: React.FC<IProps> = props => {

    const {
        value,
        childrenArray,
        onChange,
        onChangeSelect,
        ...restProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeSelect && onChangeSelect(e.currentTarget.value);
    };

    const options = childrenArray.map((o, i) =>
        <option key={i} className={s.select__option}>{o}</option>);

    return (
        <div className={s.select}>
            <select
                value={value}
                data-testid={'select'}
                className={s.select__element}
                onChange={onChangeHandler}
                {...restProps}
            >
                {options}
            </select>
        </div>
    );
};