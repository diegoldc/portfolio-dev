import { Card, Dropdown, Button, Avatar, Blockquote } from "flowbite-react";
import cv from "../files/cv-Diego.pdf"

function About() {
  return (
    <>
      <div>About</div>

      <h1 className="text-xl font-rubik underline">Hello world!</h1>

      <a href={cv} download="cv_Lázaro_deCastro_Diego.pdf" className="h-8 cursor-pointer font-rubik rounded-md px-4 bg-blue-500 hover:bg-blue-800 transition-background duration-300 text-white flex items-center font-semibold">Download CV</a>
 
      

      <Blockquote>
        Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.
      </Blockquote>
    </>
  );
}

export default About;
