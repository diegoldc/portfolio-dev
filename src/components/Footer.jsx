import { Footer } from "flowbite-react";
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";

function FooterSection() {
  return (
    <Footer container className="bg-white dark:bg-black">
      <div className="w-full">
        <Footer.Title
          title="Cada línea de código es un paso hacia el futuro. ¡Construyamos algo increíble juntos!"
          className="flex justify-center mb-0 dark:text-gray-400"
        />

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-around">
          <Footer.Copyright href="#" year={2025} by="Diego Lázaro" />

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterSection;
