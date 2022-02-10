import React, {useState} from 'react';
import {Button} from './components/Button/Button';
import {Checkbox} from './components/Checkbox/Checkbox';
import {Input} from './components/Input/Input';
import {DoubleRange} from './components/DoubleRange/DoubleRange';
import {Range} from './components/Range/Range';
import {Radio} from './components/Radio/Radio';
import {Select} from './components/Select/Select';
import { IoAirplaneSharp } from 'react-icons/io5';

export const App = () => {

    const [checked, setChecked] = useState(false);
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [drange, setDrange] = useState<number[]>([20, 30]);
    const [drange1, setDrange1] = useState<number>(10);
    const [inputErr, setInputErr] = useState<string | null>(null);
    const [checked1, setChecked1] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState<string>('two');

    const setError = () => {
        setInputErr('Email error');
    };

    const input3Change = (value: string) => {
        setInputErr(null);
        setInput3(value);
    };

    const checked1Change = (e: boolean) => {
        setChecked1(e);
    };

    const onChangeSelectHandler = (e: string) => {
        setSelectValue(e);
    };


    return (
        <div>
            <div style={{
                width: '400px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: '#30363d'
            }}>
                <hr/>
                {/*<Preloader/>*/}
                <hr/>
                <Button title={'test'} sizebtn={'small'}/>
                <Button title={'test'} icon={<IoAirplaneSharp />}/>
                <Button title={'test'} sizebtn={'large'}/>
                <Button title={'test'} type={'primary'}/>
                <Button title={'Set error'} onClick={setError} type={'secondary'}/>
                <hr/>
                <Checkbox checked={checked} onChangeChecked={setChecked} label={'test'}/>
                <hr/>
                <form>
                    <Input value={input} onChangeText={setInput}/>
                    <Input value={input} label={'Text'} onChangeText={setInput}/>
                    <Input value='value' type='submit' className={'test'}/>
                </form>
                <Input value={input2} label={'Email'} onChangeText={setInput2} type={'email'}/>
                <Input value={input3} label={'Email'} onChangeText={input3Change} error={inputErr}/>
                <hr/>
                <div>{drange[0]} - {drange[1]}</div>
                <DoubleRange
                    min={0}
                    max={100}
                    value={drange}
                    onChange={setDrange}
                />
                <div>{drange1}</div>
                <Range min={0} max={100} value={drange1} onChange={setDrange1}/>
                <hr/>
                <Radio type={'radio'} checked={checked1} onChangeChecked={checked1Change} label={'label'}/>
                <hr/>
                <Select value={selectValue} childrenArray={['one', 'two', 'three']} onChangeSelect={onChangeSelectHandler}/>
            </div>
        </div>
    );
};