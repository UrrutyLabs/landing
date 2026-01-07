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
    <div
      className="flex items-center border border-gray-900 rounded-lg overflow-hidden"
      role="group"
      aria-label="Language selector"
    >
      {SUPPORTED_LANGUAGES.map((lang, index) => (
        <div key={lang} className="flex items-center">
          <button
            onClick={() => handleLanguageChange(lang)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
              currentLang === lang
                ? "text-gray-900 bg-gray-50"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label={`Switch to ${lang === "en" ? "English" : "Español"}`}
            aria-pressed={currentLang === lang}
          >
            {lang.toUpperCase()}
          </button>
          {index < SUPPORTED_LANGUAGES.length - 1 && (
            <div className="h-4 w-px bg-gray-900" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
