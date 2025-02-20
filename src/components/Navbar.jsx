import { Navbar } from "flowbite-react";
import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function NavbarSection() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { t } = useTranslation();

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 dark:bg-black">
      <Navbar.Brand href="/">
        <img
          src="dist/foto.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Diego Lázaro
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
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

        <LanguageSwitcher />
        
        <DarkModeSwitch
          checked={theme === "dark"}
          onChange={toggleTheme}
          size={30}
          moonColor="#f1c40f"
          sunColor="#f39c12"
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSection;
