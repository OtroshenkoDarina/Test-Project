import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

const Languages = ['en-US', 'ua']
const lang = localStorage.getItem('i18nextLng')

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        locales: Languages,
        defaultLocale: 'en-US',
        debug: true,
        supportedLngs: Languages,
        load: 'currentOnly',
        lng: Languages?.includes(lang) ? lang : 'en-US',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
