import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ka from './ka.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ka: { translation: ka }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
