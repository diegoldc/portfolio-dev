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
} from "devicons-react";

function Skills() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("skills");

  const skillsIcons = [
    { icon: <Html5Original size="70" />, name: "HTML5" },
    { icon: <JavascriptOriginal size="70" />, name: "Javascript" },
    { icon: <ReactOriginal size="70" />, name: "React JS" },
    { icon: <Css3Original size="70" />, name: "Css3" },
    { icon: <NodejsOriginalWordmark size="70" />, name: "Node.js" },
    { icon: <ExpressOriginal size="70" />, name: "Express.js" },
    { icon: <MongodbOriginal size="70" />, name: "MongoDB" },
    { icon: <TailwindcssOriginal size="70" />, name: "TailwindCSS" },
    { icon: <BootstrapOriginal size="70" />, name: "Bootstrap" },
    { icon: <GitOriginal size="70" />, name: "Git" },
  ];

  const learningIcons = [
    { icon: <FirebaseOriginal size="70" />, name: "Firebase" },
    { icon: <ReactnativeOriginalWordmark size="70" />, name: "React Native" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="dark:text-white mb-20">
        <div className="w-full max-w-7xl m-auto flex justify-center items-center flex-col">
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
            className={`w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-y-12 ${
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
            className={`w-full flex justify-center items-center gap-24 ${
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