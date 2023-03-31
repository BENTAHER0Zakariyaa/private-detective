import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFR from './../assets/languages/fr.json';

const LanguageContext = React.createContext('fr');

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage);
  }

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        fr: {
          translation: translationFR
        }
      },
      lng: language,
      fallbackLng: 'fr',
      interpolation: {
        escapeValue: false
      }
    });

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
