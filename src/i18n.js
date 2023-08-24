import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslation from "./i18n/en.json";
import esTranslation from "./i18n/es.json";
import noTranslation from "./i18n/no.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: enTranslation},
      es: { translation: esTranslation},
      no: { translation: noTranslation},
    },
    interpolation: {
      escapevalue: false,
    },
  });

export default i18n;



/*
        backend: {
      //  translation file path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    //  disable in production
    debug: false,
    //  You can have multiple name-spaces in case you want to divide a huge translation
    //  Into smaller pieces and load them on demand
    ns: ["common", "experience", "home"],

    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },

*/