import { Input } from '07-shared/ui/Input';
import { Button } from '07-shared/ui/Button';
import { ChangeEvent, useState } from 'react';
import { login } from '06-entities/auth/model/services/login/login';
import { useAppDispatch } from '07-shared/lib';
import { logout } from '06-entities/auth';

const Auth = () => {
    const dispatch = useAppDispatch();

    const [data, setData] = useState({
        login: '',
        password: ''
    });

    const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, login: e.target.value }));
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, password: e.target.value }));
    };

    const onSubmit = () => {
        dispatch(login(data));
    };

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <Input value={data.login} onChange={onChangeLogin}/>
            <Input value={data.password} modification={'secret'} onChange={onChangePassword}/>
            <Button view={'outline'}>CANCEL</Button>
            <Button onClick={onSubmit}>LOGIN</Button>
            <Button view={'secondary'} onClick={onLogout}>LOGOUT</Button>
        </div>
    );
};

export default Auth;
