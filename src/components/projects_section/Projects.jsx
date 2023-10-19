import Project_card from "../project_card/Project_card";
import first from "./imgs/Rectangle 22.jpg";
import second from "./imgs/Rectangle 22.png";
import third from "./imgs/Rectangle 22 (1).png";
import { Link } from "react-router-dom";

const Projects = () => {
  // CAMBIAR LA INFO DE LOS PROYECTOS
  const projects = [
    {
      img: first,
      langs: ["Javascript", "React", "Tailwind css", "Express.js", "PostgreSQL"],
      title: "Countries App",
      disc: "Countries API single web app (SWA)",
    },
    {
      img: second,
      langs: ["Javascript", "React", "Node.js", "Express.js", "PostgreSQL"],
      title: "Videogames App",
      disc: "Videogames API single web app (SWA)",
    },
    {
      img: third,
      langs: ["Html & CSS", "Javascript", "React", "Tailwind css"],
      title: "Sacabollos Quintana",
      disc: "Car detailing bussines page",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>proyectos
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <Link to="projects">
              <span>Ver todos ~~&gt;</span>
            </Link>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
