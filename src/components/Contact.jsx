import { useState } from "react";

function Contact() {
    const [isContactFormVisible, setContactFormVisible] = useState(false);
    
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

  return (
    <>
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
  )
}

export default Contact