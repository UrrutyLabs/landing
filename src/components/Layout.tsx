import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
          >
            Urruty Labs
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/case-studies" ||
                location.pathname.startsWith("/case-studies/")
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/about"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            {isHome ? (
              <a
                href="#contact"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                Start a conversation
              </a>
            ) : (
              <a
                href="mailto:nicolas@urrutylabs.com"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                Start a conversation
              </a>
            )}
          </div>
        </nav>
      </header>
      {children}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-sm">
          © {new Date().getFullYear()} Urruty Labs. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;
