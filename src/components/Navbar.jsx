import { Navbar } from "flowbite-react";
import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

function NavbarSection() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { t } = useTranslation();

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50">
      <Navbar.Brand href="/">
        <img
          src="/foto.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Diego Lázaro
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <LanguageSwitcher />

        <label className="ui-switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <div className="slider">
            <div className="circle"></div>
          </div>
        </label>

        <Navbar.Link href="#about" className="h-full flex items-center">
          {t("navbar.about")}
        </Navbar.Link>
        <Navbar.Link href="#projects" className="h-full flex items-center">
          {t("navbar.projects")}
        </Navbar.Link>
        <Navbar.Link
          href="mailto:dlazarodecastro@gmail.com?subject=Consulta&body=Hola,"
          className="h-full flex items-center"
        >
          {t("navbar.contact")}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSection;
