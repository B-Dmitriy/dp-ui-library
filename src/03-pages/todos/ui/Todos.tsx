import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Todo } from '05-features/Todo';
import { fetchTodos } from '06-entities/todos';
import { getTodos, getTodosIsLoading } from '06-entities/todos';
import { useAppDispatch, useAppSelector } from '07-shared/lib';
import { PageLoader } from '07-shared/ui/PageLoader/PageLoader';
import cls from './Todos.module.scss';

const Todos = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const todos = useAppSelector(getTodos);
    const isLoading = useAppSelector(getTodosIsLoading);


    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    if (isLoading) return <PageLoader />;

    return (
        <div className={cls.Todos}>
            {t('todos')}
            { todos.map((item) => (
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
