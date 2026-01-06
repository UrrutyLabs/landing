import { useTranslation } from "react-i18next";

export const SUPPORTED_LANGUAGES = ["en", "es"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export function getLanguageFromPath(pathname: string): Language {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (SUPPORTED_LANGUAGES.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }

  return "en"; // Default to English
}

export function removeLanguageFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (SUPPORTED_LANGUAGES.includes(firstSegment as Language)) {
    return "/" + segments.slice(1).join("/");
  }

  return pathname;
}

export function addLanguageToPath(path: string, lang: Language): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const pathWithoutLang = removeLanguageFromPath(cleanPath);

  if (pathWithoutLang === "/") {
    return `/${lang}`;
  }

  return `/${lang}${pathWithoutLang}`;
}

export function useLocalizedLink() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as Language;

  return (path: string) => {
    return addLanguageToPath(path, currentLang);
  };
}
