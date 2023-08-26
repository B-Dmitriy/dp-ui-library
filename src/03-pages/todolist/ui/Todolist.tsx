import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Todo } from '06-entities/todos';
import { StatusChip } from '07-shared/ui/StatusChip';
import { timeConvertor } from '07-shared/lib';
import cls from './Todolist.module.scss';

const Todolist = () => {
    const { todoId } = useParams();
    const [data, setData] = useState<Todo>({
        'id': 21,
        'user_id': 18,
        'title': 'Test',
        'description': 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
        'is_done': true,
        'deadline': '2023-08-20T08:58:45.660Z',
        'created_at': '2023-08-20T11:56:09.994Z',
        'updated_at': '2023-08-20T08:58:45.660Z'
    });

    const createdAtLocal= timeConvertor.fromISOToLocal(data.created_at);
    const deadlineLocal= timeConvertor.fromISOToLocal(data.deadline);

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
                <header className={cls.header}>
                    <div className={cls.header_info}>
                        <StatusChip status={data.is_done ? 'done' : 'in_progress'} />
                        <span>Todolist #{data.id}</span>
                        <span className={cls.date}>{createdAtLocal}</span>
                    </div>
                    <div className={cls.header_controls}>
                        <button>Change status</button>
                    </div>
                </header>
                <main className={cls.main}>
                    <div className={cls.main_header}>
                        <div>
                            <h3 className={cls.title}>{data.title}</h3>
                            <span className={cls.date}>{deadlineLocal}</span>
                        </div>
                        <button>Edit</button>
                    </div>
                    <p>{data.description}</p>
                </main>
                <section>
                    *Tasks
                </section>
            </>}
        </section>
    );
};

export default Todolist;
