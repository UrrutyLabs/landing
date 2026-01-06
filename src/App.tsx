import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import LeanZupplyCaseStudy from "./pages/case-studies/LeanZupplyCaseStudy";
import { getLanguageFromPath, type Language } from "./utils/routing";

function LanguageRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = getLanguageFromPath(location.pathname);
    const pathWithoutLang = location.pathname.replace(/^\/(en|es)/, "") || "/";

    // If no language in path, detect from browser or use default
    if (!location.pathname.match(/^\/(en|es)/)) {
      // Get detected language from i18n (checks localStorage first, then browser)
      let detectedLang = i18n.language as Language;

      // If i18n hasn't detected a language yet, check browser directly
      if (!detectedLang || (detectedLang !== "en" && detectedLang !== "es")) {
        const browserLang = navigator.language.split("-")[0]; // Get language code (e.g., "es" from "es-ES")
        detectedLang = browserLang === "es" ? "es" : "en";
      }

      // Ensure it's a supported language
      if (detectedLang !== "en" && detectedLang !== "es") {
        detectedLang = "en";
      }

      const newPath =
        pathWithoutLang === "/"
          ? `/${detectedLang}`
          : `/${detectedLang}${pathWithoutLang}`;
      navigate(newPath, { replace: true });
      return;
    }

    // Update i18n language if it changed
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [location.pathname, i18n, navigate]);

  return (
    <Routes>
      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route
          path="case-studies/leanzupply"
          element={<LeanZupplyCaseStudy />}
        />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageRouter />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
