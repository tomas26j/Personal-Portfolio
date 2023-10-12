import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Languages",
      languages: ["TypeScript", "JavaScript"],
    },
    { title: "Databases", 
      languages: [
          "PostgreSQL", 
          "MongoDB",
          "MySQL" 
      ] 
    },
    {
      title: "Tools",
      languages: [
          "Redux",
          "Git",
          "Tailwind",
          "Express-js"
      ],
    },
    {
      title: "Other",
      languages: ["Html+Css", "REST", "Redux", "Scrum", "Sequelize", "Vite", "Next.js"],
    },
    {
      title: "Frameworks",
      languages: [
        "PERN",
        "MERN"
      ],
    },
  ];
  return (
    <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
      {/* title */}
      <div className="mb-12 text-[32px] font-medium text-white">
        <span className="text-[#C778DD]">#</span>
        skills
      </div>
      {/* cards */}
      <div className="flex justify-around gap-4 flex-wrap">
        {/* card */}
        {skills.map(({ title, languages }) => {
          return (
            <div
              key={title} // Agrega una clave única para evitar advertencias
              className="w-full sm:w-[45%] md:w-[24%] lg:w-[18%] border border-[#ABB2BF] mb-4"
            >
              <div className="text-white p-2">
                <h2 className="font-semibold">{title}</h2>
              </div>
              <div className="flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                {languages.map((e, index) => {
                  return <span key={index}>{e}</span>; // Agrega una clave única para evitar advertencias
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
