import { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/theme.context";
import { useTranslation } from "react-i18next";

function NavbarSection() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = ["about", "projects", "formacion", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: t("navbar.about") },
    { href: "#projects", label: t("navbar.projects") },
    { href: "#formacion", label: t("experience.title") },
    { href: "mailto:dlazarodecastro@gmail.com?subject=Consulta&body=Hola,", label: t("navbar.contact") },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                <img
                  src="/test2.png"
                  className="relative h-10 w-10 rounded-full object-cover ring-2 ring-purple-500/50 group-hover:ring-purple-500 transition-all duration-300"
                  alt="Logo"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Diego Lázaro
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={index}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                      isActive
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                  >
                    {/* Efecto de fondo en hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    
                    {/* Texto */}
                    <span className="relative">{link.label}</span>
                    
                    {/* Indicador de sección activa */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
                    )}
                  </a>
                );
              })}

              {/* Language Switcher */}
              <div className="flex items-center space-x-2 ml-4 px-3 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg">
                <button 
                  onClick={() => i18n.changeLanguage('en')}
                  className={`text-sm font-medium transition-colors ${
                    i18n.language === 'en' 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => i18n.changeLanguage('es')}
                  className={`text-sm font-medium transition-colors ${
                    i18n.language === 'es' 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
                  }`}
                >
                  ES
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <FaMoon className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                ) : (
                  <FaSun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-purple-600" />
              ) : (
                <FaBars className="w-6 h-6 text-purple-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Mobile Language & Theme */}
            <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => i18n.changeLanguage('en')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    i18n.language === 'en' 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => i18n.changeLanguage('es')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    i18n.language === 'es' 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
                  }`}
                >
                  ES
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <FaMoon className="w-5 h-5 text-purple-600" />
                ) : (
                  <FaSun className="w-5 h-5 text-yellow-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer para que el contenido no quede detrás del navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default NavbarSection;