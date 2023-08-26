import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationRu from '../../assets/locales/ru/translation.json';
import uiRu from '../../assets/locales/ru/ui.json';
import translationEn from '../../assets/locales/en/translation.json';
import uiEn from '../../assets/locales/en/ui.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // Язык по умолчанию. Если указать массив ['en', 'ru'] прилетят чанки сразу для 2 языков
        // false - не подгружать язык по умолчанию, только активный
        fallbackLng: false,
        debug: false,
        resources: {
            ru: {
                ui: uiRu,
                translation: translationRu,
            },
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
