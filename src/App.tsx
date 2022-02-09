import React, {useState} from 'react';
import {Button} from './Button/Button';
import {Checkbox} from './Checkbox/Checkbox';
import {Input} from './Input/Input';

export const App = () => {

    const [checked, setChecked] = useState(false);
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [inputErr, setInputErr] = useState<string | null>(null);

    const setError = () => {
        setInputErr('Error!!!');
    };

    const input3Change = (value: string) => {
        setInputErr(null);
        setInput3(value);
    };

    return (
        <div>
            <div style={{width: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#30363d'}}>
                <br/>
                <Button title={'test'} sizebtn={'small'}/>
                <Button title={'test'} />
                <Button title={'test'} sizebtn={'large'}/>
                <Button title={'test'} type={'primary'}/>
                <Button title={'Set error'} onClick={setError} type={'secondary'}/>
                <hr/>
                <Checkbox checked={checked} onChangeChecked={setChecked} label={'test'}/>
                <hr/>
                <Input value={input} label={'Text'} onChangeText={setInput}/>
                <Input value={input2} label={'Email*'} onChangeText={setInput2} type={'password'}/>
                <Input value={input3} label={'Test'} onChangeText={input3Change} error={inputErr}/>
            </div>
        </div>
    );
};