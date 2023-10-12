import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const DevTimeline = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* title */}
      <div className="mb-2 text-[32px] font-medium text-white">
        <span className="text-[#C778DD]">#</span>
        Ruta-de-aprendizaje
      </div>
      <div className=" text-white text-base font-normal mb-12">
        Cual fue mi camino?
      </div>
      <div className="flex justify-center gap-y-10 md:justify-between gap-4 items-center flex-wrap">
        {/* left */}
        <div className=" flex justify-start gap-4 w-full md:w-[48%] flex-wrap">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon color="white" />
              <Typography
                variant="h4"
                color="white"
                className="leading-none line-clamp-5"
              >
                Desarrollo Web Inicial
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="h6"
                color="gray"
                className="leading-none italic my-2"
              >
                Universidad Tecnologica Nacional BA <br /> Octubre 2022 -
                Diciembre 2022
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal font-roboto text-white"
              >
                Aprendí a crear estructuras sólidas utilizando HTML5 y a dar
                vida a las interfaces con CSS, incluyendo técnicas de Responsive
                Design para garantizar que las aplicaciones se adapten de manera
                óptima a diferentes dispositivos. Además, obtuve un sólido
                conocimiento en JavaScript, lo que me permitió agregar
                interactividad y dinamismo a las páginas web. Esta formación en
                la Universidad Tecnológica Nacional me proporcionó una base
                esencial en desarrollo Front End que complementa mis habilidades
                en el desarrollo Fullstack y Backend, creando un perfil integral
                en el mundo del desarrollo web.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon color="white" />
              <Typography variant="h4" color="white" className="leading-none">
                Carrera de Desarrollo Backend
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="h6"
                color="gray"
                className="leading-none italic my-2"
              >
                CoderHouse <br /> Marzo 2022 - Abril 2023
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-white"
              >
                Adquirí un profundo conocimiento de la lógica detrás de las
                aplicaciones web y cómo optimizar su rendimiento. Me familiaricé
                con ECMAScript 6, lo que me permitió escribir código JavaScript
                moderno y eficiente. Además, obtuve experiencia significativa en
                la gestión de bases de datos, incluyendo bases de datos SQL
                avanzadas con MySQL y bases de datos NoSQL con MongoDB. Aprendí
                a crear y gestionar API REST, lo que facilita la comunicación
                efectiva entre el Frontend y el Backend. Además, el énfasis en
                las operaciones CRUD me proporcionó las herramientas necesarias
                para crear aplicaciones robustas y escalables.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon color="white" />
              <Typography variant="h4" color="white" className="leading-none">
                Desarrollo Fullstack
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="h6"
                color="gray"
                className="leading-none italic my-2"
              >
                Soy Henry <br /> Marzo 2023 - Septiembre 2023
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-white"
              >
                tuve el privilegio de sumergirme en un riguroso programa de
                desarrollo web Fullstack con un enfoque en el stack PERN:
                PostgreSQL, Express.js, React y Node.js. Adquirí habilidades
                sólidas en la creación de interfaces interactivas utilizando
                React y Redux, lo que me permitió desarrollar aplicaciones web
                dinámicas y de alto rendimiento. Además, mi formación incluyó la
                administración de bases de datos con PostgreSQL y Sequelize, lo
                que me permitió diseñar y gestionar eficazmente sistemas de
                almacenamiento de datos. También me familiaricé con las
                metodologías ágiles SCRUM y AGILE, lo que fortaleció mi enfoque
                en la entrega efectiva y colaborativa de proyectos. Además,
                aprendí las mejores prácticas de versionado utilizando GIT, lo
                que facilita la colaboración en equipos de desarrollo.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
        </div>
        {/* right */}
        <div className=" flex justify-center items-center  w-full md:w-[48%]">
          <img
            className=" w-[250px]"
            src={require("./imgs/Group 53.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DevTimeline;