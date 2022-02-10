import React from 'react';
import s from './Range.module.css';
import Slider from 'rc-slider/lib/Slider';

interface IProps {
    min: number
    max: number
    step?: number
    defaultValue?: number
    value: number
    onChange: (value: number) => void
}

export const Range: React.FC<IProps> = props => {

    const {
        min,
        max,
        step = 1,
        defaultValue,
        value,
        onChange
    } = props;

    return (
        <div className={s.range} data-testid={'range_wrapper'}>
            <Slider
                min={min}
                max={max}
                step={step}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                railStyle={{
                    backgroundColor: 'lightgrey',
                    height: '10px'
                }}
                trackStyle={{
                    backgroundColor: '#259cd3',
                    boxShadow: '0 15px 20px rgb(10, 136, 196, .4)',
                    height: '10px'
                }}
                handleStyle={{
                    position: 'absolute',
                    top: '-1px',
                    width: '16px',
                    height: '32px',
                    borderRadius: '10px',
                    border: '2px solid #259cd3',
                    boxShadow: '0 15px 20px rgb(10, 136, 196, .4)',
                }}
            />
        </div>
    );
};