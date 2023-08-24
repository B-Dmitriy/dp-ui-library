import { memo } from 'react';
import { Todo } from '06-entities/todos';
import cls from './Todolist.module.scss';

interface TodolistProps {
    todo: Todo;
}
export const Todolist = memo(({ todo }: TodolistProps) => {
    const createAt = new Date(Date.parse(todo.created_at)).toLocaleString();

    return (
        <section className={cls.Todolist}>
            <h3 className={cls.title}>{todo.title}</h3>
            <span className={cls.createAt}>{createAt}</span>
            <div>STATUS: {todo.is_done ? 'true' : 'false'}</div>
            <p>{todo.description}</p>
        </section>
    );
});
