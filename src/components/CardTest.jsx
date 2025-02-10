import { Card, Button } from "flowbite-react";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function CardTest() {

  const services = [
    {
      step: "01",
      name: "Diagnostics",
      imageUrl: "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "State-of-the-art diagnostics to accurately identify vehicle issues.",
    },
    {step: "01",
    name: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "State-of-the-art diagnostics to accurately identify vehicle issues."}
  ];

  return (
    <>
    <section className="py-16 mx-auto sm:py-20">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
      <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
      <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Services
          </h2>
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="group h-96 w-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                   {/* Front Face */}
                   <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {service.imageUrl && (
                      <img
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                        src={service.imageUrl}
                        alt={service.name}
                        width={320}
                        height={320}
                      />
                    )}
                    <p className="md:my-6 text-2xl">{service.name}</p>
                  </div>
                 {/* Back Face */}
                 <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                      <p className="text-lg text-pretty text-center mb-4">
                        {service.description}
                      </p>
                      <a href="tel:555-555-5555" className="inline-flex">
                        <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                          <span>Schedule Service</span>
                          
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>


<Card
className="group max-w-sm [perspective:1000px] overflow-hidden"
imgAlt="Example image"
imgSrc="/images/tangle.png"
>
<div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
  {/* FONT FACE */}
  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex flex-col justify-between p-4">
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
  </div>

  {/* BACK FACE */}
  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">TEST</h2>
      <p className="text-lg text-pretty text-center mb-4">TESTD</p>
      <a href="tel:555-555-5555" className="inline-flex">
        <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
          <span>Schedule Service</span>
        </button>
      </a>
    </div>
  </div>
</div>
</Card>

</>
  )
}

export default CardTest