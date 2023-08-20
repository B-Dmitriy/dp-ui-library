import { useEffect, useState } from 'react';

const Auth = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/auth/me', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZXMiOlsyXSwiaWF0IjoxNjkyNTE3MDkyLCJleHAiOjE2OTI1MTg4OTJ9.CwZAXzgVuh5K8bl03sdggmpEu-08wRdguPwKVQHCu_I'
            }
        })
            .then(async (res) => await res.json())
            .then((res) => { setData(res); })
            .catch((err) => { console.log(err); });
    }, []);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Auth;
