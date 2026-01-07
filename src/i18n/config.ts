import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../locales/en/common.json";
import enHome from "../locales/en/home.json";
import enAbout from "../locales/en/about.json";
import enSuccessStories from "../locales/en/success-stories.json";
import enLeanZupply from "../locales/en/leanzupply.json";
import enAIAugmentedArticle from "../locales/en/ai-augmented-article.json";

import esCommon from "../locales/es/common.json";
import esHome from "../locales/es/home.json";
import esAbout from "../locales/es/about.json";
import esSuccessStories from "../locales/es/success-stories.json";
import esLeanZupply from "../locales/es/leanzupply.json";
import esAIAugmentedArticle from "../locales/es/ai-augmented-article.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        successStories: enSuccessStories,
        leanZupply: enLeanZupply,
        aiAugmentedArticle: enAIAugmentedArticle,
      },
      es: {
        common: esCommon,
        home: esHome,
        about: esAbout,
        successStories: esSuccessStories,
        leanZupply: esLeanZupply,
        aiAugmentedArticle: esAIAugmentedArticle,
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    defaultNS: "common",
    ns: [
      "common",
      "home",
      "about",
      "successStories",
      "leanZupply",
      "aiAugmentedArticle",
    ],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
