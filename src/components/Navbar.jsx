
import { Navbar } from "flowbite-react";
import { ThemeContext } from "../context/theme.context";
import { useContext, useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";



function NavbarSection() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar fluid rounded >
      {/* className="fixed top-0 left-0 w-full z-50" */}
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/foto.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
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

        <Navbar.Link href="#" active>
          About
        </Navbar.Link>
        <Navbar.Link  href="#">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSection