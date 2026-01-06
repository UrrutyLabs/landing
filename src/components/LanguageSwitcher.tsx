import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SUPPORTED_LANGUAGES,
  type Language,
  removeLanguageFromPath,
  addLanguageToPath,
} from "../utils/routing";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = (i18n.language as Language) || "en";

  const handleLanguageChange = (newLang: Language) => {
    if (newLang === currentLang) return;

    const pathWithoutLang = removeLanguageFromPath(location.pathname);
    const newPath = addLanguageToPath(pathWithoutLang, newLang);

    i18n.changeLanguage(newLang);
    navigate(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`text-sm font-medium transition-colors ${
            currentLang === lang
              ? "text-gray-900"
              : "text-gray-600 hover:text-gray-900"
          }`}
          aria-label={`Switch to ${lang === "en" ? "English" : "Español"}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
