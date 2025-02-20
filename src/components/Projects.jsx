import { Card, Badge } from "flowbite-react";
import { GrDeploy } from "react-icons/gr";
import { FaGithub, FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import workImage from "../assets/work.gif";
import Popup from "reactjs-popup";



function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      name: "Tangle",
      description: t("projects.description.proj1"),
      imgSrc: "/images/tangle.png",
      techs: [
        "HTML",
        "CSS",
        "React",
        "MongoDB",
        "Node.js",
        "Express",
        "Tailwind",
      ],
      deploy: "https://tangle-web.netlify.app/",
      github: "",
      status: "done",
      popover: t("projects.info.proj1"),
    },
    {
      name: "Catch the snitch!",
      description: t("projects.description.proj2"),
      imgSrc: "/images/snitch3.png",
      techs: ["HTML", "CSS", "JavaScript"],
      deploy: "https://diegoldc.github.io/catch-the-snitch/",
      github: "",
      status: "done",
      popover: t("projects.info.proj2"),
    },
    {
      name: "1UP",
      description: t("projects.description.proj3"),
      imgSrc: "/images/1up.jpeg",
      techs: [
        "HTML",
        "CSS",
        "React",
        "MongoDB",
        "Node.js",
        "Express",
        "Tailwind",
      ],
      deploy: "https://1up-app.netlify.app/",
      github: "",
      status: "done",
      popover: t("projects.info.proj3"),
    },
    {
      name: "GYM APP",
      description: t("projects.description.proj4"),
      imgSrc: "/images/in-progress.jpg",
      techs: ["React Native", "Firebase", "Tailwind"],
      deploy: "",
      github: "",
      status: "in-progress",
      popover: t("projects.info.proj4"),
    },
  ];

  return (
    <section className="py-16 mx-auto sm:py-20" id="projects">
      <h2 className="w-auto text-3xl font-bold mb-10 text-center dark:text-white">
        {t("projects.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-[30px] p-[20px]">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="relative w-[350px] hover:-translate-x-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#cfc0fb] dark:bg-black dark:text-white"
            renderImage={() => (
              <img
                src={project.imgSrc}
                alt={project.name}
                className="w-full h-40 object-cover"
              />
            )}
          >
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
            <div className="relative flex flex-col justify-center items-center gap-2 flex-grow">
              <p className="font-normal text-center text-gray-700 dark:text-gray-400">
                {project.description}
              </p>

              <Popup
                trigger={<button>{<FaPlus />}</button>}
                position="top start"
                closeOnDocumentClick={true}
              
                
                
              >
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white border-4 p-4 min-w-[320px] dark:border-white dark:bg-gray-800 opacity-95">

                <div className="bg-purple-400 border-4 p-2 dark:bg-purple-500 dark:text-white">{project.popover}</div>
                </div>
              </Popup>
            </div>

            <div className="techs">
              {project.techs.map((tech) => (
                <Badge key={tech} color="gray">
                  {tech}
                </Badge>
              ))}
            </div>

            {project.status === "done" ? (
              <div className="flex gap-3 justify-center">
                <a href={project.deploy}>
                  <GrDeploy />
                </a>
                <a href={project.github}>
                  <FaGithub />
                </a>
              </div>
            ) : (
              <img
                src={workImage}
                alt="work in progress"
                className="flex gap-3 justify-center w-10 h-10 m-auto"
              />
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
