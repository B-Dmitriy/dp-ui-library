import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

import translationEn from '../../assets/locales/en/translation.json';
import uiEn from '../../assets/locales/en/ui.json';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        // Язык по умолчанию. Если указать массив ['en', 'ru'] прилетят чанки сразу для 2 языков
        // false - не подгружать язык по умолчанию, только активный
        fallbackLng: 'en',
        resources: {
            en: {
                ui: uiEn,
                translation: translationEn,
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
