import { useState } from "react";
import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { addLanguageToPath, type Language } from "../utils/routing";

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang } = useParams<{ lang: Language }>();
  const { t } = useTranslation("common");
  const currentLang = lang || "en";

  const isHome =
    location.pathname.endsWith(`/${currentLang}`) ||
    location.pathname === `/${currentLang}`;

  const getLocalizedPath = (path: string) => {
    return addLanguageToPath(path, currentLang);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to={getLocalizedPath("/")}
              className="text-xl font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Urruty Labs
            </Link>
            {/* Language switcher - hidden on mobile */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to={getLocalizedPath("/case-studies")}
              className={`text-sm font-medium transition-colors ${
                location.pathname.includes("/case-studies")
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("nav.caseStudies")}
            </Link>
            <Link
              to={getLocalizedPath("/about")}
              className={`text-sm font-medium transition-colors ${
                location.pathname.includes("/about")
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t("nav.about")}
            </Link>
            {isHome ? (
              <a
                href="#contact"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {t("nav.startConversation")}
              </a>
            ) : (
              <a
                href="mailto:nicolas@urrutylabs.com"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {t("nav.startConversation")}
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-900 hover:text-gray-600 transition-colors z-50 relative p-2 -mr-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white z-40 relative">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-4">
              <Link
                to={getLocalizedPath("/case-studies")}
                className={`block text-base font-medium transition-colors ${
                  location.pathname.includes("/case-studies")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={closeMobileMenu}
              >
                {t("nav.caseStudies")}
              </Link>
              <Link
                to={getLocalizedPath("/about")}
                className={`block text-base font-medium transition-colors ${
                  location.pathname.includes("/about")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={closeMobileMenu}
              >
                {t("nav.about")}
              </Link>
              {isHome ? (
                <a
                  href="#contact"
                  className="block text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {t("nav.startConversation")}
                </a>
              ) : (
                <a
                  href="mailto:nicolas@urrutylabs.com"
                  className="block text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {t("nav.startConversation")}
                </a>
              )}
            </div>
          </div>
        )}
      </header>
      <Outlet />
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-sm">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>
      </footer>
    </div>
  );
}

export default Layout;
