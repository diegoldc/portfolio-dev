import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ReactOriginal,
  Html5Original,
  JavascriptOriginal,
  Css3Original,
  NodejsOriginalWordmark,
  ExpressOriginal,
  MongodbOriginal,
  TailwindcssOriginal,
  GitOriginal,
  BootstrapOriginal,
  FirebaseOriginal,
  ReactnativeOriginalWordmark,
  TypescriptOriginal,
  JestPlain
} from "devicons-react";

function Skills() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("skills");

  const skillsIcons = [
    { icon: <Html5Original size="50" />, name: "HTML5" },
    { icon: <JavascriptOriginal size="50" />, name: "Javascript" },
    { icon: <ReactOriginal size="50" />, name: "React JS" },
    { icon: <Css3Original size="50" />, name: "Css3" },
    { icon: <NodejsOriginalWordmark size="50" />, name: "Node.js" },
    {
      icon: (
        <ExpressOriginal
          size="50"
          className="fill-current"
        />
      ),
      name: "Express.js",
    },
    { icon: <MongodbOriginal size="50" />, name: "MongoDB" },
    { icon: <TailwindcssOriginal size="50" />, name: "TailwindCSS" },
    { icon: <BootstrapOriginal size="50" />, name: "Bootstrap" },
    { icon: <GitOriginal size="50" />, name: "Git" },
  ];

  const learningIcons = [
    { icon: <FirebaseOriginal size="50" />, name: "Firebase" },
    { icon: <ReactnativeOriginalWordmark size="50" />, name: "React Native" },
    { icon: <TypescriptOriginal size="50" />, name: "Typescript" },
    { icon: <JestPlain size="50" />, name: "Jest" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <>
      <div className="dark:text-white mb-20">
        <div className="w-full max-w-7xl m-auto flex justify-center items-center flex-col p-4">
          <div className="flex gap-10 mb-10">
            <h2
              className={`text-3xl font-bold cursor-pointer ${
                activeTab === "skills"
                  ? "text-black dark:text-white"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("skills")}
            >
              {t("skills")}
            </h2>
            <h2
              className={`text-3xl font-bold cursor-pointer ${
                activeTab === "learning"
                  ? "text-black dark:text-white"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("learning")}
            >
              {t("learning")}
            </h2>
          </div>

          {/* Contenedor para skills */}
          <div
            className={`w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-y-12 border-4 border-deep-purple rounded-lg p-6 m-auto w-11/12 max-w-7xl dark:border-white ${
              activeTab !== "skills" ? "hidden" : ""
            }`}
          >
            {skillsIcons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 group icon-transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Contenedor para learning */}
          <div
            className={`w-full flex flex-wrap justify-center items-center gap-24 border-4 border-deep-purple rounded-lg p-6 m-auto w-11/12 max-w-7xl dark:border-white ${
              activeTab !== "learning" ? "hidden" : ""
            }`}
          >
            {learningIcons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 group icon-transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
