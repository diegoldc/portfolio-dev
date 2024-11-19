import { Card } from "flowbite-react";

function Skills() {
  return (
    <>
      <div className="section">
        <Card className="max-w-sm m-auto">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white m-auto">
            Skills
          </h5>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "50px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />

            <img
              style={{ width: "50px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />

            <img
              style={{ width: "50px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            />

            <img
              style={{ width: "50px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />

            <img
              style={{ width: "50px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />

            <img
              style={{ width: "50px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            />

            <img
              style={{ width: "50px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />

            <img
              style={{ width: "50px" }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default Skills;
