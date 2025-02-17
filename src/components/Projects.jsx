import { Card, Badge } from "flowbite-react";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import workImage from "../assets/work.gif";

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
    },
    {
      name: "Catch the snitch!",
      description: t("projects.description.proj2"),
      imgSrc: "/images/snitch3.png",
      techs: ["HTML", "CSS", "JavaScript"],
      deploy: "https://diegoldc.github.io/catch-the-snitch/",
      github: "",
      status: "done",
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
    },
    {
      name: "GYM APP",
      description: t("projects.description.proj4"),
      imgSrc: "/images/1up.jpeg",
      techs: ["React Native", "Firebase", "Tailwind"],
      deploy: "",
      github: "",
      status: "in-progress",
    },
  ];

  return (
    <section className="py-16 mx-auto sm:py-20" id="projects">
      <h2 className="w-auto text-3xl font-bold mb-10 text-center dark:text-white">
        {t("projects.title")}
      </h2>
      <div className="section-projects">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="relative max-w-sm hover:-translate-x-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(231,212,240,0.8)] dark:bg-black dark:text-white"
            imgAlt="Image"
            imgSrc={project.imgSrc}
          >

            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
            <p className="font-normal text-center text-gray-700 dark:text-gray-400">
              {project.description}
            </p>

            {project.status === "done" && (
              <div className="flex gap-3 justify-center">
                <a href={project.deploy}>
                  <GrDeploy />
                </a>
                <a href={project.github}>
                  <FaGithub />
                </a>
              </div>
            )}

            {project.status === "in-progress" && (
              <img
                src={workImage}
                alt="work in progress"
                className="absolute bottom-0 left-0 w-20 h-20"
              />
            )}

            <div className="techs">
              {project.techs.map((tech) => (
                <Badge key={tech} color="gray">
                  {tech}
                </Badge>
              ))}
            </div>

          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
