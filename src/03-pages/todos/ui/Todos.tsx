import { useTranslation } from 'react-i18next';
import cls from './Todos.module.scss';
import { Todolist } from '05-features/Todolist/ui/Todolist';

const Todos = () => {
    const { t } = useTranslation();

    const todo = {
        id: 12312,
        user_id: 123,
        title: 'This is todolist',
        description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum',
        is_done: false,
        deadline: '2023-08-30T12:12:05.655Z',
        created_at: '2023-08-24T12:12:05.655Z',
        updated_at: '2023-08-24T12:12:05.655Z',
    };

    return (
        <div className={cls.Todos}>
            {t('todos')}
            <Todolist todo={todo} />
        </div>
    );
};

export default Todos;
