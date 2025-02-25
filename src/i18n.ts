import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ruNavbar from "./assets/locales/ru/navbarFooter.json";
import uzNavbar from "./assets/locales/uz/navbarFooter.json";

const resources = {
  Ru: {
    navbarFooter: ruNavbar,
  },
  Uz: {
    navbarFooter: uzNavbar,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "Ru",
    supportedLngs: ["Ru", "Uz"],
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "navbarFooter",
  });

export default i18n;
