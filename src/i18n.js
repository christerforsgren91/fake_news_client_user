import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en';
import se from './languages/se';

const resources = {
  se: se,
  en: en,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

export default i18n;
