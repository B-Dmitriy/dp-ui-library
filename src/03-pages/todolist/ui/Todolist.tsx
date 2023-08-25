import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Todo } from '06-entities/todos';
import cls from './Todolist.module.scss';

const Todolist = () => {
    const { todoId } = useParams();
    const [data, setData] = useState<Todo>();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/todos/${todoId}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInJvbGVzIjpbMl0sImlhdCI6MTY5Mjk0MjQ4OCwiZXhwIjoxNjkyOTQ0Mjg4fQ.1GV4EQZntp_qhmvxwpuNfJv91Z4AS_svJC-oa1vMlIc',
                }
            })
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className={cls.Todolist}>
            { data && <>
                <header>
                    <span>{data.id}</span>
                    <h3>{data.title}</h3>
                    <span>{data.is_done ? 'Done' : 'In progress'}</span>
                    <p>{data.description}</p>
                </header>
                <aside>
                    Author: {data.user_id}
                </aside>
                <main>
                    <p>{data.deadline}</p>
                    <p>{data.created_at}</p>
                    <p>{data.updated_at}</p>
                </main>
            </>}
        </section>
    );
};

export default Todolist;
