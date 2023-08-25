import { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './Todo.module.scss';

interface TodolistProps {
    id: number;
    title: string;
    createdAt: string;
    isDone: boolean;
}

export const Todo = memo(({
    id,
    title,
    createdAt,
    isDone,
}: TodolistProps) => {
    const localeCreateAt = new Date(Date.parse(createdAt)).toLocaleString();

    return (
        <section className={cls.Todo}>
            <aside className={cls.info}>
                <header className={cls.header}>
                    <span className={cls.id}># {id}</span>
                    <Link className={cls.title} to={`/todolist/${id}`}>{title}</Link>
                </header>
                <span className={cls.createAt}>{localeCreateAt}</span>
            </aside>
            <div>{isDone ? 'Done' : 'In progress'}</div>
        </section>
    );
});
