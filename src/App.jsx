import "./App.css";
import NavbarSection from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FooterSection from "./components/Footer";
import { ThemeProvider } from "./context/theme.context.jsx";
import Experience from "./components/Experience.jsx";
import "./i18n";
// import Contact from "./components/Contact.jsx";
import Formacion from "./components/Formacion.jsx";

function App() {
  return (
    <ThemeProvider>
      {/* Fondo dinámico */}
      <NavbarSection />
      <div
        className="fixed inset-0 -z-10 min-h-screen w-full bg-white dark:bg-black 
          [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] 
          dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
      >
      </div>
        {/* Contenido de la app */}
        <About />
        {/* <Contact /> */}
        <Projects />
        <Skills />
        <div className="exp">
          <Formacion />
          <Experience />
        </div>
        <FooterSection />
    </ThemeProvider>
  );
}

export default App;
