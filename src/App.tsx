import React, {useState} from 'react';
import {Button} from './Button/Button';
import {Checkbox} from './Checkbox/Checkbox';

export const App = () => {

    const [checked, setChecked] = useState(false);

    return (
        <div>
            <div style={{width: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'gray'}}>
                <br/>
                <Button title={'test'} />
                <Button title={'test'} type={'primary'}/>
                <Button title={'test'} type={'secondary'}/>
                <hr/>
                <Checkbox checked={checked} onChangeChecked={setChecked} label={'test'}/>
            </div>
        </div>
    );
};