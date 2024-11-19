import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="section-projects">
        <Card
          className="max-w-sm"
          imgAlt="Example image"
          imgSrc="/images/tangle.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tangle
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            JavaScript Game
          </p>
          <div style={{display:"flex", gap:"10px"}}>
            <GrDeploy />
            <FaGithub />
          </div>
          <Button outline gradientDuoTone="greenToBlue">
            Green to Blue
          </Button>
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
        </Card>

        <Card className="max-w-sm" imgAlt="App image" imgSrc="/images/1up.jpeg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            1UP
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Videogames library
          </p>
        </Card>
      </div>
    </>
  );
}

export default Projects;
