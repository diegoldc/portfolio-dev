import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import cv from "../files/cv-Diego.pdf";
import { useTranslation } from "react-i18next";

function About() {
  const [isTextVisible, setTextVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTextVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full max-w-7xl m-auto px-6 text-gray-800 dark:text-gray-100 overflow-hidden"
    >
      {/* Elementos decorativos de fondo con parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Círculos flotantes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 dark:opacity-5"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${i * 15}%`,
              top: `${i * 10}%`,
              background: `linear-gradient(135deg, ${
                i % 2 === 0 ? "#a855f7" : "#3b82f6"
              }, transparent)`,
              transform: `translate(${mousePosition.x * (i + 1) * 0.5}px, ${
                scrollY * 0.1 * (i + 1) + mousePosition.y * (i + 1) * 0.5
              }px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        ))}

        {/* Patrón de puntos */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Imagen y botón de CV */}
      <div className="relative md:w-96 flex flex-col items-center space-y-6 z-10">
        {/* Imagen con animación y borde gradiente */}
        <div
          className={`relative transition-all duration-1000 ${
            isTextVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{
            animationDelay: "0.2s",
          }}
        >
          {/* Borde gradiente animado */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-md animate-spin-slow"
            style={{ animation: "spin 8s linear infinite" }}
          ></div>

          <div className="relative group">
            <img
              className="rounded-full w-80 h-80 object-cover shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 relative z-10"
              src="/test2.png"
              alt="profile"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            />
            {/* Efecto glow en hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Iconos sociales con animación secuencial */}
        <div className="flex gap-6">
          {[
            { icon: FaLinkedin, url: "", delay: "0.4s" },
            {
              icon: FaGithub,
              url: "https://github.com/diegoldc",
              delay: "0.6s",
            },
          ].map(({ icon: Icon, url, delay }, index) => (
            <a
              key={index}
              href={url}
              className={`relative group transition-all duration-700 ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 group-hover:scale-110"></div>
              <Icon
                size={50}
                className="relative text-purple-500 dark:text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white"
              />
            </a>
          ))}
        </div>

        {/* Botón de descarga del CV mejorado */}
        <div
          className={`transition-all duration-700 ${
            isTextVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <a href={cv} download="cv_Lázaro_deCastro_Diego.pdf">
            <button className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg overflow-hidden group shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              {/* Efecto shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000"></div>

              {/* Contenido del botón */}
              <span className="relative flex items-center gap-2">
                <FaDownload className="group-hover:animate-bounce" />
                {t("download")}
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Texto con animaciones */}
      <div className="relative md:w-1/2 text-center md:text-left space-y-6 z-10 mt-10 md:mt-0">
        {/* Título con gradiente animado */}
        <h1
          className={`text-5xl font-bold transition-all duration-1000 ease-in-out ${
            isTextVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            {t("about.title")}
          </span>
          {/* Subrayado animado */}
          <div
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mt-2 transition-all duration-1000"
            style={{
              width: isTextVisible ? "100%" : "0%",
            }}
          ></div>
        </h1>

        {/* Subtítulo */}
        <h2
          className={`text-2xl font-semibold text-gray-700 dark:text-gray-300 transition-all duration-1000 ${
            isTextVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {t("welcome")} 👋
        </h2>

        {/* Texto principal */}
        <p
          className={`text-lg leading-relaxed text-gray-600 dark:text-gray-400 transition-all duration-1000 ${
            isTextVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          {t("about.text")}
        </p>

        {/* Stats cards */}
        <div
          className={`grid grid-cols-3 gap-4 transition-all duration-1000 ${
            isTextVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "0.9s" }}
        >
          {[
            { number: "1+", label: "Years" },
            { number: "4+", label: "Projects" },
            { number: "100%", label: "Passion" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300 border border-purple-200 dark:border-purple-800"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default About;
