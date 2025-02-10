import { useEffect, useState } from "react";
// import { Blockquote } from "flowbite-react";
import cv from "../files/cv-Diego.pdf";
import { useTranslation } from "react-i18next";

function About() {
  const [isTextVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTextVisible(true); // Activa la visibilidad del texto para iniciar la animación
  }, []);

  const { t } = useTranslation();

  return (
    <section className="section" id="about">
      <div>
        <h1
          className={`text-xl font-rubik underline transition-all duration-1000 ease-in-out ${
            isTextVisible
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-full opacity-0"
          }`}
        >
          {t("about.title")}
        </h1>

        <div>
          <h1>{t("welcome")}</h1>
        </div>

        <p>{t("about.text")}</p>
      </div>

      <div>
        <img
          class="rounded-full w-36"
          src="/foto.png"
          alt="image description"
        ></img>
        <a href={cv} download="cv_Lázaro_deCastro_Diego.pdf">
          <button className="h-12 cursor-pointer font-rubik rounded-md px-4 bg-blue-500 hover:bg-blue-800 transition-background duration-300 text-white flex items-center font-semibold">
            {t("download")}
          </button>
        </a>
      </div>
    </section>
  );
}

export default About;
