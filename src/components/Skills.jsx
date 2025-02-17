import { useTranslation } from 'react-i18next';
import { ReactOriginal, Html5Original, JavascriptOriginal, Css3Original, NodejsOriginalWordmark, ExpressOriginal, MongodbOriginal, TailwindcssOriginal, GitOriginal, BootstrapOriginal, FirebaseOriginal, ReactnativeOriginalWordmark } from 'devicons-react';

function Skills() {

  const { t } = useTranslation();

  return (
    <>
      <div className="dark:text-white mb-20">
        <div className="w-full max-w-7xl m-auto flex justify-center items-center flex-col">
        <h2 className="w-auto text-3xl font-bold mb-10 text-center">{t("skills")}</h2>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-12">

        <div className="flex flex-col items-center gap-2 group">
          <Html5Original size="70"/>
          <span>HTML5</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <JavascriptOriginal size="70"/>
          <span>Javascript</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <ReactOriginal size="70"/>
          <span>React JS</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <Css3Original size="70"/>
          <span>Css3</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <NodejsOriginalWordmark size="70"/>
          <span>Node.js</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <ExpressOriginal size="70"/>
          <span>Express.js</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <MongodbOriginal size="70"/>
          <span>MongoDB</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <TailwindcssOriginal size="70"/>
          <span>TailwindCSS</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <BootstrapOriginal size="70"/>
          <span>Bootstrap</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <GitOriginal size="70"/>
          <span>Git</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <FirebaseOriginal size="70"/>
          <span>Firebase</span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
          <ReactnativeOriginalWordmark size="70"/>
          <span>React Native</span>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Skills;
