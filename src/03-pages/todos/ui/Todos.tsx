import { useTranslation } from 'react-i18next';
import cls from './Todos.module.scss';

const Todos = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.Todos}>
            {t('todos')}
        </div>
    );
};

export default Todos;
