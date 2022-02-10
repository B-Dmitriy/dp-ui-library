import React from 'react';
import s from './DoubleRange.module.css';
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

interface IProps {
    min: number
    max: number
    step?: number
    value: number[]
    defaultValue?: number[]
    onChange: (value: number[]) => void
}

export const DoubleRange: React.FC<IProps> = props => {

    const {
        min,
        max,
        step = 1,
        value,
        defaultValue,
        onChange
    } = props;

    return (
        <div className={s.doubleRange} data-testid={'doubleRange_wrapper'}>
            <Range
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
                trackStyle={[{
                    backgroundColor: '#259cd3',
                    boxShadow: '0 15px 20px rgb(10, 136, 196, .4)',
                    height: '10px'
                }]}
                handleStyle={[{
                    position: 'absolute',
                    top: '-1px',
                    width: '16px',
                    height: '32px',
                    borderRadius: '10px',
                    border: '2px solid #259cd3',
                    boxShadow: '0 15px 20px rgb(10, 136, 196, .4)',
                }, {
                    position: 'absolute',
                    top: '-1px',
                    width: '16px',
                    height: '32px',
                    borderRadius: '10px',
                    border: '2px solid #259cd3',
                    boxShadow: '0 15px 20px rgb(10, 136, 196, .2)',
                }]}
            />
        </div>
    );
};