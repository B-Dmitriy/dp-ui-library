import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationRu from '../../assets/locales/ru/translation.json';
import translationEn from '../../assets/locales/en/translation.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // Язык по умолчанию. Если указать массив ['en', 'ru'] прилетят чанки сразу для 2 языков
        // false - не подгружать язык по умолчанию, только активный
        fallbackLng: false,
        debug: __IS_DEV__,
        resources: {
            ru: {
                translation: translationRu,
            },
            en: {
                translation: translationEn,
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
