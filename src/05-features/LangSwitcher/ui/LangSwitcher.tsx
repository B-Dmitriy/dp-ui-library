import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import LangIcon from '../../../07-shared/assets/icons/language.svg';
import { Dropdown } from '../../../07-shared/ui/Dropdown/Dropdown';
import classes from './LangSwitcher.module.scss';

const LangSwitcher = memo(() => {
    const { i18n } = useTranslation();

    const onSelectChangeLang = useCallback(
        (value: string) => i18n.changeLanguage(value),
        [i18n]
    );

    const list = useMemo(
        () => [{ label: 'Русский', value: 'ru' }, { label: 'English', value: 'en' }],
        [i18n.language],
    );

    return (
        <div className={classes.LangSwitcher}>
            <Dropdown
                list={list}
                onSelect={onSelectChangeLang}
            >
                <LangIcon />
            </Dropdown>
        </div>
    );
});

LangSwitcher.displayName = 'LangSwitcher';

export { LangSwitcher };
