import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import LeanZupplyCaseStudy from "./pages/case-studies/LeanZupplyCaseStudy";
import { getLanguageFromPath, addLanguageToPath, type Language } from "./utils/routing";

function LanguageRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = getLanguageFromPath(location.pathname);
    const pathWithoutLang = location.pathname.replace(/^\/(en|es)/, "") || "/";
    
    // If no language in path, redirect to default language
    if (!location.pathname.match(/^\/(en|es)/)) {
      const defaultLang = (i18n.language as Language) || "en";
      const newPath = pathWithoutLang === "/" ? `/${defaultLang}` : `/${defaultLang}${pathWithoutLang}`;
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
        <Route path="case-studies/leanzupply" element={<LeanZupplyCaseStudy />} />
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
