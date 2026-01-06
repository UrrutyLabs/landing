import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../locales/en/common.json";
import enHome from "../locales/en/home.json";
import enAbout from "../locales/en/about.json";
import enCaseStudies from "../locales/en/case-studies.json";
import enLeanZupply from "../locales/en/leanzupply.json";

import esCommon from "../locales/es/common.json";
import esHome from "../locales/es/home.json";
import esAbout from "../locales/es/about.json";
import esCaseStudies from "../locales/es/case-studies.json";
import esLeanZupply from "../locales/es/leanzupply.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        caseStudies: enCaseStudies,
        leanZupply: enLeanZupply,
      },
      es: {
        common: esCommon,
        home: esHome,
        about: esAbout,
        caseStudies: esCaseStudies,
        leanZupply: esLeanZupply,
      },
    },
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common", "home", "about", "caseStudies", "leanZupply"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
