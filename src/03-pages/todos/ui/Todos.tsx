import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Todo } from '05-features/Todo';
import cls from './Todos.module.scss';

const Todos = () => {
    const [data, setData] = useState([]);
    const { t } = useTranslation();

    // const todoo = {
    //     id: 12312,
    //     user_id: 123,
    //     title: 'This is todolist',
    //     description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum',
    //     is_done: false,
    //     deadline: '2023-08-30T12:12:05.655Z',
    //     created_at: '2023-08-24T12:12:05.655Z',
    //     updated_at: '2023-08-24T12:12:05.655Z',
    // };

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/v1/todos', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInJvbGVzIjpbMl0sImlhdCI6MTY5Mjk0MjQ4OCwiZXhwIjoxNjkyOTQ0Mjg4fQ.1GV4EQZntp_qhmvxwpuNfJv91Z4AS_svJC-oa1vMlIc',
                }
            })
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={cls.Todos}>
            {t('todos')}
            { data.map((item) => (
                <Todo
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    createdAt={item.created_at}
                    isDone={item.is_done}
                />
            ))}
        </div>
    );
};

export default Todos;
