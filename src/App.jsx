import "./App.css";
import NavbarSection from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FooterSection from "./components/Footer";
import { ThemeProvider } from "./context/theme.context.jsx";

function App() {
  return (
    <ThemeProvider>
      <NavbarSection />
      <About />
      <Projects />
      <Skills />
      <FooterSection />
    </ThemeProvider>
  );
}

export default App;
