import { Card, Button, Badge } from "flowbite-react";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <>
      <h2 className="w-auto text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="section-projects">
        <Card
          className="max-w-sm hover:-translate-x-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(231,212,240,0.8)]"
          imgAlt="Example image"
          imgSrc="/images/tangle.png"
        >
          <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            Tangle
          </h5>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            JavaScript Game
          </p>
          <div className="flex gap-3 justify-center">
            <a href="https://tangle-web.netlify.app/">
              <GrDeploy />
            </a>
            <a href="">
              <FaGithub />
            </a>
          </div>
          <div className="techs">
            <Badge color="gray">HTML</Badge>
            <Badge color="gray">CSS</Badge>
            <Badge color="gray">React</Badge>
            <Badge color="gray">MongoDB</Badge>
            <Badge color="gray">Node.js</Badge>
            <Badge color="gray">Express</Badge>
            <Badge color="gray">Tailwind</Badge>
          </div>
        </Card>

        <Card
          className="max-w-sm"
          imgAlt="Game image"
          imgSrc="/images/snitch3.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Catch the snitch!
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            JavaScript Game
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://diegoldc.github.io/catch-the-snitch/">
              <GrDeploy />
            </a>
            <FaGithub />
          </div>
          <Button outline gradientDuoTone="greenToBlue">
            Green to Blue
          </Button>
        </Card>

        <Card className="max-w-sm" imgAlt="App image" imgSrc="/images/1up.jpeg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            1UP
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Videogames library
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://1up-app.netlify.app/">
              <GrDeploy />
            </a>
            <FaGithub />
          </div>
          <Button outline gradientDuoTone="greenToBlue">
            Green to Blue
          </Button>
        </Card>
      </div>
    </>
  );
}

export default Projects;
