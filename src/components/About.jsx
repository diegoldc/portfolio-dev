import { useEffect, useState } from "react";
import cv from "../files/cv-Diego.pdf";
import { useTranslation } from "react-i18next";

function About() {
  const [isTextVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTextVisible(true); // Activa la visibilidad del texto para la animación
  }, []);

  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full max-w-7xl m-auto px-6 text-gray-800 dark:text-gray-100"
    >
      {/* Imagen y botón de CV */}
      <div className="md:w-96 flex flex-col items-center space-y-4">
        <img
          className="rounded-full w-80 h-80 object-cover shadow-lg"
          src="/foto.png"
          alt="profile"
        />

        {/* Botón de descarga del CV */}
        <a href={cv} download="cv_Lázaro_deCastro_Diego.pdf">
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white text-lg font-semibold rounded-md transition-all">
            {t("download")}
          </button>
        </a>
      </div>


      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1
          className={`text-3xl font-bold underline transition-all duration-1000 ease-in-out ${
            isTextVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          {t("about.title")}
        </h1>

        <h2 className="text-xl font-semibold">{t("welcome")}</h2>

        <p className="text-lg font-medium">{t("about.text")}</p>
      </div>
    </section>
  );
}

export default About;
