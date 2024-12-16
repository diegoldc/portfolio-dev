import "./App.css";
import NavbarSection from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FooterSection from "./components/Footer";
import { ThemeProvider } from "./context/theme.context.jsx";
import Experience from "./components/Experience.jsx";
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <NavbarSection />
      {/* <LanguageSwitcher /> */}
      <About />
      <Projects />
      <Skills />
      <Experience />
      <FooterSection />
    </ThemeProvider>
  );
}

export default App;
