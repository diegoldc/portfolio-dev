import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json'; // English
import translationES from './locales/es/translation.json'; // Spanish

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Set the default language
  keySeparator: true, // Habilitar claves anidadas (o elimina esta línea)
  fallbackLng: false,
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;
