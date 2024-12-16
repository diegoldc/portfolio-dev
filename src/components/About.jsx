import { useState, useEffect } from "react";
import { Blockquote } from "flowbite-react";
import cv from "../files/cv-Diego.pdf";
import { useTranslation } from 'react-i18next';

function About() {
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const yourEmail = "dlazarodecastro@gmail.com";

    // Crear el enlace mailto con tu dirección de correo
    const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;

    // Abrir el enlace mailto
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    setTextVisible(true); // Activa la visibilidad del texto para iniciar la animación
  }, []);
  
  const { t } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <>

      <h1
        className={`text-xl font-rubik underline transition-all duration-1000 ease-in-out ${
          isTextVisible
            ? "transform translate-x-0 opacity-100"
            : "transform -translate-x-full opacity-0"
        }`}
      >
        Sobre mí
      </h1>

      <div>
      <h1>{t('welcome')}</h1>
      <p>{t('about')}</p>
      <h2>{t('projects.title')}</h2>
      <p>{t('projects.description')}</p>
    </div>

      <Blockquote>
        {t("about.text")}
      </Blockquote>

      <a
        href={cv}
        download="cv_Lázaro_deCastro_Diego.pdf"
        className="h-8 cursor-pointer font-rubik rounded-md px-4 bg-blue-500 hover:bg-blue-800 transition-background duration-300 text-white flex items-center font-semibold"
      >
        {t("download")}
      </a>

      <button
        className="animate-bounce mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
        onClick={() => setContactFormVisible(!isContactFormVisible)}
      >
        Contact Me
      </button>

      {isContactFormVisible && (
        <div id="contactForm">
          <form id="emailForm" onSubmit={handleFormSubmit}>
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default About;
